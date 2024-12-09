import { SiNextdotjs, SiNextdotjsHex } from '@icons-pack/react-simple-icons'

type FeatureProps = {
  title: string
  description: string
  icon: React.ReactNode
}

export const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className="py-10">
      <h4 className="flex items-center gap-2">
        {icon}
        {title}
      </h4>
      <p className="text-color-low leading-normal">{description}</p>
    </div>
  )
}
