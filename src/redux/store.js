import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/product";
import { sellerReducer } from "./reducers/seller";
import { userReducer } from "./reducers/user";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
  },
});

export default Store;
