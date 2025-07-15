import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";  
import Categories from "./components/Categories"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/home" element={<HeroSection />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
