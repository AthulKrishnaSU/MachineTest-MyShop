import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import PaymentMethod from "./pages/PaymentMethod";
import PaymentGateway from "./pages/PaymentGateway";
import OrderConfirmation from "./pages/OrderConfirmation";
import Orders from "./pages/Orders";
import AddProduct from "./pages/AddProduct"; // ✅ import AddProduct

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <div style={{ padding: 20 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment-method" element={<PaymentMethod />} />
              <Route path="/payment-gateway" element={<PaymentGateway />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/orders" element={<Orders />} />

              {/* ✅ New route for AddProduct */}
              <Route path="/add-product" element={<AddProduct />} />
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

