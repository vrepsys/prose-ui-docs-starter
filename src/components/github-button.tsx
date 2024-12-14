import Link from 'next/link'
import { Button } from './ui/button'
import { SiGithub } from '@icons-pack/react-simple-icons'

export const GithubButton = () => {
  return (
    <Button variant="navitem" aria-label="Github" size="icon">
      <Link href="https://github.com/vrepsys/prose-ui-docs-starter">
        <SiGithub size={16} />
      </Link>
    </Button>
  )
}
