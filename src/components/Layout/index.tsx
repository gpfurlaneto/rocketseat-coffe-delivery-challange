import { ReactNode } from 'react'
import { Main } from './styles'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return <Main>{children}</Main>
}
