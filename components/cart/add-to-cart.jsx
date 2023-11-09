"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import { useCartContext } from "../contexts/CartContext";

export default function AddToCart({ product }) {
  const { onAdd } = useCartContext();
  const disabledClasses = "cursor-not-allowed hover:opacity-60 opacity-60";
  const btnClasses =
    "relative flex items-center hover:opacity-90 justify-center w-full tracking-wide bg-blue-600 rounded-full";
  return (
    <Button onClick={() => onAdd(product, 1)} className={cn(btnClasses)}>
      <div className="absolute left-0 ml-4">
        <PlusIcon className="w-5 h-5" />
      </div>
      Add To Cart
    </Button>
  );
}
