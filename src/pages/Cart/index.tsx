import { Layout } from '../../components/Layout'
import { Container, Content } from './styles'
import { OrderDetails, OrderForm } from '../../components/OrderForm'
import { CartSummary } from '../../components/CartSummary'
import { useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'

export function Cart() {
  const navigate = useNavigate()
  const { checkout } = useCart()

  const onCheckout = (value: OrderDetails) => {
    const id = checkout(value)
    navigate(`/order/${id}/success`)
  }

  return (
    <Layout>
      <Container>
        <Content>
          <hgroup>
            <h2>Complete seu pedido</h2>
          </hgroup>
          <OrderForm id="orderForm" onSubmit={onCheckout} />
        </Content>
        <Content>
          <hgroup>
            <h2>Cafés selecionados</h2>
          </hgroup>
          <CartSummary formId="orderForm" />
        </Content>
      </Container>
    </Layout>
  )
}
