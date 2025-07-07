import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaSpinner } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

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
        setTimeout(() => navigate("/thankyou"), 1500);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus("ERROR");
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Have a project in mind or want to connect? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form - Takes 3 columns on desktop */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-6"
          >
            {/* Name Field */}
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-lg text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300 placeholder-[var(--color-text-secondary)]"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-lg text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300 placeholder-[var(--color-text-secondary)]"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Field */}
            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-lg text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300 placeholder-[var(--color-text-secondary)]"
                placeholder="Hello Bana, I'd like to talk about..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                className={`w-full px-6 py-3 font-medium rounded-lg transition-all duration-300 flex items-center justify-center ${
                  isLoading
                    ? "bg-[var(--color-card-secondary)] text-[var(--color-text-secondary)] cursor-not-allowed"
                    : "bg-[var(--color-accent)] text-[var(--color-card)] hover:bg-[var(--color-accent-dark)] shadow-md hover:shadow-lg"
                }`}
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    <span>Sending...</span>
                  </>
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

          {/* Contact Information - Takes 2 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[var(--color-card)] p-8 rounded-xl border border-[var(--color-card-border)] shadow-sm h-fit"
          >
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6">
              Contact Information
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[var(--color-card-secondary)] rounded-lg text-[var(--color-accent)] flex-shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-text)] mb-1">Email</h4>
                  <a 
                    href="mailto:banadawithunde@gmail.com" 
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors break-all"
                  >
                    banadawithunde@gmail.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[var(--color-card-secondary)] rounded-lg text-[var(--color-accent)] flex-shrink-0">
                  <FaGithub className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-text)] mb-1">GitHub</h4>
                  <a 
                    href="https://github.com/banadawit" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    github.com/banadawit
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[var(--color-card-secondary)] rounded-lg text-[var(--color-accent)] flex-shrink-0">
                  <FaLinkedin className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--color-text)] mb-1">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/bana-dawit-121810312" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    linkedin.com/in/bana-dawit
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;