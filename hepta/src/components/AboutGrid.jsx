import React from "react";
import Image1 from '../assets/image/person_1.jpg.webp'
import Image2 from '../assets/image/person_2.jpg.webp'
import Image3 from '../assets/image/person_3.jpg.webp'
const GridWithSubDivs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 ">
      {/* Main Div with Heading and Text */}
      <div className="text-center mb-10 mt-30">
        <h1 className="text-5xl font-serif font-bold mb-4 mt-30">Team</h1>
        <p className="text-4xl font-sans text-gray-500 leading-relaxed mb-40">
  Far far away, behind the word mountains, far from the countries Vokalia
  <br />
  and Consonantia, there live the blind texts. Separated they live in
  <br />
  Bookmarksgrove right at the coast of the Semantics, a large language
  <br />
  ocean.


  </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sub Div 1 */}
        <div
          className="bg-white shadow-lg rounded-lg flex flex-col items-center p-4"
          style={{ height: "550px", width: "400px" }}
        >
          <img
            src={Image1}
            alt="Feature 1"
            className="mb-4 rounded-md"
            style={{ width: "100%", height: "auto" }}
          />
          <p className="text-5xl  font-bold font-sans text-gray-800 text-center mt-8">
          Jean Love
          </p>
        </div>

        {/* Sub Div 2 */}
        <div
          className="bg-white shadow-lg rounded-lg flex flex-col items-center p-4"
          style={{ height: "550px", width: "400px" }}
        >
          <img
            src={Image2}
            alt="Feature 2"
            className="mb-4 rounded-md"
            style={{ width: "100%", height: "auto" }}
          />
          <p className="text-5xl font-bold font-sans text-gray-800 text-center mt-8">
          Jeff Stark
          </p>
        </div>

        {/* Sub Div 3 */}
        <div
          className="bg-white shadow-lg rounded-lg flex flex-col items-center p-4"
          style={{ height: "550px", width: "400px" }}
        >
          <img
            src={Image3}
            alt="Feature 3"
            className="mb-4 rounded-md"
            style={{ width: "100%", height: "auto" }}
          />
          <p className="text-5xl font-sans font-bold text-gray-800 text-center mt-8">
          Vince Richardson
          </p>
        </div>

        {/* Sub Div 4 */}
        <div
          className="bg-white shadow-lg rounded-lg flex flex-col items-center p-4"
          style={{ height: "550px", width: "400px" }}
        >
          <img
            src={Image3}
            alt="Feature 4"
            className="mb-4 rounded-md"
            style={{ width: "100%", height: "auto" }}
          />
          <p className="text-5xl font-bold font-sans text-gray-800 text-center mt-8">
          Vince Richardson
          </p>
        </div>

        {/* Sub Div 5 */}
        <div
          className="bg-white shadow-lg rounded-lg flex flex-col items-center p-4"
          style={{ height: "550px", width: "400px" }}
        >
          <img
            src={Image2}
            alt="Feature 5"
            className="mb-4 rounded-md"
            style={{ width: "100%", height: "auto" }}
          />
          <p className="text-5xl font-bold font-sans text-gray-800 text-center mt-8">
          Jeff Stark
          </p>
        </div>

        {/* Sub Div 6 */}
        <div
          className="bg-white shadow-lg rounded-lg flex flex-col items-center p-4"
          style={{ height: "550px", width: "400px" }}
        >
          <img
            src={Image1}
            alt="Feature 6"
            className="mb-4 rounded-md"
            style={{ width: "100%", height: "auto" }}
          />
          <p className="text-5xl font-bold font-sans text-gray-800 text-center mt-8">
          Jean Love
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridWithSubDivs;
