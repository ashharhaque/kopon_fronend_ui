"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
function Carousel({ className, src, ImageWidth, ImageHeight }) {
  const [currentSrc, setCurrentSrc] = useState(src[0]);
  const [transitionstart,setTransitionStart]=useState(false);
  console.log("src----->", src);
  //   useEffect(() => {
  //     let count = 0;
  //     const srcSlider = () => {
  //       try {
  //         setCurrentSrc(src[count % src.length]);
  //         count++;
  //         if (count >= src.length) {
  //           if (src[count % src.length]) count = 0;
  //         }
  //       } catch (err) {
  //         console.log("err in srcSlider---->", err);
  //       }
  //     };
  //     const intervalID = setInterval(srcSlider, 3000);
  //     return () => {
  //       clearInterval(intervalID);
  //     };
  //   }, []);

  useEffect(() => {
    let count = 0;
    const slider=()=>{
        try{
            if(count==0){
                setTransitionStart(false);
                count++;
            }
            else{
                count=0;
                setTransitionStart(true);
            }

        }catch(err){
            console.log("err in slider---->",err)
        }
    }
    const intervalID = setInterval(slider, 3000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  //   return (
  //     <div className={`${className} `}>

  //       <Image
  //         // src={src[0]}
  //         src={currentSrc}
  //         className={`bg-yellow-400 object-contain w-[${ImageWidth?ImageWidth:"100%"}] h-[${ImageHeight?ImageHeight:"100%"}]`}
  //       />

  //     </div>

  //   );
  return (
    <div className="flex justify-center">
      <Image
        src={src[0]}
        className={`bg-red-500 translate-x-[0px] transition-all ease-in-out delay-300 duration-1000  ${transitionstart?"translate-x-0":"translate-x-[100px]"}`}
      />
    </div>
  );
}

export default Carousel;
