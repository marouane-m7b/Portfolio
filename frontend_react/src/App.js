import React from "react";
import "./App.scss";

import { Header, Footer, About, Work, Skills, Testimonial } from "./container";
import { Navbar } from "./components";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
