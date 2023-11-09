import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// export function CartContextProvider() {
//   function onAdd(product, qty) {
//     setTotalPrice((prevPrice) => prevPrice + product.price * qty);

//     setTotalQty((prevQty) => prevQty + qty);

//     const productInCart = cartItems.find((item) => item.id === product.id);
//     if (productInCart) {
//       const newCartItems = cartItems.map((item) =>
//         productInCart.id === item.id

//           : item
//       );
//       setCartItems(newCartItems);
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: qty }]);
//     }
//   }
//   return <CartContext.Provider>{children}</CartContext.Provider>;
// }

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(10);
  return (
    <CartContext.Provider value={{ cartItems, totalPrice, totalQty }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
// export default function useCartContext() {
//   useContext(CartContext);
// }
