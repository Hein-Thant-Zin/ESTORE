"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import { useCartContext } from "../contexts/CartContext";
import toast from "react-hot-toast";

export default function AddToCart({ product }) {
  function handleAdd() {
    onAdd(product, 1);
    toast.success("Added to Cart", { duration: 2000 });
  }
  const { onAdd } = useCartContext();
  const disabledClasses = "cursor-not-allowed hover:opacity-60 opacity-60";
  const btnClasses =
    "relative flex items-center hover:opacity-90 justify-center w-full tracking-wide bg-blue-600 rounded-full";
  return (
    <Button onClick={() => handleAdd()} className={cn(btnClasses)}>
      <div className="absolute left-0 ml-4">
        <PlusIcon className="w-5 h-5" />
      </div>
      Add To Cart
    </Button>
  );
}
