import { Card } from '../Card'
import { CardContainer, Container, Header } from './styles'

export type Coffee = {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

type CoffeesListProps = {
  coffees: Coffee[]
}
export function CoffeesList({ coffees }: CoffeesListProps) {
  return (
    <Container>
      <Header>
        <h2>Nossos cafés</h2>
      </Header>
      <CardContainer>
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </CardContainer>
    </Container>
  )
}
