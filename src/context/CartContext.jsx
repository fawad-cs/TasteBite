import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(dish) {
    setCart((previousCart) => {
      const existingDish = previousCart.find(
        (item) => item.id === dish.id
      );

      
      if (existingDish) {
        return previousCart.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...dish, quantity: 1 }];
    });
  }

  function removeFromCart(dishId) {
    setCart((previousCart) =>
      previousCart.filter((dish) => dish.id !== dishId)
    );
  }

  function increaseQuantity(dishId) {
    setCart((previousCart) =>
      previousCart.map((dish) =>
        dish.id === dishId
          ? { ...dish, quantity: dish.quantity + 1 }
          : dish
      )
    );
  }

  function decreaseQuantity(dishId) {
    setCart((previousCart) =>
      previousCart
        .map((dish) =>
          dish.id === dishId
            ? { ...dish, quantity: dish.quantity - 1 }
            : dish
        )
        .filter((dish) => dish.quantity > 0)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}