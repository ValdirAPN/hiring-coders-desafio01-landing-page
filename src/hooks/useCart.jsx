import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);

export function CartProvider({children}) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(newItem) {
    setCartItems([
      ...cartItems,
      newItem
    ]);
  }

  function removeFromCart(index) {
    const items = [...cartItems];

    items.splice(index, 1);

    setCartItems([...items]);
  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}