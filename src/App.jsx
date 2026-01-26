import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MenuPage from "./pages/MenuPage";
import Drinks from "./pages/Drinks";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Reservations from "./pages/Reservations";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservations />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;
