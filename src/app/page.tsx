import Product from "@/components/Product"
import { ProductTyping } from "@/typings"

export default async function Home() {

  const products: ProductTyping[] = await fetch("https://fakestoreapi.com/products")
    .then(result => result.json())
  return (
    <main className="min-h-screen max-w-7xl mx-auto">
      <h1 className="uppercase text-center font-bold text-3xl my-10">deals of the day</h1>
      {/* products */}
      <section className="grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-7 px-5">
        {
          products.map(p => <Product key={p.id} product={p} />)
        }
      </section>
    </main>
  )
}
