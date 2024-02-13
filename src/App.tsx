import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { CartContextPropvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextPropvider>
        <Header />
        <Outlet />
      </CartContextPropvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
