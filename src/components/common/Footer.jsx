import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050810] py-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Copyright */}
        <p className="text-md text-slate-400 text-center sm:text-left">
          © {new Date().getFullYear()} . Designed & Developed by{" "}
          <span className="text-st-primary font-semibold">Rafshan Rial</span>.
          All rights reserved.
        </p>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-10  w-10 h-10 rounded-full bg-st-dark-card hover:bg-st-primary hover:text-black border border-white/10 text-slate-300 flex items-center justify-center transition duration-300 shadow-lg"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
