import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    carted: (state, action) => {
      const { productId, Name, Price, Decs, Src } = action.payload;
      state.products.push({ id: productId, name: Name, price: Price, decs:Decs, src:Src });
    },
    bought: (state) => {
      state.products = [];
    },
    deleteProduct: (state, action) => {
      const productIdToDelete = action.payload;
      const indexToDelete = state.products.findIndex(
        (product) => product.id === productIdToDelete
      );
      if (indexToDelete !== -1) {
        state.products.splice(indexToDelete, 1);
      }
    },
  },
});

export default productSlice.reducer;
export const { bought, carted, deleteProduct } = productSlice.actions;
