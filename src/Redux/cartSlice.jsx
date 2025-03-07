import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.product.push(newItem);

      const existingItem = state.product.find((item) => item.id === newItem.id);

      // If the item already exists, update its quantity and total price
      if (existingItem) {
        existingItem.totalQuantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        // If it's a new item, add it to the cart with initial quantity and totalPrice
        state.product.push(newItem);
      }

      // Update the overall cart total price and quantity
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },

    removeFromCart(state, action) {
      const id = action.payload;

      const findItem = state.product.find((item) => item.id === id);

      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.product = state.product.filter((item) => item.id !== id);
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.product.find((item) => item.id === id);

      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalPrice += findItem.price;
        state.totalQuantity++;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.product.find((item) => item.id === id);
      if (findItem.quantity > 1) {
        if (findItem) {
          findItem.quantity--;
          findItem.totalPrice -= findItem.price;
          state.totalPrice -= findItem.price;
          state.totalQuantity--;
        }
      }
    },

    clearCart: (state) => {
      state.product = [];
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
