import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const item = props.item;
  const { product_name, price, promo_code } = props.item;

  // const itemWithQuantity = (item) => {
  //   item.quantity = 1;
  //   console.log(item);
  //   return item;
  // }

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{product_name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{promo_code}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
