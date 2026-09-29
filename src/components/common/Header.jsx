import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Sun, Moon } from "lucide-react";
import { heroData } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#service" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blogs", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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
          ? isDark
            ? "bg-[#070b15]/90 backdrop-blur-md py-3 shadow-lg border-b border-white/5"
            : "bg-white/90 backdrop-blur-md py-3 shadow-md border-b border-slate-200"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src="/images/logo_rafshan.png"
            alt="Rafshan Logo"
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            loading="eager"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <ul className="flex items-center space-x-6 text-sm font-medium tracking-wide">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`transition-colors duration-200 hover:text-st-primary ${
                      isActive
                        ? "text-st-primary font-bold"
                        : isDark
                          ? "text-slate-300"
                          : "text-slate-700"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-all duration-300 ${
              isDark
                ? "bg-slate-800 text-amber-400 hover:bg-slate-700"
                : "bg-slate-200 text-slate-800 hover:bg-slate-300"
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Clickable Phone Action */}
          <div className="flex items-center gap-3 pl-4 border-l border-slate-700/40">
            <a
              href={`tel:${heroData.phone}`}
              className="w-9 h-9 rounded-full bg-st-primary/10 flex items-center justify-center text-st-primary border border-st-primary/20 hover:bg-st-primary hover:text-slate-950 transition-colors"
              title="Call Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <div className="text-xs">
              <a
                href={`tel:${heroData.phone}`}
                className={`font-semibold hover:text-st-primary transition ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {heroData.phone}
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Controls (Theme Toggle + Hamburger Menu) */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Theme Toggle Button Mobile */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition ${
              isDark
                ? "bg-slate-800 text-amber-400"
                : "bg-slate-200 text-slate-800"
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg focus:outline-none transition ${
              isDark
                ? "text-white hover:text-st-primary"
                : "text-slate-900 hover:text-st-primary"
            }`}
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-6 py-6 transition-all duration-300 shadow-2xl ${
            isDark
              ? "bg-[#0a0f1d]/95 backdrop-blur-lg border-slate-800 text-white"
              : "bg-white/95 backdrop-blur-lg border-slate-200 text-slate-900"
          }`}
        >
          <ul className="space-y-3">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-base font-semibold transition ${
                      isActive
                        ? "text-st-primary font-bold pl-2 border-l-2 border-st-primary"
                        : isDark
                          ? "text-slate-300 hover:text-st-primary"
                          : "text-slate-700 hover:text-st-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Phone Hotline CTA */}
          <div className="mt-6 pt-4 border-t border-slate-700/30 flex items-center justify-between">
            <a
              href={`tel:${heroData.phone}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 text-st-primary font-bold text-sm hover:underline"
            >
              <div className="w-9 h-9 rounded-full bg-st-primary/10 flex items-center justify-center text-st-primary border border-st-primary/30">
                <Phone className="w-4 h-4" />
              </div>
              <span>{heroData.phone}</span>
            </a>

            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border ${
                isDark
                  ? "border-slate-700 text-amber-400"
                  : "border-slate-300 text-slate-800"
              }`}
            >
              {isDark ? (
                <Sun className="w-3.5 h-3.5" />
              ) : (
                <Moon className="w-3.5 h-3.5" />
              )}
              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
