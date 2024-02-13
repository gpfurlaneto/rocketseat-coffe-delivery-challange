import { CoffeesList } from '../../components/CoffeesList'
import { Hero } from '../../components/Hero'

import { coffees } from '../../../data.json'
import { Layout } from '../../components/Layout'
export function Home() {
  return (
    <>
      <Hero />
      <Layout>
        <CoffeesList coffees={coffees} />
      </Layout>
    </>
  )
}
