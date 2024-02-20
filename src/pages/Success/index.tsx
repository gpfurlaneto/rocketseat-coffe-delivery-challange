import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Layout } from '../../components/Layout'
import {
  Container,
  OrderDetails,
  OrderDetailsContainer,
  OrderDetailsContent,
  OrderDetailsHeader,
} from './styles'
import { useTheme } from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom'

const paymentMethod = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
  cash: 'Dinheiro',
}

export function Success() {
  const { orderId } = useParams()
  const theme = useTheme()
  const { orders } = useCart()
  const order = orders.find((order) => order.id === Number(orderId))

  if (!order?.id) {
    return null
  }

  return (
    <Layout>
      <Container>
        <OrderDetailsContainer>
          <OrderDetailsHeader>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </OrderDetailsHeader>
          <OrderDetails>
            <OrderDetailsContent>
              <div>
                <MapPin
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors.purple }}
                  size={32}
                />
                <div>
                  Entrega{' '}
                  <strong>
                    {order.details.street}, {order.details.number}
                  </strong>
                  <div>
                    {order.details.neighborhood} - {order.details.city},
                    {order.details.state}
                  </div>
                </div>
              </div>
              <div>
                <Timer
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors.yellow }}
                  size={32}
                />
                <div>
                  Previsão de entrega
                  <div>
                    <strong>20 min - 30 min</strong>
                  </div>
                </div>
              </div>
              <div>
                <CurrencyDollar
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                  size={32}
                />
                <div>
                  Pagamento na entrega
                  <div>
                    <strong>
                      {paymentMethod[order.details.paymentMethod]}
                    </strong>
                  </div>
                </div>
              </div>
            </OrderDetailsContent>
          </OrderDetails>
        </OrderDetailsContainer>
        <img
          src="/images/delivery.svg"
          width={492}
          height={293}
          alt="Pedido concluído"
        />
      </Container>
    </Layout>
  )
}
