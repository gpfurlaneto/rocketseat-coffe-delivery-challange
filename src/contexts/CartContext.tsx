import {
  ReactElement,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react'
import { Coffee } from '../components/CoffeesList'
import { OrderDetails } from '../components/OrderForm'

export type CartItem = {
  coffee: Coffee
  amount: number
}

type Order = {
  id: number
  details: OrderDetails
  items: Record<string, CartItem>
}

type CartContextType = {
  orders: Order[]
  selectedCoffees: Record<string, CartItem>
  addItems: (coffee: Coffee, quantity: number) => void
  removeItems: (coffee: Coffee, quantity: number) => void
  removeAll: (coffeeId: string) => void
  checkout: (details: OrderDetails) => number
}

type CartContextPropviderProps = {
  children: ReactNode
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartContextPropvider({
  children,
}: CartContextPropviderProps): ReactElement {
  const [selectedCoffees, setSelectedCoffees] = useState<
    Record<string, CartItem>
  >({})

  const [orders, setOrders] = useState<Order[]>([])

  const addItems = (coffee: Coffee, amount: number) => {
    const newAmount = (selectedCoffees[coffee.id]?.amount ?? 0) + amount
    setSelectedCoffees((prev) => ({
      ...prev,
      [coffee.id]: { coffee, amount: newAmount },
    }))
  }

  const removeItems = (coffee: Coffee, amount: number) => {
    const newAmount = (selectedCoffees[coffee.id]?.amount ?? 0) - amount
    setSelectedCoffees((prev) => ({
      ...prev,
      [coffee.id]: { coffee, amount: newAmount },
    }))
  }

  const removeAll = (coffeeId: string) => {
    const newSelectedCoffees = { ...selectedCoffees }
    delete newSelectedCoffees[coffeeId]
    setSelectedCoffees(newSelectedCoffees)
  }

  const checkout = (details: OrderDetails): number => {
    const id = new Date().getTime()
    setOrders((prev) => [
      ...prev,
      {
        id,
        details,
        items: selectedCoffees,
      },
    ])
    setSelectedCoffees({})

    return id
  }

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0',
    )

    console.log(storedStateAsJSON)

    if (storedStateAsJSON) {
      const state = JSON.parse(storedStateAsJSON)
      setOrders(state.orders)
      setSelectedCoffees(state.selectedCoffees)
    }
  }, [])

  useEffect(() => {
    console.log('mudou')
    if (orders.length || Object.keys(selectedCoffees).length) {
      console.log('entrou', { orders, selectedCoffees })
      const stateJSON = JSON.stringify({ orders, selectedCoffees })
      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [orders, selectedCoffees])

  return (
    <CartContext.Provider
      value={{
        orders,
        selectedCoffees,
        addItems,
        removeItems,
        removeAll,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
