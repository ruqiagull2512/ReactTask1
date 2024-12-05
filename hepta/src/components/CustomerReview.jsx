import React from "react";
import Customer1 from "../assets/image/hero_1.jpg"; // Replace with actual image path
import Customer2 from "../assets/image/slider-4.jpg.webp"; // Replace with actual image path
import Customer3 from "../assets/image/img_4.jpg.webp"; // Replace with actual image path
import Customer4 from "../assets/image/img_5.jpg.webp"; // Add new customer image

const Rating = ({ rating, reviews }) => {
  // Render star rating dynamically based on rating
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex items-center space-x-2 mt-15 mb-60">
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <svg
          key={`full-${index}`}
          className="w-5 h-5 text-green-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.763 3.02 1.095-6.395L.464 6.363l6.373-.553L10 .04l2.363 5.76 6.373.553-4.868 5.262 1.095 6.395L10 15z"
            clipRule="evenodd"
          />
        </svg>
      ))}
      {/* Render half star if needed */}
      {halfStars === 1 && (
        <svg
          className="w-5 h-5 text-green-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.763 3.02 1.095-6.395L.464 6.363l6.373-.553L10 .04l2.363 5.76 6.373.553-4.868 5.262 1.095 6.395L10 15z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={`empty-${index}`}
          className="w-5 h-5 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.763 3.02 1.095-6.395L.464 6.363l6.373-.553L10 .04l2.363 5.76 6.373.553-4.868 5.262 1.095 6.395L10 15z"
            clipRule="evenodd"
          />
        </svg>
      ))}
      <span className="ml-2 text-gray-500 text-2xl">{reviews} Reviews</span>
    </div>
  );
};

const CustomerReviewSection = () => {
  const customers = [
    {
      id: 1,
      image: Customer1,
      fileLink: "./Navbar.jsx",
      text: "Food & Wines",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: 2,
      image: Customer2,
      fileLink: "./Navbar.jsx",
      text: "Resort & Spa",
      rating: 4,
      reviews: 95,
    },
    {
      id: 3,
      image: Customer3,
      fileLink: "./Navbar.jsx",
      text: "Hotel Rooms",
      rating: 5,
      reviews: 200,
    },
    {
      id: 4,
      image: Customer4, // Add new customer data
      fileLink: "./Navbar.jsx",
      text: "Mountain Climbing",
      rating: 4.8,
      reviews: 80,
    },
  ];

  return (
    <div className="main-container text-center py-10 px-4 mt-7">
      {/* Heading and description */}
      <h1 className="text-8xl font-bold font-serif mb-4 mt-8">Top Destination</h1>
      <p className="text-4xl text-gray-400 font-serif mb-10 mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto <br />
        doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum <br />
        voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
      </p>

      {/* Customer review cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-8xl mx-auto mt-5">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className=" p-6 flex flex-col items-center"
          >
            {/* Customer Image */}
            <img
              src={customer.image}
              alt={`Customer ${customer.id}`}
              className="w-full h-80 object-cover  mb-4"
            />
            {/* Clickable text linking to file */}
            <a
              href={customer.fileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl font-bold font-sans text-black mb-4 hover:underline"
            >
              {customer.text}
            </a>
            {/* Rating and Reviews */}
            <Rating rating={customer.rating} reviews={customer.reviews} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviewSection;
