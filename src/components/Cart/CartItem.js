import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { product_name, quantity, price } = props.item;
  const item = props.item;

  const addToCartBtnHandler = () => {
    dispatch(cartActions.addToCart(item));
  };

  const removeFromCartBtnHandler = () => {
    dispatch(cartActions.removeFromCart(item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{product_name}</h3>
        <div className={classes.price}>
          ${(price * quantity).toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartBtnHandler}>-</button>
          <button onClick={addToCartBtnHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
