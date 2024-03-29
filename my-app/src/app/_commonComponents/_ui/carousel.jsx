"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
function Carousel({ className, src }) {
  const [currentSrc, setCurrentSrc] = useState(src[0]);
  const [isVideoPlaying,setIsVideoPlaying]=useState(false);
  console.log("src----->",src)
  useEffect(() => {
    let count = 0;
    const srcSlider = () => {
      try {
        // console.log("inside srcSlider count--->",count);
        // console.log("src length---->",src.length);
        // console.log("src on particular count----->",count%src.length);
        setCurrentSrc(src[count % src.length]);
        count++;
        if (count >= src.length) {
            if(src[count % src.length])
            setIsVideoPlaying(true)
          count = 0;
        }else{
            setIsVideoPlaying(false)

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
     { !isVideoPlaying && <Image
            // src={src[0]}
            src={currentSrc}

            className="object-contain h-[60vh] w-[100vh]"
        />}
      {isVideoPlaying && <video autoPlay muted  className="  h-[60vh] w-[100vh]">
        {/* <source src={src[0]}  /> */}
        <source src="/carVideo.mp4"  />

      </video>}
    </div>
  );
}

export default Carousel;
