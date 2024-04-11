import React from "react";
import "./App.scss";

import { Header, Footer, About, Work, Skills, Testimonial } from "./container";
import { Navbar } from "./components";
import {SocialMediaFixed} from "./components";
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
      <SocialMediaFixed/>
    </div>
  );
}

export default App;
