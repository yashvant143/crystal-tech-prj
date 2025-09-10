import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientsMarquee from "./components/ClientsMarquee";
import Blog from "./components/Blog";
import About from "./components/About";

import Stats from "./components/Stats";
import Strengths from "./components/Strengths";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import BlogGrid from "./components/BlogGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-deep text-gray-200">
      <Navbar />
      <main className="pt-20">
      <Hero />
      <ClientsMarquee/>
      <Blog/>
      <About />  
      <Strengths />
      <Stats/>
      <Services />
      <Testimonials />
      <BlogGrid />
      </main>
      <Footer/>
    </div>
  );
}

