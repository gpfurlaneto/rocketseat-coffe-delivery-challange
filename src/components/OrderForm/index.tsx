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
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '../ErrorMessage'

const newOrder = z.object({
  cep: z.coerce.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderDetails = z.infer<typeof newOrder>

type OrderFormProps = {
  id: string
  onSubmit: (values: FormInputs) => void
}

export const OrderForm = React.forwardRef<HTMLFormElement, OrderFormProps>(
  function Form({ onSubmit, ...props }, ref) {
    const {
      watch,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<OrderDetails>({
      resolver: zodResolver(newOrder),
    })

    const selectedPaymentMethod = watch('paymentMethod')
    const theme = useTheme()

    return (
      <form ref={ref} {...props} onSubmit={handleSubmit(onSubmit)}>
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
                <TextInput
                  type="number"
                  placeholder="CEP"
                  {...register('cep')}
                  error={errors?.cep}
                />
              </FormCell>
              <FormCell $span={3}>
                <TextInput
                  placeholder="Rua"
                  {...register('street')}
                  error={errors?.street}
                />
              </FormCell>

              <FormCell $span={1}>
                <TextInput
                  placeholder="Número"
                  {...register('number')}
                  error={errors?.number}
                />
              </FormCell>
              <FormCell $span={2}>
                <TextInput
                  placeholder="Complemento"
                  optional
                  {...register('fullAddress')}
                  error={errors?.fullAddress}
                />
              </FormCell>
              <FormCell $span={1}>
                <TextInput
                  placeholder="Bairro"
                  {...register('neighborhood')}
                  error={errors?.neighborhood}
                />
              </FormCell>
              <FormCell $span={1}>
                <TextInput
                  placeholder="Cidade"
                  {...register('city')}
                  error={errors?.city}
                />
              </FormCell>
              <FormCell $span={1}>
                <TextInput
                  placeholder="UF"
                  {...register('state')}
                  error={errors?.state}
                />
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
              <div>
                <Radio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </Radio>
                <Radio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </Radio>
              </div>
              {errors?.paymentMethod ? (
                <ErrorMessage
                  message={errors?.paymentMethod?.message as string}
                />
              ) : null}
            </PaymentOptions>
          </FormItem>
        </Container>
      </form>
    )
  },
)
