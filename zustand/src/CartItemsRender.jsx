import React from "react";
import useCartStore from "./store/cartStore";

const CartItemsRender = () => {

//   const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
//     cart: state.cart,
//     removeFromCart: state.removeFromCart,
//     clearCart: state.clearCart,
//   }));
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>Cart Item ID: {item.id}</p>
          <p>Item Name: {item.name}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove From Cart
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <div
          style={{
            marginTop: 10,
          }}
        >
          <button onClick={clearCart}>Remove All</button>
        </div>
      )}
    </div>
  );
};

export default CartItemsRender;
