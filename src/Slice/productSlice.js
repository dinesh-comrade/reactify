import { createSlice } from "@reduxjs/toolkit";

const productsReducer = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

const selectedProductReducer = createSlice({
  name: "selectedProduct",
  initialState: {},
  reducers: {
    selectProduct: (state, action) => {
      return { ...state, ...action.payload };
    },
    removeSelectedProduct: () => {
      return {};
    },
  },
});

export const { setProducts } = productsReducer.actions;
export const { selectProduct, removeSelectedProduct } =
  selectedProductReducer.actions;

const reducers = {
  products: productsReducer.reducer,
  selectedProduct: selectedProductReducer.reducer,
};

export default reducers;
