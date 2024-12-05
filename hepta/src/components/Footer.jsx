import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 font-sans text-6xl mt-40">
      {/* Footer Columns */}
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-4 gap- 6 px-4 mb-5 ml-14">
        {/* Column 1 */}
        <div>
          <h3 className="text-5xl font-serif mb-6">Quick Links</h3>
          <ul className="space-y-6 text-3xl font-sans text-gray-300 mt-4">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy
            </li>
            <li>Help</li>
            <li>Rooms</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-5xl font-serif mb-6">Support</h3>
          <ul className="space-y-6 text-3xl font-sans text-gray-300 mt-4">
            <li>Our Location</li>
            <li>The Hosts</li>
            <li>About</li>
            <li>Contact</li>
            <li>Restaurant</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-5xl font-serif mb-6">Contact Us</h3>
          <ul className="space-y-6 text-3xl font-sans text-gray-300 mt-4">
            <li>Address: <br />1234 Hepta Lane, Cityville</li>
            <li>Phone: <br />(123) 456-7890</li>
            <li>Email: <br /> info@hepta.com</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-3xl font-serif mb-6">
            Sign Up for Our Newsletter
          </h3>
          <p className="space-y-6 text-3xl font-sans text-gray-300 mt-4">Your email:</p>
          <hr className="border-gray-500 my-2 w-30 mx-auto mt-12" />
        </div>
      </div>

      {/* Decorated Divider */}
      <hr className="border-gray-600 my-10 mx-10 lg:mx-40" />

      {/* Footer Bottom Section */}
      <div className="text-center space-y-6">
        {/* Copywrite Text */}
        <p className="text-gray-400 text-4xl mt-5 ">
        Copyright © 2024 All rights reserved | This template is made with  by Colorlib
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-gray-400 text-5xl mt-5">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
