import styled from "styled-components"
import { ReactNode } from "react"

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
  return <Layout>{props.children}</Layout>
}

const Layout = styled.div``
