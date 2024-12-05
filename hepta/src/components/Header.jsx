import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import backgroundImage from "../assets/image/hero_1.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContent = () => {
    const content = document.getElementById("body-content");
    content.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`relative h-screen bg-cover bg-center`}
      style={{
        backgroundImage: mobileMenuOpen ? "none" : `url(${backgroundImage})`,
      }}
    >
      {/* Navbar */}
      {!mobileMenuOpen && (
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 bg-blue-200 bg-opacity-50">
          <div className="text-white text-4xl font-bold">Hepta</div>
          <button className="text-white" onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="h-12 w-12" />
          </button>
        </nav>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-black text-center  space-y-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-black"
          >
            <XMarkIcon className="h-12 w-12" />
          </button>
          <Link to="/" className="text-6xl mb-5 font-bold font-serif hover:text-indigo-300">
            Home
          </Link>
          <Link to="/hotel" className="text-6xl mb-5 font-bold font-serif hover:text-indigo-300">
            Hotels
          </Link>
          <Link to="/aboutus" className="text-6xl mb-5 font-bold font-serif hover:text-indigo-300">
            About Us
          </Link>
          <Link to="/gallery" className="text-6xl mb-5 font-bold font-serif hover:text-indigo-300">
            Gallery
          </Link>
          <Link to="/news" className="text-6xl mb-5 font-bold font-serif hover:text-indigo-300">
            News
          </Link>
          <Link to="/contact" className="text-6xl mb-5 font-bold font-serif hover:text-indigo-300">
            Contacts
          </Link>

         
         
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center text-white h-full mt-14">
          <h1 className="text-9xl font-bold font-serif">Travel & Tours</h1>
          <h3 className="text-4xl mt-4">
            A free template by Colorlib! Download and share!
          </h3>
          <button className="mt-40 text-4xl px-6 py-2 border-2 border-white w-60 text-white hover:bg-white hover:text-black transition-all">
            Get Started
          </button>

          {/* Scroll Arrow */}
          <div
            onClick={scrollToContent}
            className="absolute bottom-8 left-[51%] transform -translate-x-1/2 text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <p className="text-white text-2xl mt-2">Scroll Down</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
