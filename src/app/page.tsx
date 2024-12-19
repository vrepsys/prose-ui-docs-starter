import { Button } from '@/components/ui/button'
import { Feature } from '@/components/feature'
import Link from 'next/link'
import { SiVercel, SiNextdotjs, SiTailwindcss, SiShadcnui } from '@icons-pack/react-simple-icons'
import { Footer } from '@/components/navigation/footer'

export default () => {
  return (
    <div className="prose-ui">
      <div className="mx-auto flex w-full items-center max-w-[var(--site-width)] px-[var(--site-padding-x)] flex-col pt-16 mb-32">
        <div className="text-center max-w-2xl">
          <h1>
            Documentation starter template <br />
            with Prose UI + Next.js
          </h1>
          <p className="text-color-low text-lg">
            Welcome, travelers and builders of the digital frontier. This template is your launchpad
            for crafting stunning documentation websites.
          </p>
          <div className="mt-16 justify-center flex flex-col md:flex-row items-center gap-4 md:gap-2">
            <Button size="lg" asChild>
              <Link href="/docs">View Documentation</Link>
            </Button>
            <Button variant="link" size="lg" asChild>
              <Link
                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvrepsys%2Fprose-ui-docs-starter"
                target="_blank"
              >
                <SiVercel size={16} />
                Deploy with Vercel
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-32 h-px w-full bg-gradient-to-r from-transparent via-[hsl(var(--p-color-border))] to-transparent"></div>

        {/* //[&>*:nth-child(even)]:border-l-2 [&>*]:border-color-base [&>*]:border-t-2 */}
        <div className="md:px-12 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-x-5 md:gap-x-24">
          <Feature
            icon={<SiNextdotjs size={20} />}
            title="Next.js 15 with app router"
            description="Leverage the latest Next.js 15 features, including the app router, server actions, and more."
          />
          <Feature
            icon={<SiTailwindcss size={20} />}
            title="Tailwind CSS"
            description="Uses Tailwind CSS to achieve a clean and modern look."
          />
          <Feature
            icon={<SiShadcnui size={20} />}
            title="Shadcn UI"
            description="Uses Tailwind CSS to achieve a clean and modern look."
          />
          <Feature
            icon={<SiNextdotjs size={20} />}
            title="Dark mode witih next/theme"
            description="Uses Tailwind CSS to achieve a clean and modern look."
          />
          <Feature
            icon={<SiNextdotjs size={20} />}
            title="WYSIWYG editing"
            description="Edit your Prose UI content with Dhub's inline editor."
          />
          <Feature
            icon={<div>C</div>}
            title="Content collections"
            description="Uses Content Collections with MDX bundler to manage MDX content."
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
