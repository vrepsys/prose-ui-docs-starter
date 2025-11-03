import { extractMetadata } from '@/lib/extract-metadata'
import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import { remarkPlugins } from '@prose-ui/core'
import { z } from 'zod'

const pages = defineCollection({
  name: 'pages',
  directory: 'content/docs',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string().optional(),
    content: z.string(),
  }),
  transform: async (page, ctx) => {
    const { toc, title } = await extractMetadata(page.content)
    const content = await compileMDX(ctx, page, {
      remarkPlugins: remarkPlugins(),
    })
    let path
    if (page._meta.path === 'index') {
      path = ''
    } else if (page._meta.path.endsWith('/index')) {
      path = page._meta.path.slice(0, -6)
    } else {
      path = page._meta.path
    }
    return {
      ...page,
      path: `/${path}`,
      toc,
      title: page.title ?? title,
      content,
    }
  },
})

export default defineConfig({
  collections: [pages],
})
