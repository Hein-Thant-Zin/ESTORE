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

export default function CartAction() {
  const { totalQty } = useCartContext();
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

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
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
