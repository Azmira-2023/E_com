// import React from "react";
// import { Link } from "react-router-dom";

// const Cart = ({ cart, removeFromCart }) => {
//   if (cart.length === 0) {
//     return (
//       <div className="container mx-auto my-3 py-6 text-center">
//         <h2 className="text-4xl font-bold">Your Cart is Empty</h2>
//         <Link
//           to="/shop"
//           className="bg-teal-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 inline-block"
//         >
//           {/* Continue Shopping */}
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto my-3 py-6">
//       <h2 className="text-4xl font-bold text-center mb-6">Your Cart</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cart.map((product) => (
//           <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img
//               className="w-full h-fit object-cover p-8 mt-2"
//               src={product.image}
//               alt={product.title}
//             />
//             <div className="p-4">
//               <h5 className="text-lg font-semibold mb-2">
//                 {product.title.substring(0, 12)}...
//               </h5>
//               <p className="text-gray-700 mb-4">
//                 {product.description.substring(0, 90)}...
//               </p>
//               <ul className="mb-4">
//                 <li className="text-lg font-bold">$ {product.price}</li>
//               </ul>
//               <button
//                 className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => removeFromCart(product.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-6">
//         <Link
//           to="/checkout"
//           className="bg-teal-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Proceed to Checkout
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Cart