import { Minus, Plus } from '@phosphor-icons/react'
import { Container } from './styles'

type QuantityInputProps = {
  total: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}
export function QuantityInput({
  total,
  incrementQuantity,
  decrementQuantity,
}: QuantityInputProps) {
  return (
    <Container>
      <button onClick={decrementQuantity} disabled={total <= 1}>
        <Minus size={14} />
      </button>
      <span>{total}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </Container>
  )
}
