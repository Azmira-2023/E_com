// App.js
import React from 'react';
import { CartProvider } from './context/CartContext'; // Adjust the path as needed
import Product from './components/product/Product';


function App() {
  return (
    <CartProvider>
      <Product />
   
    </CartProvider>
  );
}

export default App;
