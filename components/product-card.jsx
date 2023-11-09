"use client";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { Expand } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const { id, name, category, imageUrl, price } = product;

  const router = useRouter();

  function handleClick() {
    router.push(`/products/${id}`);
  }

  function preventEventBubbling(e) {
    e.stopPropagation();
  }

  return (
    <article
      onClick={handleClick}
      className="w-64 p-4 mx-auto my-2 space-y-3 text-center transition cursor-pointer hover:shadow-lg hover:border group"
    >
      <div className="relative aspect-square rounded-xl">
        <Image
          src={imageUrl}
          name={name}
          alt={name}
          fill
          className="object-cover rounded-md aspect-square"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          onClick={preventEventBubbling}
          className="absolute flex items-center justify-center w-full space-x-1 transition opacity-0 bottom-5 group-hover:opacity-100"
        >
          <Button className="transition" variant="outline">
            <ShoppingCart size={20} className="text-gray-600"></ShoppingCart>
          </Button>
        </div>
      </div>
      <div>
        <p>{name}</p>
        <p>{category?.name}</p>
      </div>

      <div>
        <p>${price}</p>
      </div>
    </article>
  );
}
