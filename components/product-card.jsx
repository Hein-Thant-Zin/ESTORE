"use client";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { Expand } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import toast from "react-hot-toast";
import { useCartContext } from "./contexts/CartContext";

export default function ProductCard({ product }) {
  const { id, name, category, imageUrl, price } = product;
  const { onAdd } = useCartContext();

  const router = useRouter();

  function handleClick() {
    router.push(`/products/${id}`);
  }

  function handleAdd() {
    onAdd(product, 1);
    toast.success("Added to Cart", { duration: 2000 });
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
        <BlurImage imageUrl={imageUrl} name={name} />
        <div
          onClick={preventEventBubbling}
          // onClick={() => onAdd(product, 1)}
          className="absolute flex items-center justify-center w-full space-x-1 transition opacity-0 bottom-5 group-hover:opacity-100"
        >
          <Button onClick={handleAdd} className="transition" variant="outline">
            <ShoppingCart size={20} className="text-gray-600" />
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

function BlurImage({ imageUrl, name = "" }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={imageUrl}
      name={name}
      alt={name}
      fill
      className={cn(
        "object-cover rounded-md aspect-square duration-500 ease-in-out",
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      )}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
}
