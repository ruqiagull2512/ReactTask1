import React from "react";
import Image1 from "../assets/image/slider-4.jpg.webp";
import Image2 from "../assets/image/slider-6.jpg.webp";

const NewContent = () => {
  // Array of cards with unique content
  const cards = [
    {
      imgSrc: Image1,
      lightText: "February 6, 2018",
      darkText: "Free Template by Colorlib",
    },
    {
      imgSrc: Image2,
      lightText: "February 6, 2018",
      darkText: "Free Template by Colorlib",
    },
    {
      imgSrc: Image2,
      lightText: "February 6, 2018",
      darkText: "Free Template by Colorlib",
    },
    {
      imgSrc: Image1,
      lightText: "February 6, 2018",
      darkText: "Free Template by Colorlib",
    },
    {
      imgSrc: Image2,
      lightText: "February 6, 2018",
      darkText: "Free Template by Colorlib",
    },
    {
      imgSrc: Image1,
      lightText: "February 6, 2018",
      darkText: "Free Template by Colorlib",
    },
  ];

  return (
    <div className="flex p-4 g-1"> {/* Reduced gap between sections */}
      {/* Left Side: Cards */}
      <div className="w-3/4 grid grid-cols-2  p-4 mt-60 ml-20 mr-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="shadow-lg rounded-md overflow-hidden bg-white"
            style={{ width: "70%", height: "600px" }} // Adjustable width and height
          >
            <img
              src={card.imgSrc}
              alt={`Card ${index + 1}`}
              className="w-full h-2/3 object-cover"
            />
            <div className="p-2">
              <p className="text-gray-400 text-4xl flex m-auto justify-center mt-4">
                {card.lightText}
              </p>
              <p className="text-black text-4xl font-bold flex m-auto justify-center font-serif mt-6">
                {card.darkText}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side: Divs */}
      <div className="w-1/4 space-y-4 mt-60 mr-20">
        {/* Search Bar */}
        <div
          className="bg-white p-4 shadow-lg rounded-md"
          style={{ height: "100px", width: "500px" }} // Adjustable height
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border rounded-md focus:outline-none"
          />
        </div>

        {/* Five Images Div */}
        <div
          className="p-4 shadow-lg rounded-md"
          style={{ height: "1000px", width: "500px" }} // Adjustable height
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="flex items-center space-x-4 mb-4" key={index} style={{ height: "170px", width:"400px" }}>
              <img
                src={index % 2 === 0 ? Image1 : Image2} // Alternating images
                alt={`Rectangle ${index + 1}`}
                className="w-50 h-40" // Adjusted image size
              />
              <div>
                <p className="text-gray-400">February 6, 2018</p>
                <p className="text-black font-bold">Free Template By Colorlib</p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Div */}
        <div
          className="p-4 shadow-lg rounded-md mt-8"
          style={{ height: "500px" }} // Adjustable height
        >
          <h2 className="text-black text-4xl font-serif">Categories</h2>
          {["Event", "Resto Bar", "Celebration", "Promps"].map((category, index) => (
            <div key={index}>
              <div className="flex justify-between mt-12">
                <p className="text-gray-500 text-4xl">{category}</p>
                <p className="text-black font-sans text-4xl">(12)</p>
              </div>
              {index < 3 && <hr className="mt-2 border-gray-300" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContent;
