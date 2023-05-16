import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router";
import { setAuth } from "./store/isAuth";
import "./App.scss";
// components
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import HomePage from "./screens/HomePage/HomePage";
import LoginPage from "./screens/LoginPage/LoginPage";
import SearchPage from "./screens/SearchPage/SearchPage";
import SearchOutputPage from "./screens/SearchOutputPage/SearchOutputPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAuth());
  });
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/documents" element={<SearchOutputPage />} />
        <Route
          path="*"
          element={
            <h1 style={{ fontSize: "220px", textAlign: "center" }}>404</h1>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
