import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
export default function Slideshow() {
   const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
      {
         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__mNHBbHc455arb9CCQOVvcQC3KOc_byOsg&usqp=CAU",
      },
      {
         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUl02yCQyr30M4m3zo4XYQ_qr_77V8l_rSRA&usqp=CAU",
      },
      {
         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvgwHVZf1KYGaJ2-bNF7tItAjgV6zcTdO8w&usqp=CAU",
      },
      {
         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-SjrAsFXbg2qc7SU6SH7X0zQcb7qMAFiaQ&usqp=CAU",
      },
      {
         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkfSrwkLW-BQ7-Tre2bmnBF5UfKF9sEbUgg&usqp=CAU",
      },
   ];
   return (
      <div>
         <SimpleImageSlider
            width={1055}
            height={500}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
      </div>
   );
}