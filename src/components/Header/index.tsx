import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Container, Aside } from './styles'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
export function Header() {
  const { selectedCoffees } = useCart()
  const totalSelectedItems = Object.keys(selectedCoffees).length
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
        <Link to="cart" aria-disabled={totalSelectedItems === 0}>
          <ShoppingCart size={22} weight="fill" />
          {totalSelectedItems > 0 && <span>{totalSelectedItems}</span>}
        </Link>
      </Aside>
    </Container>
  )
}
