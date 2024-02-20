import { Trash } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'
import { QuantityInput } from '../QuantityInput'
import {
  CoffeeItemActions,
  CoffeeItemContainer,
  CoffeeItemInfo,
  ConfirmButton,
  ConfirmationContainer,
  ConfirmationItem,
  Container,
  RemoveButton,
  TotalItem,
} from './styles'
import { useMemo } from 'react'

const shippingPrice = 3.5

type CartSummaryProps = {
  formId: string
}
export function CartSummary({ formId }: CartSummaryProps) {
  const { selectedCoffees, addItems, removeItems, removeAll } = useCart()
  const totalItems = useMemo(() => {
    return Object.keys(selectedCoffees).reduce((acc: number, key: string) => {
      const item = selectedCoffees[key]
      return acc + item.amount * item.coffee.price
    }, 0)
  }, [selectedCoffees])

  return (
    <Container>
      {Object.keys(selectedCoffees).map((key) => {
        const { coffee, amount } = selectedCoffees[key]
        return (
          <CoffeeItemContainer key={coffee.id}>
            <CoffeeItemInfo>
              <img width={64} src={coffee.image} alt={coffee.title} />
              <div>
                {coffee.title}
                <CoffeeItemActions>
                  <QuantityInput
                    total={amount}
                    incrementQuantity={() => addItems(coffee, 1)}
                    decrementQuantity={() => removeItems(coffee, 1)}
                  />
                  <RemoveButton onClick={() => removeAll(coffee.id)}>
                    <Trash />
                    Remover
                  </RemoveButton>
                </CoffeeItemActions>
              </div>
            </CoffeeItemInfo>
            <aside>R$ {coffee.price?.toFixed(2)}</aside>
          </CoffeeItemContainer>
        )
      })}
      <ConfirmationContainer>
        <ConfirmationItem>
          <span>Total de itens</span>
          <span>
            {new Intl.NumberFormat('pt-br', {
              currency: 'BRL',
              style: 'currency',
            }).format(totalItems)}
          </span>
        </ConfirmationItem>
        <ConfirmationItem>
          <span>Entrega</span>
          <span>
            {new Intl.NumberFormat('pt-br', {
              currency: 'BRL',
              style: 'currency',
            }).format(shippingPrice)}
          </span>
        </ConfirmationItem>
        <TotalItem>
          <span>Total</span>
          <span>
            {new Intl.NumberFormat('pt-br', {
              currency: 'BRL',
              style: 'currency',
            }).format(totalItems + shippingPrice)}
          </span>
        </TotalItem>
      </ConfirmationContainer>
      <ConfirmButton form={formId} type="submit">
        Confirmar Pedido
      </ConfirmButton>
    </Container>
  )
}
