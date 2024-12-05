import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import foodImage from "../assets/image/001-breakfast (2).svg"
import earthImage from "../assets/image/002-planet-earth.svg"
import airPlane from "../assets/image/003-airplane.svg"
import beach from "../assets/image/004-beach.svg"
import mountain from "../assets/image/005-mountains.svg"
import airBallon from "../assets/image/006-hot-air-balloon.svg"

const AdditionalContent = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <div id="additional-content" className="min-h-screen py-12 bg-gray-100 ">
      {/* First Div: Heading and Text */}
      <div
        className="mb-12 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-6xl font-bold font-serif text-black  mb-4">
        Experience Once In Your Life Time
        </h2>
        <p className="text-4xl font-sans text-gray-500 mt-8">
        Far far away, behind the word mountains, far from the countries Vokalia
        <br />
        and Consonantia, there live the blind texts. Separated they live in
        <br />
        Bookmarksgrove right at the coast of the Semantics, a large language
        <br />
        ocean.


        </p>
      </div>

      {/* Six Separate Divs: Images and Text */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-3 max-w-9xl mx-auto ">
        {/* Div 1 */}
        <div
          className="flex flex-col items-center  p-6  "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={foodImage} // Adjust image path
            alt="Feature 1"
            className="w-48 h-48 overflow-hidden rounded-md"
          />
          <h1 className="font-bold mt-3 text-5xl">Goods Foods</h1>
          <p className="mt-4 text-gray-500 text-center font-sans text-3xl">
          Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there live the <br /> blind texts.


          </p>
        </div>

        {/* Div 2 */}
        <div
          className="flex flex-col items-center  p-6  "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={earthImage} // Adjust image path
            alt="Feature 1"
            className="w-48 h-48 overflow-hidden rounded-md"
          />
          <h1 className="font-bold mt-3 text-5xl">Travel AnyWhere</h1>
          <p className="mt-4 text-gray-500 text-center font-sans text-3xl">
          Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there live the <br /> blind texts.


          </p>
        </div>

        {/* Div 3 */}
        <div
          className="flex flex-col items-center  p-6  "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={airPlane} // Adjust image path
            alt="Feature 1"
            className="w-48 h-48 overflow-hidden rounded-md"
          />
          <h1 className="font-bold mt-3 text-5xl">AirPlane</h1>
          <p className="mt-4 text-gray-500 text-center font-sans text-3xl">
          Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there live the <br /> blind texts.


          </p>
        </div>

        {/* Div 4 */}
        <div
          className="flex flex-col items-center  p-6  "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={beach} // Adjust image path
            alt="Feature 1"
            className="w-48 h-48 overflow-hidden rounded-md"
          />
          <h1 className="font-bold mt-3 text-5xl">Beach Resort</h1>
          <p className="mt-4 text-gray-500 text-center font-sans text-3xl">
          Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there live the <br /> blind texts.


          </p>
        </div>

        {/* Div 5 */}
        <div
          className="flex flex-col items-center  p-6  "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={mountain} // Adjust image path
            alt="Feature 1"
            className="w-48 h-48 overflow-hidden rounded-md"
          />
          <h1 className="font-bold mt-3 text-5xl">Mountain Climbing</h1>
          <p className="mt-4 text-gray-500 text-center font-sans text-3xl">
          Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there live the <br /> blind texts.


          </p>
        </div>

        {/* Div 6 */}
        <div
          className="flex flex-col items-center  p-6  "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={airBallon} // Adjust image path
            alt="Feature 1"
            className="w-48 h-48 overflow-hidden rounded-md"
          />
          <h1 className="font-bold mt-3 text-5xl">Hot Air Ballon</h1>
          <p className="mt-4 text-gray-500 text-center font-sans text-3xl">
          Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there live the <br /> blind texts.


          </p>
        </div>
      </div>

    </div>
  



  );
};

export default AdditionalContent;
