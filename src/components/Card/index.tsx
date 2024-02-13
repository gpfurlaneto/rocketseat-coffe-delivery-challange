import { useTheme } from 'styled-components'
import { QuantityInput } from '../QuantityInput'
import { CheckFat, ShoppingCart } from '@phosphor-icons/react'
import {
  ButtonsContainer,
  CardContainer,
  Order,
  Price,
  TagContainer,
} from './styles'
import { Coffee } from '../CoffeesList'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart'

type CardProps = {
  coffee: Coffee
}

export function Card({ coffee }: CardProps) {
  const { addItems } = useCart()
  const [total, setTotal] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const theme = useTheme()

  const add = (): void => {
    addItems(coffee.id, total)
    setIsItemAdded(true)
    setTotal(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <CardContainer key={coffee.id}>
      <img src={coffee.image} alt={`${coffee.title} image`} />
      <TagContainer>
        {coffee.tags.map((tag: string) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagContainer>
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>
      <ButtonsContainer>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
        <Order $itemAdded={isItemAdded}>
          <QuantityInput
            total={total}
            incrementQuantity={() => setTotal((prev) => prev + 1)}
            decrementQuantity={() => setTotal((prev) => prev - 1)}
          />
          <button onClick={add}>
            {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              />
            ) : (
              <ShoppingCart size={22} color={theme.colors['base-card']} />
            )}
          </button>
        </Order>
      </ButtonsContainer>
    </CardContainer>
  )
}
