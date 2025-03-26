import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home";
import Navbar from "./components/Navbar";
import CategoriesPage from "./Pages/CategoriesPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/categories/:id" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
