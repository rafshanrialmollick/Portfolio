import { motion } from "framer-motion";
import {
  Download,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Globe,
  Calendar,
  User,
} from "lucide-react";
import { aboutData } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";
import { useTheme } from "../../context/ThemeContext";

function getIconForLabel(label = "") {
  const l = label.toLowerCase();
  if (l.includes("location") || l.includes("address")) return MapPin;
  if (l.includes("email") || l.includes("mail")) return Mail;
  if (l.includes("phone") || l.includes("call")) return Phone;
  if (l.includes("experience") || l.includes("year")) return Briefcase;
  if (l.includes("education") || l.includes("degree")) return GraduationCap;
  if (l.includes("website") || l.includes("freelance")) return Globe;
  if (l.includes("birth") || l.includes("date")) return Calendar;
  return User;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const { isDark } = useTheme();

  const renderDetailValue = (label, value) => {
    const l = label.toLowerCase();
    if (l.includes("phone") || l.includes("call")) {
      return (
        <a
          href={`tel:${value}`}
          className="hover:text-st-primary transition underline font-medium"
        >
          {value}
        </a>
      );
    }
    if (l.includes("email") || l.includes("mail")) {
      return (
        <a
          href={`mailto:${value}`}
          className="hover:text-st-primary transition underline font-medium break-all"
        >
          {value}
        </a>
      );
    }
    return <span>{value}</span>;
  };

  return (
    <section
      id="about"
      className={`relative py-16 md:py-24 max-w-full overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#090d1a]" : "bg-slate-100/70"
      }`}
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-st-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-st-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          watermark="About Me"
          subtitle="About Me"
          title="About Me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative max-w-md w-full group">
              <div className="absolute -inset-2 bg-gradient-to-r from-st-primary/30 to-st-primary/0 rounded-2xl blur-lg" />

              <div
                className={`relative rounded-2xl overflow-hidden border shadow-2xl transition ${
                  isDark ? "bg-[#101828] border-white/10" : "bg-white border-slate-200"
                }`}
              >
                <img
                  src={aboutData.image}
                  alt={aboutData.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[360px] md:h-[480px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Diagonal shine sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>

              {/* Floating accent badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden sm:block absolute -bottom-4 -right-2 sm:-right-4 bg-st-primary text-slate-950 font-bold px-5 py-3 rounded-xl shadow-xl text-xs sm:text-sm"
              >
                {aboutData.subtitle}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2
              className={`text-2xl sm:text-4xl font-bold leading-snug ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {aboutData.title}
            </h2>
            <h4 className="text-lg sm:text-xl font-semibold text-st-primary">
              {aboutData.subtitle}
            </h4>

            {/* Bio with accent border */}
            <p
              className={`text-sm sm:text-base leading-relaxed border-l-2 border-st-primary/50 pl-4 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {aboutData.bio}
            </p>

            {/* Info Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y text-xs sm:text-sm ${
                isDark ? "border-white/10" : "border-slate-300"
              }`}
            >
              {aboutData.details.map((info, id) => {
                const Icon = getIconForLabel(info.label);
                return (
                  <motion.div
                    key={id}
                    variants={itemVariants}
                    className="flex items-center gap-3 group"
                  >
                    <span
                      className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-300 shrink-0 ${
                        isDark
                          ? "bg-st-primary/10 text-st-primary group-hover:bg-st-primary group-hover:text-slate-950"
                          : "bg-amber-100 text-amber-800 group-hover:bg-st-primary group-hover:text-slate-950"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="truncate">
                      <span
                        className={`font-semibold block leading-tight ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {info.label}
                      </span>
                      <span className={isDark ? "text-slate-300" : "text-slate-600"}>
                        {renderDetailValue(info.label, info.value)}
                      </span>
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CV Download Button */}
            <div className="pt-2">
              <a
                href={aboutData.cvLink}
                download
                className="st-btn-primary gap-2 group inline-flex items-center"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
