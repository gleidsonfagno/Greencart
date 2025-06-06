import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import Allproduct from "./pages/Allproduct";

const App = () => {
  const isSallerPath = useLocation().pathname.includes("seller");
  const {showUserLogin} = useAppContext()

  return (
    <div>
      {isSallerPath ? null : <NavBar />}
      {showUserLogin ? <Login/> : null}
      
      <Toaster />

      <div className={isSallerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Allproduct />} />
        </Routes>
      </div>

      {!isSallerPath && <Footer />}
    </div>
  );
};

export default App;
