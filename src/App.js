import "./index.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Membership from "./Pages/Membership/Memberships";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/memberships" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
