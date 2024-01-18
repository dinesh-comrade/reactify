import { configureStore } from "@reduxjs/toolkit";
import reducers from "../Slice/productSlice";

export const store = configureStore({
  reducer: {
    products: reducers.products,
    selectedProduct: reducers.selectedProduct,
  },
});
