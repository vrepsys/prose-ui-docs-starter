import { SiGithub } from '@icons-pack/react-simple-icons'
import { ExternalLinkIcon } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
  image: StaticImageData
  title: string
  description: string
  previewUrl: string
  sourceUrl: string
}

export const TemplateCard = ({ image, title, description, previewUrl, sourceUrl }: Props) => {
  return (
    <div className="border-color-base hover:border-color-accent-base bg-color-low hover:bg-color-low/95 group overflow-hidden rounded-lg border transition duration-100">
      <div className="border-b-color-base w-full border-b">
        <Image alt="Template preview" src={image} />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-color-high text-xl font-bold tracking-tight">{title}</h3>
          <div className="text-color-low text-sm tracking-wide">{description}</div>
        </div>
        <div className="flex justify-end gap-3">
          <Link href={previewUrl} className="group flex items-center gap-1 text-sm">
            <ExternalLinkIcon className="text-color-base" size={16} />
            <span className="">Preview</span>
          </Link>
          <Link href={sourceUrl} className="group flex items-center gap-1 text-sm">
            <SiGithub className="text-color-base" size={16} />
            <span className="">Source</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
