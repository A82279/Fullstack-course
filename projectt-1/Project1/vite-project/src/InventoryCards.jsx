const InventoryCards = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Inventory</h2>
      <div className="inventory-cards">
        {products.map((product) => (
          <div key={product.id} className="inventory-card">
            <img src={product.image} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p>Price: {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryCards;
