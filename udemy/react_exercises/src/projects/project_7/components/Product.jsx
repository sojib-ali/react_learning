import './../e_shop.css';
import { CartContext } from '../store/shopping-cart-context';
import { useContext } from 'react';


export default function Product({
  id,
  image,
  title,
  price,
  description
}) {

  const {addItemToCard} = useContext(CartContext)

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => addItemToCard(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
