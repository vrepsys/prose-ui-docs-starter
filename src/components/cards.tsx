import Link from 'next/link'
import React from 'react'

type Content = {
  title: string
  description: string
  url: string
  icon: React.ComponentType<any>
}

const Cards = ({ content }: { content?: Content[] }) => (
  <nav
    role="list"
    className="mb-(--p-content-gap-clusters) mt-(--p-content-gap) grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3"
  >
    {content?.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        description={card.description}
        icon={card.icon}
        url={card.url}
      />
    ))}
  </nav>
)

const Card = ({ title, description, url, icon: Icon }: Content) => (
  <Link
    role="listitem"
    className="border-base bg-background-low hover:border-accent-low hover:bg-background-low/95 overflow-hidden rounded border transition duration-100 active:translate-y-px"
    href={url}
  >
    <div className="flex flex-col sm:flex-row gap-3 p-4">
      {Icon && (
        <Icon
          className="text-foreground-low mt-0.5"
          size={20}
          strokeWidth={1.5}
          absoluteStrokeWidth={true}
        />
      )}
      <div className="flex flex-1 flex-col gap-1">
        <span className="text-sm font-medium">{title}</span>
        {description && <span className="text-foreground-low text-sm">{description}</span>}
      </div>
    </div>
  </Link>
)

export default Cards
