import React from 'react'
import {
  Container,
  FormCell,
  FormGrid,
  FormItem,
  FormItemHeader,
  PaymentOptions,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { TextInput } from '../TextInput'
import { Radio } from '../Radio'

export const OrderForm = React.forwardRef<HTMLFormElement>(
  function Form(props, ref) {
    const theme = useTheme()
    return (
      <form ref={ref} {...props}>
        <Container>
          <FormItem>
            <FormItemHeader $svgColor={theme.colors['yellow-dark']}>
              <MapPin size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormItemHeader>
            <FormGrid>
              <FormCell $span={1}>
                <TextInput placeholder="CEP" />
              </FormCell>
              <FormCell $span={3}>
                <TextInput placeholder="Rua" />
              </FormCell>

              <FormCell $span={1}>
                <TextInput placeholder="Número" />
              </FormCell>
              <FormCell $span={2}>
                <TextInput placeholder="Complemento" optional />
              </FormCell>
              <FormCell $span={1}>
                <TextInput placeholder="Bairro" />
              </FormCell>
              <FormCell $span={1}>
                <TextInput placeholder="Cidade" />
              </FormCell>
              <FormCell $span={1}>
                <TextInput placeholder="UF" />
              </FormCell>
            </FormGrid>
          </FormItem>
          <FormItem>
            <FormItemHeader $svgColor={theme.colors.purple}>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormItemHeader>
            <PaymentOptions>
              <Radio
                isSelected={false}
                // isSelected={selectedPaymentMethod === 'credit'}
                // {...register('paymentMethod')}
                value="credit"
              >
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </Radio>
              <Radio
                isSelected={false}
                // isSelected={selectedPaymentMethod === 'debit'}
                // {...register('paymentMethod')}
                value="debit"
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>

              <Radio
                isSelected={false}
                // isSelected={selectedPaymentMethod === 'cash'}
                // {...register('paymentMethod')}
                value="cash"
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </PaymentOptions>
          </FormItem>
        </Container>
      </form>
    )
  },
)
