// Slideshow.js

import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "../src/slideshow.css";

export default function Slideshow() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
         url: "https://img.freepik.com/free-photo/scandinavian-living-room-interior-design-zoom-background_53876-143147.jpg?size=626&ext=jpg",
      },
      {
         url: "https://img.freepik.com/premium-photo/modern-interior-living-room-blueprint-home-decor-concept-blue-sofa-black-lamp-white-flooring-dark-blueprint-wall-3d-rendering_33739-484.jpg?size=626&ext=jpg",
      },
      {
         url: "https://img.freepik.com/free-photo/chic-modern-luxury-aesthetics-style-living-room-gray-tone_53876-132806.jpg?size=626&ext=jpg",
      },
      {
         url: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg?size=626&ext=jpg",
      },
      {
         url: "https://img.freepik.com/free-photo/blue-armchair-against-blue-wall-living-room-interior-elegant-interior-design-with-copy-space-ai-generative_123827-23719.jpg?size=626&ext=jpg",
      },
  ];

  return (
    <div className="slideshow-container">
      <SimpleImageSlider
        width={1055}
        height={500}
        images={sliderImages}
      //   showBullets={true}
      //   showNavs={true}
        autoPlay={true}
        onStartSlide={(index, length) => {
          setImageNum(index);
        }}
        autoPlayDelay={3}
      />
      <div className="slideshow-bullets">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            className={`slideshow-bullet ${index === imageNum ? "active" : ""}`}
            onClick={() => setImageNum(index)}
          ></div>
        ))}
      </div>
      <div className="slideshow-navs">
        <div
          className="slideshow-nav"
          onClick={() => setImageNum((imageNum - 1 + sliderImages.length) % sliderImages.length)}
        >
          {"<"}
        </div>
        <div
          className="slideshow-nav"
          onClick={() => setImageNum((imageNum + 1) % sliderImages.length)}
        >
          {">"}
        </div>
      </div>
    </div>
  );
}


