import { createGlobalStyle } from 'styled-components'

import Header from '../components/Header'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  * {
    color: #333;
  }

  main {
    min-height: 100vh;
  }
`

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default BasicLayout
