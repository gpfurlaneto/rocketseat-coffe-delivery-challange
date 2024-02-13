// type FormInputs = {
//   cep: number
//   street: string
//   number: string
//   fullAddress: string
//   neighborhood: string
//   city: string
//   state: string
//   paymentMethod: 'credit' | 'debit' | 'cash'
// }

import { CurrencyDollar, MapPin } from '@phosphor-icons/react'
import { Layout } from '../../components/Layout'
import { Container, Content, Form, FormItem, FormItemHeader } from './styles'
import { useTheme } from 'styled-components'
import { OrderForm } from '../../components/OrderForm'

// const newOrder = z.object({
//   cep: z.number({ invalid_type_error: 'Informe o CEP' }),
//   street: z.string().min(1, 'Informe a rua'),
//   number: z.string().min(1, 'Informe o número'),
//   fullAddress: z.string(),
//   neighborhood: z.string().min(1, 'Informe o bairro'),
//   city: z.string().min(1, 'Informe a cidade'),
//   state: z.string().min(1, 'Informe a UF'),
//   paymentMethod: z.enum(['credit', 'debit', 'cash'], {
//     invalid_type_error: 'Informe um método de pagamento',
//   }),
// })
export function Cart() {
  const theme = useTheme()
  return (
    <Layout>
      <Container>
        <Content>
          <hgroup>
            <h2>Complete seu pedido</h2>
          </hgroup>
          <OrderForm id="orderForm" />
        </Content>
        <Content>
          <hgroup>
            <h2>Cafés selecionados</h2>
          </hgroup>
        </Content>
      </Container>
    </Layout>
  )
}
