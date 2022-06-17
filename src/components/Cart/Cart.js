import { useSelector } from "react-redux";
import Card from "../UI/Card";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  const cartItem = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItem}</ul>
    </Card>
  );
};

export default Cart;
