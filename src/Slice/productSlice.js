import { createSlice } from "@reduxjs/toolkit";

const productsReducer = createSlice({
  name: "products",
  initialState: {
    products: [],
    fetched: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.fetched = true;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const { id, title, price } = action.payload;
      const product = state.products.find(
        (product) => product.id === Number(id)
      );
      if (product) {
        product.title = title;
        product.price = price;
        console.log("Updated", product.title, product.price);
      }
      console.log("product", product);
      console.log("Not updated");
      state.fetched = true;
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

export const { setProducts, deleteProduct, updateProduct } =
  productsReducer.actions;
export const { selectProduct, removeSelectedProduct } =
  selectedProductReducer.actions;

const reducers = {
  products: productsReducer.reducer,
  selectedProduct: selectedProductReducer.reducer,
};

export default reducers;
