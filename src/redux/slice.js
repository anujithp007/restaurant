import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const counterSlice = createSlice({
  name: 'datafetch',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      const isDuplicate = state.cart.find((item) => item.id === newItem.id);
      console.log(isDuplicate, 'oo');
      if (!isDuplicate) {
        state.cart.push(newItem);
        //prevent duplicate
      }
    },
    removeCart: (state, action) => {
      const remove = action.payload;
      console.log(remove, 'gg');
      state.cart = state.cart.filter((item) => item.id !== remove);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart } = counterSlice.actions;
export default counterSlice.reducer;
