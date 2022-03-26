import React from "react";

import "./App.css";
import Providers from "../context";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Portfolio from "../Components/Portfolio";
import Contact from "../Components/Contact";

function App() {
  return (
    <Providers>
      <Header />
      <HeroSection />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </Providers>
  );
}

export default App;
