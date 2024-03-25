import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    carted: (state, action) => {
      const { productId, Name, Price } = action.payload;
      state.products.push({ id:productId, name: Name, price: Price });
    },
  },
});

export default productSlice.reducer;
export const { addProduct, subtractProduct, carted } = productSlice.actions;
