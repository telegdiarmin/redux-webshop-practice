import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Notification from "./components/UI/Notification";
import Products from "./components/Shop/Products";

import { sendCartData, fetchCartData } from "./store/cart-actions";

let isFirstLoad = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const isCartVisible = useSelector((state) => state.ui.isCartVisible);
  const isCartChanged = useSelector((state) => state.cart.isCartChanged);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstLoad) {
      isFirstLoad = false;
      return;
    }

    if (isCartChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch, isCartChanged]);

  return (
    <Fragment>
      {notification && <Notification notification={notification} />}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
