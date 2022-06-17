import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartVisible: false,
  cartItems: [
    // {
    //   id: 1,
    //   product_name: "Test Item",
    //   quantity: 4,
    //   total: 18,
    //   price: 6.5,
    //   promo_code: "Super-duper-save001",
    // },
  ],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    changeIsCartVisible(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    addToCart(state, action) {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.cartItems[existingItemIndex];
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
        state.totalQuantity = state.totalQuantity + 1;
      } else {
        state.cartItems = state.cartItems.concat(action.payload);
        state.totalQuantity = state.totalQuantity + 1;
      }
    },
    removeFromCart(state, action) {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.cartItems[existingItemIndex];
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.totalQuantity = state.totalQuantity - 1;
      } else {
        existingItem.quantity = existingItem.quantity - 1;
        state.totalQuantity = state.totalQuantity - 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
