import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
//import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <Contact/>
      <Footer />
     
    </>
  );
}

export default App;
