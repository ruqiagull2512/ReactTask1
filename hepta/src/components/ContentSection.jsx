import React from "react";
import { useInView } from "react-intersection-observer";
import leftImage from '../assets/image/hero_1.jpg'
import rightImage from '../assets/image/img_1_long.jpg.webp'

const ContentSection = () => {
  // Intersection Observers for each sub-div
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });

  return (
    <div className="scroll-mt-28 mt-60">
      {/* Sub Div 1 */}
      <div
        ref={ref1}
        className={`flex items-center justify-center mt-20 transition-all duration-1000 ${
          inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center w-3/4">
          {/* Image on Left */}
          <img
            src={leftImage}
            alt="Placeholder"
            className="w-1/2  "
          />
          {/* Text on Right */}
          <div className="w-1/2 text-left pl-14">
            <h2 className="text-4xl font-bold font-serif mb-4">Family Room</h2>
            <p className=" mb-6 font-sans text-3xl text-gray-600">
            Far far away, behind the word mountains, far from the  <br /> countries Vokalia and Consonantia,  there  live the blind <br />  texts. Separated they live in Bookmarksgrove right at the  <br /> coast of the Semantics, a large language ocean.A small <br />  river named Duden flows by their place and supplies it <br /> with  the necessary regelialia.



            </p>
            <button className="px-6 py-2 bg-white text-black text-4xl  hover:bg-cyan-300 hover:border-white hover:text-white border-4 border-cyan-200 ">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Sub Div 2 */}
      <div
        ref={ref2}
        className={`flex items-center justify-center  transition-all duration-1000 ${
          inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <div className="flex flex-col md:flex-row-reverse items-center w-3/4">
          {/* Image on Right */}
          <img
            src={rightImage}
            alt="Placeholder"
            className="w-1/2 "
          />
          {/* Text on Left */}
          <div className="w-1/2 text-left pr-10">
            <h2 className="text-4xl font-bold font-serif mb-4">Presidential Room</h2>
            <p className=" mb-6 font-sans text-3xl text-gray-600">
            Far far away, behind the word mountains, far from the  <br /> countries Vokalia and Consonantia,  there  live the blind <br />  texts. Separated they live in Bookmarksgrove right at the  <br /> coast of the Semantics, a large language ocean.A small <br />  river named Duden flows by their place and supplies it <br /> with  the necessary regelialia.



            </p>
            <button className="px-6 py-2 bg-white text-black text-4xl  hover:bg-cyan-300 hover:border-white hover:text-white border-4 border-cyan-200 ">
              Learn More
            </button>
           

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
