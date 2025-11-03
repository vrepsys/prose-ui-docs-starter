import { PropsWithChildren } from 'react'
import { navigationTree } from './navigation/nav-tree'
import { SideNav } from './navigation/sidenav'
import { ScrollArea } from './ui/scroll-area'
import { Footer } from './navigation/footer'

export const DocsLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main className="w-full">
        <div className="relative mx-auto flex w-full max-w-(--site-width) px-(--site-padding-x) md:pl-0 md:pr-(--site-padding-x)">
          <div className="sticky top-(--topnav-height) hidden h-[calc(100vh-var(--topnav-height))] w-(--sidenav-width) shrink-0 flex-col border-r md:flex">
            <ScrollArea>
              <div className="py-(--article-padding-t) pl-(--site-padding-x) pr-3">
                <SideNav tree={navigationTree} />
              </div>
            </ScrollArea>
          </div>
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}
