import basicTemplate from '../../../public/img/template-basic.png'
import docsTemplate from '../../../public/img/template-docs.png'
import { TemplateCard } from '@/components/template-card/index'

const Templates = () => {
  return (
    <div className="mx-auto w-full max-w-3xl pt-16">
      <div className="grid grid-cols-2 gap-4">
        <TemplateCard
          image={basicTemplate}
          title="Basic starter"
          description="A basic template with Next.js 15, `next/mdx`, and Prose UI to render MDX content."
          previewUrl="#"
          sourceUrl="https://github.com/vrepsys/prose-ui-basic-starter"
        />
        <TemplateCard
          image={docsTemplate}
          title="Docs starter"
          description="A documenatation starter with Next.js 15, tailwindcss, content collections, dark theme toggle, and Prose UI for content."
          previewUrl="#"
          sourceUrl="https://github.com/vrepsys/prose-ui-blog-starter"
        />
      </div>
    </div>
  )
}
export default Templates
