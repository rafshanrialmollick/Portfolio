import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { heroData } from "../../data/portfolioData";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: 'Skills', href: '#skills' },
  { label: "Resume", href: "#resume" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070b15]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/*  Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/images/logo_rafshan.png"
            alt="Rafshan Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 text-sm font-medium tracking-wide">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`transition-colors duration-200 hover:text-st-primary ${
                      isActive
                        ? "text-st-primary font-semibold"
                        : "text-slate-300"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Quick Phone Call Action */}
          <div className="flex items-center gap-3 pl-6 border-l border-slate-700/60">
            <div className="w-10 h-10 rounded-full bg-st-primary/10 flex items-center justify-center text-st-primary border border-st-primary/20">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <p className="text-slate-400 font-light">Call Me</p>
              <a
                href={`tel:${heroData.phone}`}
                className="text-white font-semibold hover:text-st-primary transition"
              >
                {heroData.phone}
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-st-primary p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-slate-800 px-6 py-6 transition-all duration-300">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-base font-medium transition ${
                      isActive
                        ? "text-st-primary font-bold"
                        : "text-slate-300 hover:text-st-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
            <Phone className="w-5 h-5 text-st-primary" />
            <a
              href={`tel:${heroData.phone}`}
              className="text-white font-semibold text-sm"
            >
              {heroData.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
