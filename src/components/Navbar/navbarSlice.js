import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddToCartButtonDisabled: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setAddToCartButtonDisabled: (state, action) => {
      state.isAddToCartButtonDisabled = action.payload;
    },
  },
});

export const { setAddToCartButtonDisabled } = uiSlice.actions;

export default uiSlice.reducer;
