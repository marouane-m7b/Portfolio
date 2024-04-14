import React from "react";
import "./App.scss";
import { SpeedInsights } from "@vercel/speed-insights/react";
import {
  Header,
  Footer,
  About,
  Work,
  Skills,
  Testimonial,
  Experience,
} from "./container";
import { Navbar } from "./components";
import { SocialMediaFixed } from "./components";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Marouane Mahboub - Fullstack and Mobile Developer</title>
        <meta
          name="description"
          content="Portfolio website of Marouane Mahboub, a fullstack and mobile developer. Explore projects, skills, and contact information."
        />
        <meta
          name="keywords"
          content="Marouane Mahboub, Marwane Mahboub, m7b, fullstack, m7b, fullstack developer, mobile developer, portfolio"
        />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Marouane Mahboub",
            "url": "https://www.m7b.dev"
          }`}
        </script>
      </Helmet>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Testimonial />
      <Footer />
      <SocialMediaFixed />
      <SpeedInsights />
    </div>
  );
}

export default App;
