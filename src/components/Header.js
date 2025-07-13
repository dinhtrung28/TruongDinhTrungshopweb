import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const user = localStorage.getItem("user");
  const dispatch = useDispatch()

  const logOut = () => {
    localStorage.removeItem("authToken");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/">
          <img
            src="https://img.freepik.com/free-vector/flat-design-clothing-store-logo-design_23-2149496415.jpg"
            alt="Logo"
            className="w-16 h-16 rounded-full object-cover"
          />
        </Link>

        <ul className="flex items-center gap-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
          </li>

          {token ? (
            <>
              <li className="text-blue-600 font-semibold">Hello, {user}</li>
              <li>
                <button
                  onClick={logOut}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup" className="text-gray-700 hover:text-blue-600 font-medium">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">
                  Log In
                </Link>
              </li>
            </>
          )}
          <Link to="/cart" className="ml-4 text-lg font-medium hover:underline text-[40px] pl-[20px]">
          🛒
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;


