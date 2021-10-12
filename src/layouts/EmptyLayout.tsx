import { ReactNode } from "react"
import styled, { createGlobalStyle } from "styled-components"
import Footer from "../components/home/Footer"
import Header from "../components/home/Header"
import Nav from "../components/home/Nav"
import nunitoWoff from "../helpers/fonts/nunito-v16-latin/nunito-v16-latin-regular.woff"
import nunitoWoff2 from "../helpers/fonts/nunito-v16-latin/nunito-v16-latin-regular.woff2"

interface EmptyLayoutProps {
  children: ReactNode
}
export const EmptyLayout = (props: EmptyLayoutProps) => {
  return (
    <Layout>
      <GlobalStyle />
      <Container>
        <Nav />
        <Header />
        <Child>{props.children}</Child>
        <Footer />
      </Container>
    </Layout>
  )
}
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'nunito';
    src: local('nunito'), local('nunito'),
        url(${nunitoWoff2}) format('woff2'),
        url(${nunitoWoff}) format('woff');
        font-weight: 300;
        font-style: italic;
  }
  body {
    margin: 0;
    height: 100vh;
    display: flex;
  }
`
const Child = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #170f23;
`

const Container = styled.div`
  background-color: transparent;
`

const Layout = styled.div`
  background-color: transparent;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
    display: none;
  }
  &::-webkit-scrollbar {
    width: 0.3vw;
    background-color: #f5f5f5;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
    display: none;
  }
`
