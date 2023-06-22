import { createReducer } from "@reduxjs/toolkit";

const initalState = {
  isLoading: true,
};

export const productReducer = createReducer(initalState, {
  productCreateRequest: (state) => {
    state.isLoading = true;
  },
  productCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  //   get all products of a shop
  getAllProductsShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductShopSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  getAllProductShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  //   delete product of a shop
  deleteProductRequest: (state) => {
    state.isLoading = true;
  },
  deleteProductSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
