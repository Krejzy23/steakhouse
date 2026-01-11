import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
