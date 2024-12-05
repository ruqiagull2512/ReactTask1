import React from "react";

const ContactPage = () => {
  return (
    <div className="flex p-10 justify-center mt-20">
      {/* Left Side: Contact Form */}
      <div className="shadow-lg rounded-md p-8 w-2/4 ">
        {/* Form Title */}
        <h2 className="text-4xl font-serif text-gray-400 mb-6 text-center font-bold">Contact Us</h2>

        {/* Form Content */}
        <form className="space-y-6">
          {/* Name and Phone */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-4xl font-semibold mb-2 text-gray-400">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-4xl font-semibold mb-2 text-gray-400">Phone</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-4xl font-semibold mb-2 text-gray-400">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
            />
          </div>

          {/* Write Message */}
          <div>
            <label className="block text-4xl font-semibold mb-2 text-gray-400">
              Write Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
              rows="5"
            ></textarea>
          </div>

          {/* Send Message Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-3xl text-white font-bold font-sans rounded-md shadow-md h-15 w-70 hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Right Side: Address, Mail, and Phone */}
      <div className=" w-1/3 space-y-6 ml-20">
        <div>
          <h3 className="text-4xl font-bold font-serif mb-4">Address</h3>
          <p className="text-gray-400 text-3xl font-bold">123 Street, City, Country</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold  font-serif mb-4">Mail</h3>
          <p className="text-gray-400 text-3xl font-bold">example@mail.com</p>
        </div>
        <div>
          <h3 className="text-4xl font-serif font-bold mb-4">Phone Number</h3>
          <p className="text-gray-400 text-3xl font-bold">+123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
