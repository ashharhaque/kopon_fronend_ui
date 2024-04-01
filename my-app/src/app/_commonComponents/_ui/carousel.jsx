"use client";
import { useState, useEffect } from "react";
import GreaterThanImage from "@/public/icons/greaterThanSign.svg"
import LessThanImage from "@/public/icons/lessThanSign.svg";
import Image from "next/image";
function Carousel({ className, src, ImageWidth, ImageHeight }) {
  const [transitionstart, setTransitionStart] = useState(0);
  const [currentIndex,setCurrentIndex]=useState(0);
  useEffect(() => {
    let count = 0;
    const srcSlider = () => {
      try {
        setCurrentIndex(count);
        count++;
        if (count ==src.length) {
          count = 0;
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
    <div className={`${className} overflow-hidden `}>
     {

      src.map((image,idx)=>{
        return(
          <div
          key={idx}
          
          style={{
          // backgroundColor: 'red',
          position: 'relative',
          minWidth: '100%',
          height: '100%',
          transition: 'all 1000ms ease-in-out',
          transform: currentIndex === idx
            ? `translateX(${idx * 100*(-1)}%)`
            : currentIndex === src.length - 1 && idx === 0
            ? 'translateX(-100%)'
            : `translateX(${currentIndex * 100*(-1)}%)`,
          opacity: currentIndex === idx || (currentIndex === src.length - 1 && idx === 0) ? 1 : 0,
        }}
      >
         <Image
            src={src[idx]}
            fill
            className={`object-contain`}
          

          />
      </div>
          )
      })
     }
      
    </div>
  );
}

export default Carousel;
