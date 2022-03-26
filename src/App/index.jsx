import React from "react";
import Head from "../Components/Head";

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
      <Head />
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
