import React from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    return (
      <div className="p-12">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item._id} className="mb-4">
                <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg">
                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-gray-700">{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
  )
}

export default Cart