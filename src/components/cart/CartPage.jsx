import { useCart } from '../CartContext';

const CartPage  = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
  
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item._id} className="flex items-center justify-between mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-gray-700">{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
                    <p className="mx-2">{item.quantity}</p>
                    <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
  )
}

export default CartPage