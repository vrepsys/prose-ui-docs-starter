type FeatureProps = {
  title: string
  description: string
}

export const Feature = ({ title, description }: FeatureProps) => {
  return (
    <div className="odd:pr-10 even:pl-10 py-10 [&>*:first-child]:mt-0 and [&>*:last-child]:mb-0">
      <h3>{title}</h3>
      <p className="text-color-low font-medium">{description}</p>
    </div>
  )
}
