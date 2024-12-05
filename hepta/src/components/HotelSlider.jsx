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
import backImage from "../assets/image/greybg.jpeg"; // background image for both sections



// Blog data
const blogs = [
  {
    id: 1,
    image: Hero1,
    title: "Discover Hidden Gems",
    date: "Feb 26, 2023",
    description:
      "Far away, behind the word mountains, lies a serene escape for everyone.",
  },
  {
    id: 2,
    image: Slider4,
    title: "45 Best Places to Unwind",
    date: "Mar 10, 2023",
    description:
      "Experience the beauty of untouched nature with our curated travel guides.",
  },
  {
    id: 3,
    image: Slider6,
    title: "The Art of Relaxation",
    date: "Apr 5, 2023",
    description:
      "Discover how to unwind and rejuvenate your senses with our expert tips.",
  },
];

const BlogSection = () => {
  return (
    <section
      className="blog-section"
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "50px 0",
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-8xl font-serif font-bold mt-40">More Hotel Features</h2>
          <p className="text-4xl font-sans text-gray-500 leading-relaxed mb-40 mt-11">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatem eveniet <br /> voluptatum, obcaecati aut saepe veritatis. Pariatur odio beatae vel quod placeat dolorem itaque et quibusdam iure, quia similique, officia tempore harum odit corporis sunt!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white min-h-[800px]  min-w-[500px] rounded-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className=" w-full min-h-[500px] object-cover"
              />
              <div className="p-4">
                <span className="text-4xl font-sans text-gray-500 leading-relaxed mt-40">
                  {blog.date}
                </span>
                <h3 className="text-4xl font-semibold mt-4">{blog.title}</h3>
                <p className="text-4xl font-sans text-gray-500 leading-relaxed mt-10">
                  {blog.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Slider = () => {
  const slides = [
    { id: 1, image: Hero1, alt: "Slide 1" },
    { id: 2, image: Slider4, alt: "Slide 2" },
    { id: 3, image: Slider6, alt: "Slide 3" },
  ];

  return (
    <section
      className="slider-section"
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "50px 0",
      }}
    >
     

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
      
    </section>
  );
};

export { Slider, BlogSection };
