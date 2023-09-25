import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};
export const sellerReducer = createReducer(initialState, {
  LoadSellerRequest: (state) => {
    state.isLoading = true;
  },
  LoadSellerSuccess: (state, action) => {
    state.isSellerAuthenticated = true;
    state.isLoading = false;
    state.seller = action.payload;
  },
  LoadSellerFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.isSellerAuthenticated = false;
  },
  // get all sellers ---admin
  getAllSellersRequest: (state) => {
    state.isLoading = true;
  },
  adminAllOrdersSuccess: (state, action) => {
    state.isLoading = false;
    state.sellers = action.payload;
  },
  adminAllOrdersFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },
});
