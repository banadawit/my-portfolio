import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-[#0a192f] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Bana Dawit. All rights reserved.</p>
          <div className="mt-2">
            <a href="https://github.com/BanaDawit" className="hover:text-[#64ffda] mx-2">GitHub</a>
            <a href="https://www.linkedin.com/in/BanaDawit" className="hover:text-[#64ffda] mx-2">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  