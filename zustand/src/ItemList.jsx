import React from "react";
import useCartStore from "./store/cartStore";
import products from "./Items";

const ItemList = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
            gap: 20,
          }}
        >
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
