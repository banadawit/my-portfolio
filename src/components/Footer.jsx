const Footer = () => {
  return (
    // {/* footer section */}
    <section>
      <footer className="py-8 bg-[#112240] text-[#ccd6f6] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bana Dawit. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
