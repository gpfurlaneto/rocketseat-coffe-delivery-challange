import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Container, Aside } from './styles'
import { Link } from 'react-router-dom'
export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Logo Cofee Delivery" />
      </Link>
      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </div>
        <Link to="cart" aria-disabled={true}>
          <ShoppingCart size={22} weight="fill" />
          <span>2</span>
        </Link>
      </Aside>
    </Container>
  )
}
