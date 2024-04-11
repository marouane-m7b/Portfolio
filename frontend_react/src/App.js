import React from "react";
import "./App.scss";
import { SpeedInsights } from "@vercel/speed-insights/react"

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
      <SpeedInsights/>
    </div>
  );
}

export default App;
