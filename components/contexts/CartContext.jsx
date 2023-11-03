import { createContext } from "react";

const CartContext = createContext();

export function CartContextProvider() {
  function onAdd(product, qty) {
    setTotalPrice((prevPrice) => prevPrice + product.price * qty);

    setTotalQty((prevQty) => prevQty + qty);

    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      const newCartItems = cartItems.map((item) =>
        productInCart.id === item.id
          ? { ...productInCart, quantity: productInCart.quantity + qty }
          : item
      );
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: qty }]);
    }
  }
  return <CartContext.Provider>{children}</CartContext.Provider>;
}
