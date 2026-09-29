import { ChevronUp } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`py-8 border-t relative transition-colors duration-300 ${
        isDark
          ? "bg-[#050810] border-white/5 text-slate-400"
          : "bg-slate-100 border-slate-200 text-slate-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-xs sm:text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Designed & Developed by{" "}
          <span className="text-st-primary font-bold">Rafshan Rial</span>.
          All rights reserved.
        </p>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition duration-300 shadow-lg ${
            isDark
              ? "bg-[#0e1526] hover:bg-st-primary hover:text-slate-950 border-white/10 text-slate-300"
              : "bg-white hover:bg-st-primary hover:text-slate-950 border-slate-300 text-slate-700"
          }`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
