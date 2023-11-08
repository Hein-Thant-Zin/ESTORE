"use client";

import { useQuery } from "@tanstack/react-query";
import ProductCard from "./product-card";
import getProducts from "@/actions/getProducts";

export default function ProductList() {
  const {
    data: products,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <section>
      <div className="container px-4 mx-auto lg:px-8 ">
        <h3 className="text-xl font-semibold text-center">New Arrivals</h3>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {isPending ? (
            <p className="text-center">Loading</p>
          ) : isError ? (
            <p>{error.message}</p>
          ) : (
            <>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
