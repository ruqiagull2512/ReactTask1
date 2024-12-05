import React from "react";
import Image1 from '../assets/image/hero_1.jpg';
import Image2 from '../assets/image/img_1_long.jpg.webp';
import Image3 from '../assets/image/img_4.jpg.webp';
import Image4 from '../assets/image/img_5.jpg.webp';
import Image5 from '../assets/image/slider-4.jpg.webp';
import Image6 from '../assets/image/slider-6.jpg.webp';
import Image7 from '../assets/image/bodycontents.png';

const GalleryImage = () => {
  return (
    <div
      className="gallery"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop:"150px"
      }}
     >
      {/* Row 1: 4 images */}
      <div
        className="row row-4"
        style={{ display: "flex", gap: "10px" }}
      >
        <img
          src={Image1}
          alt="Image 1"
          className="row-4-img"
          style={{
            width: "430px",
            height: "450px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <img
          src={Image2}
          alt="Image 2"
          style={{
            width: "430px",
            height: "450px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <img
          src={Image3}
          alt="Image 3"
          style={{
            width: "430px",
            height: "450px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <img
          src={Image4}
          alt="Image 4"
          style={{
            width: "430px",
            height: "450px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {/* Row 2: 4 images */}
      <div
        className="row row-4"
        style={{ display: "flex", gap: "10px" }}
      >
        <img
          src={Image5}
          alt="Image 5"
          style={{
            width: "430px",
            height: "450px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <img
          src={Image6}
          alt="Image 6"
          style={{
            width: "430px",
            height: "450px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <img
          src={Image7}
          alt="Image 7"
          style={{
            width: "430px",
            height: "450px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <img
          src={Image1}
          alt="Image 8"
          style={{
            width: "430px",
            height: "450px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {/* Row 3: 2 images */}
      <div
        className="row row-2"
        style={{ display: "flex", gap: "10px" }}
      >
        <img
          src={Image2}
          alt="Image 9"
          style={{
            width: "860px",
            height: "500px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <img
          src={Image3}
          alt="Image 10"
          style={{
            width: "860px",
            height: "500px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {/* Row 4: 4 images */}
      <div
        className="row row-4"
        style={{ display: "flex", gap: "10px" }}
      >
        <img
          src={Image4}
          alt="Image 11"
          style={{
            width: "430px",
            height: "450px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <img
          src={Image5}
          alt="Image 12"
          style={{
            width: "430px",
            height: "450px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <img
          src={Image6}
          alt="Image 13"
          style={{
            width: "430px",
            height: "450px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <img
          src={Image7}
          alt="Image 14"
          style={{
            width: "430px",
            height: "450px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>
  );
};

export default GalleryImage;
