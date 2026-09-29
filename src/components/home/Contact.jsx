import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { contactData, heroData } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";
import { useTheme } from "../../context/ThemeContext";

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.msg) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: "", email: "", subject: "", msg: "" });
    }
  };

  return (
    <section
      id="contact"
      className={`relative py-16 md:py-24 max-w-full overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#070b15]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          watermark="Contact"
          subtitle="Contact"
          title="Get In Touch"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 justify-between">
          {/* Left Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
              Just say Hello
            </h3>

            {/* Alert Banner */}
            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center gap-3 text-sm font-medium">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={`w-full px-4 sm:px-5 py-3.5 rounded-xl border transition text-sm ${
                    isDark
                      ? "bg-[#0e1526] border-white/10 text-white placeholder-slate-500 focus:border-st-primary"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-st-primary"
                  }`}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className={`w-full px-4 sm:px-5 py-3.5 rounded-xl border transition text-sm ${
                    isDark
                      ? "bg-[#0e1526] border-white/10 text-white placeholder-slate-500 focus:border-st-primary"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-st-primary"
                  }`}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                  required
                  className={`w-full px-4 sm:px-5 py-3.5 rounded-xl border transition text-sm ${
                    isDark
                      ? "bg-[#0e1526] border-white/10 text-white placeholder-slate-500 focus:border-st-primary"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-st-primary"
                  }`}
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  name="msg"
                  value={formData.msg}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className={`w-full px-4 sm:px-5 py-3.5 rounded-xl border transition text-sm resize-none ${
                    isDark
                      ? "bg-[#0e1526] border-white/10 text-white placeholder-slate-500 focus:border-st-primary"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-st-primary"
                  }`}
                />
              </div>

              <button type="submit" className="st-btn-primary w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                Contact Info
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Feel free to reach out for freelance projects, full-stack
                developer roles, or technical collaborations.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 sm:space-y-6">
              {/* Email Card (Clickable) */}
              <div
                className={`flex items-start gap-4 p-4 rounded-xl border transition ${
                  isDark ? "bg-[#0e1526] border-white/5" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-st-primary/10 flex items-center justify-center text-st-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <h4 className={`text-sm font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                    Email
                  </h4>
                  {contactData.email.map((em, i) => (
                    <a
                      key={i}
                      href={`mailto:${em}`}
                      className="block text-xs sm:text-sm text-st-primary font-bold hover:underline transition truncate"
                    >
                      {em}
                    </a>
                  ))}
                </div>
              </div>

              {/* Phone Card (Clickable) */}
              <div
                className={`flex items-start gap-4 p-4 rounded-xl border transition ${
                  isDark ? "bg-[#0e1526] border-white/5" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-st-primary/10 flex items-center justify-center text-st-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                    Phone
                  </h4>
                  {contactData.phone.map((ph, i) => (
                    <a
                      key={i}
                      href={`tel:${ph}`}
                      className="block text-xs sm:text-sm text-st-primary font-bold hover:underline transition"
                    >
                      {ph}
                    </a>
                  ))}
                </div>
              </div>

              {/* Address Card */}
              <div
                className={`flex items-start gap-4 p-4 rounded-xl border transition ${
                  isDark ? "bg-[#0e1526] border-white/5" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-st-primary/10 flex items-center justify-center text-st-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                    Address
                  </h4>
                  <p className={`text-xs sm:text-sm whitespace-pre-line leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {contactData.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connect Badges */}
            <div className={`pt-4 border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
              <p className={`text-xs font-semibold mb-3 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Visit my developer profiles and get connected:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {heroData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition duration-300 ${
                      isDark
                        ? "bg-[#0e1526] border-white/5 text-slate-300 hover:bg-st-primary hover:text-slate-950"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-st-primary hover:text-slate-950 shadow-sm"
                    }`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
