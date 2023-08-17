import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cart";
import { eventReducer } from "./reducers/event";
import { orderReducer } from "./reducers/order";
import { productReducer } from "./reducers/product";
import { sellerReducer } from "./reducers/seller";
import { userReducer } from "./reducers/user";
import { wishlistReducer } from "./reducers/wishlist";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
    events: eventReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
  },
});

export default Store;
