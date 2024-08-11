import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <ContactUs />
    </>
  );
}

export default App;
