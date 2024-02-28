// Cart.jsx
import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveItem = (index) => {
    // Perform logic to remove the item from the cart

    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
