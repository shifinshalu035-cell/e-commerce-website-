import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import bookingReducer from "./slices/bookingSlice";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist:wishlistReducer,
    order: bookingReducer,
    product: productReducer,
    user:userReducer,
  },
});