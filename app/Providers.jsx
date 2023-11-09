"use client";

import { CartContextProvider } from "@/components/contexts/CartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <CartContextProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CartContextProvider>
  );
}
