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

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070b15] text-slate-200">
      {/* Animated Cursor */}
      <CustomCursor />

      {/* Header */}
      <Header />

      {/* Homepage*/}
      <main>
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
