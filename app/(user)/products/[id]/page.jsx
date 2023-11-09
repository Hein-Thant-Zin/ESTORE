"use client";
import getProduct from "@/actions/getProduct";
import Gallery from "@/components/products/gallery";
import ProductDescription from "@/components/products/product-description";
import { useQuery } from "@tanstack/react-query";
import { notFound, useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: [`product/${id}`],
    queryFn: () => getProduct(id),
  });

  if (!product && isSuccess) {
    notFound();
  }

  if (isPending) return <p>Loading..</p>;
  if (isError) return <p>{error.message}</p>;

  const { name, category, imageUrl, price, sizes } = product;
  console.log(product);

  return (
    <section>
      <div className="container px-4 py-10 mx-auto lg:px-0 ">
        <div className="flex flex-col p-8 border rounded-lg shadow lg:gap-8 lg:flex-row border-neutral-200">
          <div className="w-full h-full basis-full lg:basis-4/6">
            <Gallery imageUrl={imageUrl} name={name} />
          </div>
          <div className="basis-full lg:basis-2/6">
            <ProductDescription product={product} />
          </div>
        </div>
      </div>

      {/* related products */}
    </section>
  );
}
