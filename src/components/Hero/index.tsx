import { useTheme } from 'styled-components'
import {
  CoffeeInfo,
  CoffeeInfoItem,
  Container,
  Content,
  Heading,
  HGroup,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function Hero() {
  const theme = useTheme()

  return (
    <Container>
      <Content>
        <Heading>
          <HGroup>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HGroup>
          <CoffeeInfo>
            <CoffeeInfoItem>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />
              Compra simples e segura
            </CoffeeInfoItem>
            <CoffeeInfoItem>
              <Package
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors['base-text'] }}
              />
              Embalagem mantém o café intacto
            </CoffeeInfoItem>
            <CoffeeInfoItem>
              <Timer
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.yellow }}
              />
              Entrega rápida e rastreada
            </CoffeeInfoItem>
            <CoffeeInfoItem>
              <Coffee
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.purple }}
              />
              O café chega fresquinho até você
            </CoffeeInfoItem>
          </CoffeeInfo>
        </Heading>
        <img src="/images/hero.svg" alt="Hero image cofee" />
      </Content>
      <img src="/images/hero-bg.svg" id="hero-bg" alt="" />
    </Container>
  )
}
