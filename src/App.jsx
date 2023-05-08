import { Routes, Route } from "react-router";
import "./App.scss";
// components
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import HomePage from "./screens/HomePage/HomePage";
import LoginPage from "./screens/LoginPage/LoginPage";
import SearchPage from "./screens/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<h1 style={{fontSize: "220px", textAlign: "center"}}>404</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
