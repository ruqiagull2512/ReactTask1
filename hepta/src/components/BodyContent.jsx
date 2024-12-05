import  { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import leftImage from "../assets/image/bodycontents.png"

const BodyContent = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const playVideo = () => {
    const videoUrl = "https://vimeo.com/channels/staffpicks/93951774"; // Replace with your video link
    window.open(videoUrl, "_blank");
    


  };

  return (
    <div
      id="body-content"
      className="min-h-screen flex items-center justify-center p-6 bg-gray-100"
    >
      <div
        className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl p-6 rounded-lg   "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Left Side: Image */}
        <div className="w-300">
          <img
            src={leftImage} // Adjust the image path
            alt="Left Side Content"
            className="rounded-lg w-full"
          />
        </div>

        {/* Right Side: Text and Video Button */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-5xl font-bold font-serif text-black">
            Welcome To Our Website
            <br />
          </h2>
          <p className="mt-4 text-2xl text-black
          ">
            Far far away, behind the word mountains, far from the countries 
            Vokalia and Consonantia, there live  the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <button
            onClick={playVideo}
            className="flex items-center justify-center gap-2 mt-6 px-4 py-2 rounded-full  text-indigo-400 text-2xl  transition"
          >
            {/* Circular Play Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-s-black bg-white text-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75l6.5 4.25-6.5 4.25V6.75z"
                />
              </svg>
            </div>
            Watch This Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
