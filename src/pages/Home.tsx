import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import Resume from "../sections/Resume";
import Blog from "../sections/Blog";
import Contact from "../sections/Contact";

const Home: React.FC = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Resume />
    <Blog/>
    <Contact />
  </>
);

export default Home;
