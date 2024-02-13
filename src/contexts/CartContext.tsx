import { ReactElement, ReactNode, createContext, useState } from 'react'

type CartContextType = {
  selectedCoffees: Record<string, number>
  addItems: (coffeeId: string, quantity: number) => void
}

type CartContextPropviderProps = {
  children: ReactNode
}

const initialContext: CartContextType = {
  selectedCoffees: {},
  addItems: () => { },
}

export const CartContext = createContext<CartContextType>(initialContext)

export function CartContextPropvider({
  children,
}: CartContextPropviderProps): ReactElement {
  const [selectedCoffees, setSelectedCoffees] = useState<
    Record<string, number>
  >({})

  const addItems = (coffeeId: string, quantity: number) => {
    const total = (selectedCoffees[coffeeId] ?? 0) + quantity
    setSelectedCoffees((prev) => ({
      ...prev,
      [coffeeId]: total,
    }))
  }

  return (
    <CartContext.Provider
      value={{
        selectedCoffees,
        addItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
