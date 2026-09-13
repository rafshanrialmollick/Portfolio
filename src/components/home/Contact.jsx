import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { contactData, heroData } from "../../data/portfolioData";
import SectionHeading from "../common/SectionHeading";

export default function Contact() {
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
      className="relative py-24 bg-[#070b15] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10   ">
        {/* Section Heading */}
        <SectionHeading
          watermark="Contact"
          subtitle="Contact"
          title="Get In Touch"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 justify-between ">
          {/* Left Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Just say Hello</h3>

            {/* Alert Banner */}
            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-sm font-medium">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mt-19">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-[#0e1526] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-st-primary transition text-sm"
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
                  className="w-full px-5 py-3.5 rounded-xl bg-[#0e1526] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-st-primary transition text-sm"
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
                  className="w-full px-5 py-3.5 rounded-xl bg-[#0e1526] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-st-primary transition text-sm"
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
                  className="w-full px-5 py-3.5 rounded-xl bg-[#0e1526] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-st-primary transition text-sm resize-none"
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
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Contact Info
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Feel free to reach out for freelance projects, full-stack
                developer roles, or technical collaborations.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0e1526] border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-st-primary/10 flex items-center justify-center text-st-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Email</h4>
                  {contactData.email.map((em, i) => (
                    <a
                      key={i}
                      href={`mailto:${em}`}
                      className="block text-xs text-slate-300 hover:text-st-primary transition"
                    >
                      {em}
                    </a>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0e1526] border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-st-primary/10 flex items-center justify-center text-st-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Phone</h4>
                  {contactData.phone.map((ph, i) => (
                    <span key={i} className="block text-xs text-slate-300">
                      {ph}
                    </span>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0e1526] border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-st-primary/10 flex items-center justify-center text-st-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Address</h4>
                  <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">
                    {contactData.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Connect Badges */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-semibold text-slate-400 mb-3">
                Visit my developer profiles and get connected:
              </p>
              <div className="flex flex-wrap gap-3">
                {heroData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#0e1526] hover:bg-st-primary hover:text-black border border-white/5 text-xs font-medium text-slate-300 transition duration-300"
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
