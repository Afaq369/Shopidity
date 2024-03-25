import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../components/Cards/cardSlice'

const store = configureStore({
  reducer: {
    product:productReducer,
  }
})

export default store