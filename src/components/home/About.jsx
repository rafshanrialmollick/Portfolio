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

// Stagger container for the info grid
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-10  md:py-24 bg-[#090d1a] overflow-hidden">
      {/* Decorative background blobs for depth */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-st-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-st-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          watermark="About Me"
          subtitle="About Me"
          title="About Me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative max-w-md w-full group">
              <div className="absolute -inset-2 bg-gradient-to-r from-st-primary/30 to-st-primary/0 rounded-2xl blur-lg" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-st-dark-card">
                <img
                  src={aboutData.image}
                  alt={aboutData.title}
                  className="w-full h-[380px]  md:h-[480px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Diagonal shine sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                {/* Bottom gradient for depth */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Floating accent badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="hidden md:block   absolute -bottom-5 -right-5 bg-st-primary text-black font-bold px-5 py-3 rounded-xl shadow-xl text-sm"
              >
                {aboutData.subtitle}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              {aboutData.title}
            </h2>
            <h4 className="text-xl font-semibold text-st-primary">
              {aboutData.subtitle}
            </h4>

            {/* Bio with accent border for visual weight */}
            <p className="text-slate-300 text-base leading-relaxed border-l-2 border-st-primary/40 pl-4">
              {aboutData.bio}
            </p>

            {/* Info Grid - staggered reveal, icon per item */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-4 border-y border-white/10 text-sm"
            >
              {aboutData.details.map((info, id) => {
                const Icon = getIconForLabel(info.label);
                return (
                  <motion.div
                    key={id}
                    variants={itemVariants}
                    className="flex items-center gap-3 group"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-st-primary/10 text-st-primary group-hover:bg-st-primary group-hover:text-black transition-colors duration-300 shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span>
                      <span className="font-semibold text-white block leading-tight">
                        {info.label}
                      </span>
                      <span className="text-slate-300">{info.value}</span>
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CV Button */}
            <div className="pt-2  ">
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
