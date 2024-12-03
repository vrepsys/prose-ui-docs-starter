import { Button } from '@/components/ui/button'
import { Feature } from '@/components/feature'
import Link from 'next/link'
import { SiVercel } from '@icons-pack/react-simple-icons'
import { ArrowRight } from 'lucide-react'

export default () => {
  return (
    <div className="prose-ui">
      <div className="mx-auto flex w-full max-w-3xl flex-col pt-16 mb-32">
        <h1>
          Documentation starter template <br />
          with Prose UI + Next.js
        </h1>
        <p className="text-color-low text-lg font-medium">
          Welcome, travelers and builders of the digital frontier. This template is your launchpad
          for crafting stunning documentation websites.
        </p>
        <div className="mt-8 flex items-center gap-2">
          <Button size="lg" asChild>
            <Link href="/docs">
              Documentation <ArrowRight size={16} />
            </Link>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <Link
              href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world"
              target="_blank"
            >
              <SiVercel size={16} />
              Deploy with Vercel
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 [&>*:nth-child(even)]:border-l-2 [&>*]:border-color-base [&>*]:border-t-2 border-b-2">
          <Feature
            title="Next.js 15 with app router"
            description="Leverage the latest Next.js 15 features, including the app router, server actions, and more."
          />
          <Feature
            title="Tailwind CSS"
            description="Uses Tailwind CSS to achieve a clean and modern look."
          />
          <Feature
            title="Shadcn UI"
            description="Uses Tailwind CSS to achieve a clean and modern look."
          />
          <Feature
            title="Dark mode witih next/theme"
            description="Uses Tailwind CSS to achieve a clean and modern look."
          />
          <Feature
            title="WYSIWYG editing"
            description="Edit your Prose UI content with Dhub's inline editor."
          />
          <Feature
            title="Content collections"
            description="Uses Content Collections with MDX bundler to manage MDX content."
          />
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto w-full max-w-3xl flex-col pt-16 mb-32 flex mt-12 items-center justify-between text-sm ">
          <p>
            Open source documentation stater template with Next.js and Prose UI. Built with ❤️ by{' '}
            <a href="https://valdemaras.com">Valdemaras</a>, designed by <a href="#">Domas</a>
          </p>
        </div>
      </div>
    </div>
  )
}
