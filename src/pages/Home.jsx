import React from "react";
import CustomCursor from "../components/common/CustomCursor";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Skills from "../components/home/Skills";
import Resume from "../components/home/Resume";
import Portfolio from "../components/home/Portfolio";
import Reviews from "../components/home/Reviews";
import Blog from "../components/home/Blog";
import Contact from "../components/home/Contact";
import Header from "../components/common/Header";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <div className={`relative min-h-screen max-w-full overflow-x-hidden ${isDark ? "bg-[#070b15] text-slate-200" : "bg-slate-50 text-slate-800"}`}>
      {/* Animated Cursor */}
      <CustomCursor />

      {/* Header */}
      <Header />

      {/* Homepage Content */}
      <main className="max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Resume />
        <Portfolio />
        <Reviews />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
