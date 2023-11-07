import { useState } from 'react';
import InventoryCards from './InventoryCards';
import CartList from './CartList';
import { products } from './products';

const GroceriesApp = () => {
  const [inventory] = useState(products);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  return (
    <div>
      <h1>Groceries App</h1>
      <InventoryCards products={inventory} addToCart={addToCart} />
      <CartList cart={cart} removeFromCart={removeFromCart} emptyCart={emptyCart} total={calculateTotalPrice()} />
    </div>
  );
};

export default GroceriesApp;
