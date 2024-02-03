import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Outlet />
      <GlobalStyle />
    </ThemeProvider>
  )
}
