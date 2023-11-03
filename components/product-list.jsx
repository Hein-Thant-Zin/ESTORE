import ProductCard from "./product-card";

export default function ProductList() {
  return (
      <section>
          <h3 className="text-xl font-semibold text-center">New Arrivals</h3>
          <div className="container px-4 mx-auto my-4">
              <ProductCard />
         </div>
    </section>
  )
}
