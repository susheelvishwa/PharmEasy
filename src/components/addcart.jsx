// AddToCart.jsx

import React, { useState } from 'react';

const AddToCart = ({ onAddToCart }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Check if item name and quantity are provided
    if (!itemName || quantity <= 0) {
      alert('Please provide valid item name and quantity.');
      return;
    }

    // Add item to the cart
    const newItem = { name: itemName, quantity };
    onAddToCart(newItem);

    // Reset form fields
    setItemName('');
    setQuantity(1);
  };

  return (
    <div>
      <h2>Add to Cart</h2>
      <form>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default AddToCart;
