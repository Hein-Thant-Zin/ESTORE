"use client";

import getCategories from "@/actions/getCategories";
import ProductList from "@/components/product-list";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function AllProductsPage({ data }) {
  const {
    data: categories,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isPending) return <p>Loading..</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <section>
      <div className="container flex px-4 mx-auto my-6 lg:px-8">
        <aside className="w-1/5 h-screen py-2 border-r">
          <ul>
            {categories.map((item) => (
              <Link key={item.id} href={`/products?category=${item.slug}`}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </aside>
        <ProductList title="Products" />
      </div>
    </section>
  );
}
