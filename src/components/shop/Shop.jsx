import { useState } from "react";
import p1 from "../../assets/product/p1.png"
import p2 from '../../assets/product/p2.png';
import p3 from '../../assets/product/p3.png';

const Shop = () => {
  const initialCartItems = [
    { id: 1, image: p1, name: "Skincare Product 1", price: 100, quantity: 1 },
    { id: 2, image: p2, name: "Skincare Product 2", price: 120, quantity: 1 },
    { id: 3, image: p3, name: "Skincare Product 3", price: 150, quantity: 1 },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className=" p-12">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row mb-6 border-b pb-6"
              >
                <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-lg w-32 h-32 md:w-40 md:h-40"
                  />
                </div>
                <div className="md:w-1/2 md:pl-6">
                  <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                  <p className="text-gray-700 mb-2">Price: ${item.price}</p>
                  <div className="flex items-center">
                    <label htmlFor={`quantity-${item.id}`} className="mr-2">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="w-16 p-1 border rounded-lg text-center"
                    />
                  </div>
                </div>
                <div className="md:w-1/4 flex flex-col justify-between items-center md:items-end">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 mt-4 md:mt-0"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right mt-6">
              <p className="text-2xl font-bold">Total: ${total}</p>
            
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shop;

