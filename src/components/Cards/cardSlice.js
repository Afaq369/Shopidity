import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isCartEmpty: true,
};

const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    carted: (state, action) => {
      const { productId, Name, Price } = action.payload;
      state.products.push({ id: productId, name: Name, price: Price });
      // console.log("CARTED==>",action.payload)
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
    availableProduct: (state, action) => {
      const restoreProduct = action.payload
      const indexToRestore = state.products.findIndex(
        (product) => product.id === restoreProduct
      );
      if (indexToRestore) {
        state.isCartEmpty = false;
        
      }
      // console.log("isCartEmpty===>",state.isCartEmpty)
      // console.log("isCartEmpty===>",indexToRestore)
    }
  },
});

export default productSlice.reducer;
export const { bought, carted, deleteProduct, availableProduct } = productSlice.actions;
