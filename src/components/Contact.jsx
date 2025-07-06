import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgjwode", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        setTimeout(() => navigate("/thankyou"), 1500); // Smooth redirect
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 lg:py-24 bg-[var(--color-bg)]"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-3 md:mb-4">
            Let's Connect
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Whether you have a question, want to collaborate, or are looking for
            a front-end developer, I'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Name Field */}
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-[var(--color-card)] border border-[var(--color-card-secondary)] rounded-lg text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300 placeholder-[var(--color-text-secondary)]"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-[var(--color-card)] border border-[var(--color-card-secondary)] rounded-lg text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300 placeholder-[var(--color-text-secondary)]"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-[var(--color-card)] border border-[var(--color-card-secondary)] rounded-lg text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300 placeholder-[var(--color-text-secondary)]"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-2">
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={!isLoading ? { scale: 1.05 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
              className={`px-8 py-3 font-medium rounded-lg transition-all duration-300 flex items-center justify-center mx-auto ${
                isLoading
                  ? "bg-[var(--color-card-secondary)] text-[var(--color-text-secondary)] cursor-not-allowed"
                  : "bg-[var(--color-accent)] text-[var(--color-card)] hover:bg-[var(--color-accent-dark)]"
              }`}
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane className="ml-2" />
                </>
              )}
            </motion.button>
          </div>

          {/* Status Messages */}
          {status === "SUCCESS" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-500 mt-4"
            >
              Message sent successfully! Redirecting...
            </motion.p>
          )}
          {status === "ERROR" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-500 mt-4"
            >
              Oops! There was an error. Please try again.
            </motion.p>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-4 md:mb-6">
            Or reach out directly:
          </p>
          <div className="flex justify-center gap-5 md:gap-6">
            {[
              {
                icon: <FaEnvelope />,
                url: "mailto:banadawithunde@gmail.com",
                label: "Email",
              },
              {
                icon: <FaGithub />,
                url: "https://github.com/banadawit",
                label: "GitHub",
              },
              {
                icon: <FaLinkedin />,
                url: "https://linkedin.com/in/bana-dawit-121810312",
                label: "LinkedIn",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300 text-xl md:text-2xl"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
