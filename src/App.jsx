import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
// components
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import HomePage from "./screens/HomePage/HomePage";
import LoginPage from "./screens/LoginPage/LoginPage";
import SearchPage from "./screens/SearchPage/SearchPage";
import SearchOutputPage from "./screens/SearchOutputPage/SearchOutputPage";

const App = () => {
  const { isAuth } = useSelector((state) => state.isAuth);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/account/login"
          element={isAuth ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/search"
          element={isAuth ? <SearchPage /> : <Navigate to="/account/login" />}
        />
        <Route
          path="/documents"
          element={
            isAuth ? <SearchOutputPage /> : <Navigate to="/account/login" />
          }
        />
        <Route
          path="*"
          element={
            <h1
              style={{
                fontSize: "5em",
                textAlign: "center",
                padding: "100px 0",
              }}
            >
              404
            </h1>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
