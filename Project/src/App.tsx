import React, { useState } from "react";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Summary from "./components/Summary";
import Testimonial from "./components/Testimonial";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      {/* <Navbar />
      <Hero /> 
      <Features /> */}
      <Partners />
      {/* <Contact /> */}
      <Experience />
      <Testimonial />
      <Summary />
      {/* <Pricing />
      <FAQ />
      <CTA /> # Call-to-Action
      <Footer /> */}
    </div>
  );
}

export default App;
