// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {

// }

// const navbarSlice = createSlice({
//   name: "NavbarProducts",
//   reducers: {
    
//   },
// })

// export default navbarSlice.reducer

// CARD SLICE

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   products: [],
// };

// const productSlice = createSlice({
//   name: 'Product',
//   initialState,
//   reducers: {
//     addProduct: (state, action) => {
//       const { productId } = action.payload;
//       if (state.products[productId]) {
//         state.products[productId] += 1;
//       } else {
//         state.products[productId] = 1;
//       }
//     },
//     subtractProduct: (state, action) => {
//       const { productId } = action.payload;
//       if (state.products[productId] && state.products[productId] > 1) {
//         state.products[productId] -= 1;
//       }
//     },
//     carted: (state, action) => {
//       const { productId, quantity } = action.payload;
//       state.products[productId] = quantity;
//     },
//   },
// });

// export default productSlice.reducer;
// export const { addProduct, subtractProduct, carted } = productSlice.actions;