import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Hero1 from "../assets/image/hero_1.jpg";
import Slider4 from "../assets/image/slider-4.jpg.webp";
import Slider6 from "../assets/image/slider-6.jpg.webp";

const Slider = () => {
  const slides = [
    { id: 1, image: Hero1, alt: "Slide 1" },
    { id: 2, image: Slider4, alt: "Slide 2" },
    { id: 3, image: Slider6, alt: "Slide 3" },
  ];

  return (
   
     

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop
          navigation
          pagination={{ clickable: true }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-[80%] h-[800px] object-cover rounded-lg m-auto "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      
  );
};

export default Slider;
