import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const isSallerPath = useLocation().pathname.includes("seller");;

  return (
    <div>
      {isSallerPath ? null : <NavBar />}

      <div className={`${isSallerPath} ? '' : "px-6 md:px-16 lg:px-24 xl:px-32"`}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
