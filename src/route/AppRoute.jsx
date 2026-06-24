import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Premium from "../pages/Premium";
import CustomizeSticker from "../pages/CustomizeSticker";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import ProductDetails from "../pages/ProductDetails";
import CategoryPage from "../pages/Category";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="/premium" element={<Premium />} />

      <Route
        path="/customize"
        element={<CustomizeSticker />}
      />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/orders" element={<Orders />} />
      <Route
  path="/category/:category"
  element={<CategoryPage />}
/>

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />
    </Routes>
  );
}

export default AppRoutes;