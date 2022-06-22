import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  isCartChanged: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.cartItems = action.payload.cartItems;
    },

    addToCart(state, action) {
      state.totalQuantity++;
      state.isCartChanged = true;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.cartItems[existingItemIndex];
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems = state.cartItems.concat(action.payload);
      }
    },

    removeFromCart(state, action) {
      state.totalQuantity--;
      state.isCartChanged = true;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.cartItems[existingItemIndex];
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
