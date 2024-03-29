"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
function Carousel({ className, src,ImageWidth,ImageHeight }) {
  const [currentSrc, setCurrentSrc] = useState(src[0]);
  console.log("src----->", src);
  useEffect(() => {
    let count = 0;
    const srcSlider = () => {
      try {
        setCurrentSrc(src[count % src.length]);
        count++;
        if (count >= src.length) {
          if (src[count % src.length]) count = 0;
        }
      } catch (err) {
        console.log("err in srcSlider---->", err);
      }
    };
    const intervalID = setInterval(srcSlider, 3000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <div className={`${className} `}>

      <Image
        // src={src[0]}
        src={currentSrc}
        className={`bg-yellow-400 object-contain w-[${ImageWidth?ImageWidth:"100%"}] h-[${ImageHeight?ImageHeight:"100%"}]`}
      />
      
    </div>
  );
}

export default Carousel;
