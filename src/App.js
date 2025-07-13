


import "./App.css";
import { Children, useEffect, useState } from "react";
import axios from "axios";
import {  Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import ProductItem from "./pages/ProductItem";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  const getDataProduct = async () => {
    try {
      const res = await axios.get("https://forever-backend-gamma-two.vercel.app/api/product/list");
      console.log("Axios response:", res);
      setData(res.data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getDataProduct();
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/products" element={<Products data={data} />} />
        <Route path="/products/:id" element={<ProductDetail data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;