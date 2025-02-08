import { useState } from "react";

const initialProducts = [
  { id: 1, productName: "pen", count: 1 },
  { id: 2, productName: "notebook", count: 5 },
  { id: 3, productName: "compass", count: 2 },
];

const ShoppingCart = () => {
  return (
    <ul>
      <Products />
    </ul>
  );
};

function Products() {
  const [items, setItems] = useState(initialProducts);

  function handleClick(productId) {
    setItems(
      items.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            count: item.count + 1,
          };
        } else {
          return item;
        }
      })
    );
  }
  function handleRemove(productId) {
    let nextProduct = items.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          count: item.count - 1,
        };
      } else {
        return item;
      }
    });
    nextProduct = nextProduct.filter((p) => p.count > 0);
    setItems(nextProduct);
  }

  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          {item.productName}
          <span>{item.count}</span>
          <button onClick={() => handleClick(item.id)}>+</button>
          <button onClick={() => handleRemove(item.id)}>-</button>
        </li>
      ))}
    </>
  );
}

export default ShoppingCart;
