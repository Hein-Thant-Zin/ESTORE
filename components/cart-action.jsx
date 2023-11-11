"use client";
import { ShoppingBag } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import useHasMounted from "@/hooks/useHasMounted";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCartContext } from "./contexts/CartContext";
import { MinusCircle } from "lucide-react";
import { PlusCircle } from "lucide-react";

export default function CartAction() {
  const { totalQty, cartItems, onAdd, onRemove, totalPrice } = useCartContext();
  console.log(cartItems);
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  async function handleCheckout() {
    const res = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    const data = res.json();
  }
  return (
    <div className="flex items-center gap-4">
      <Sheet>
        <SheetTrigger className="relative flex items-center gap-2 p-2 border rounded shadow">
          <ShoppingCart className="w-4 h-4 " color="black" />
          <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-blue-600 rounded -top-2 -right-2">
            {totalQty}
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>My Cart</SheetTitle>
            <SheetDescription>
              {cartItems.length < 1 ? (
                <p>
                  <ShoppingBag className="my-3" width={40} height={40} />
                  Do some shopping
                </p>
              ) : (
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <h3>{item.name}</h3>
                      <p>For one item $ {item.price}</p>
                      <div className="flex items-center justify-between gap-4 p-4 border-b">
                        <p>Quantity</p>
                        <button onClick={() => onRemove(item)}>
                          <MinusCircle />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => onAdd(item, 1)}>
                          <PlusCircle />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <div className="py-2">
                <p>Total ${totalPrice}</p>
              </div>
              <Button onClick={handleCheckout}>Proceed to Checkout</Button>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
