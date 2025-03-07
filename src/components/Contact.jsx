import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgjwode", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        navigate("/thankyou"); // Redirect to Thank You page
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#64ffda] mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-[#ccd6f6] max-w-2xl mx-auto">
            Whether you have a question, want to collaborate, or are looking for
            a front-end developer, I'd love to hear from you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#ccd6f6] mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-[#112240] border border-[#233554] rounded-lg text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda] focus:border-transparent transition-all duration-300 placeholder-[#8892b0]"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#ccd6f6] mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-[#112240] border border-[#233554] rounded-lg text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda] focus:border-transparent transition-all duration-300 placeholder-[#8892b0]"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#ccd6f6] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-[#112240] border border-[#233554] rounded-lg text-[#ccd6f6] focus:ring-2 focus:ring-[#64ffda] focus:border-transparent transition-all duration-300 placeholder-[#8892b0]"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 ${
                isLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#64ffda] text-[#0a192f] hover:bg-[#3d9c8c] hover:scale-105"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Success & Error Messages */}
          {status === "SUCCESS" && (
            <p className="text-center text-green-500 mt-4">
              Your message has been sent successfully! 🎉
            </p>
          )}
          {status === "ERROR" && (
            <p className="text-center text-red-500 mt-4">
              Oops! There was an error. Please try again.
            </p>
          )}
        </form>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-lg text-[#ccd6f6] mb-4">Or reach out directly:</p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:banadawithunde@gmail.com"
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href="https://github.com/banadawit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/bana-dawit-121810312"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
