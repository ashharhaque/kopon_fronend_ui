"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
function Carousel({ className, src, ImageWidth, ImageHeight }) {
  const [currentSrc, setCurrentSrc] = useState(src[0]);
  const [transitionstart,setTransitionStart]=useState(0);
  console.log("src----->", src);
    useEffect(() => {
      let count = 0;
      const srcSlider = () => {
        try {
          setCurrentSrc(src[count % src.length]);
          count++;
          if (count >= src.length) {
            count=0
          }
          setTransitionStart(count)
        } catch (err) {
          console.log("err in srcSlider---->", err);
        }
      };
      const intervalID = setInterval(srcSlider, 3000);
      return () => {
        clearInterval(intervalID);
      };
    }, []);

//   useEffect(() => {
//     let count = 0;
//     const slider=()=>{
//         try{
//             if(count==0){
               
//                 count++;
//                 setTransitionStart(false);
//             }
//             else{
//                 count=0;
//                 setTransitionStart(true);
//             }

//         }catch(err){
//             console.log("err in slider---->",err)
//         }
//     }
//     const intervalID = setInterval(slider, 3000);
//     return () => {
//       clearInterval(intervalID);
//     };
//   }, []);
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
    <div className="bg-yellow-500 flex justify-center  w-[50%] h-[60dvh] relative">
        
        {/* <Image
        src={src[0]}
        // fill="responsive"
        className={`bg-red-500  w-[100%] h-[100%]   object-contain translate-x-0 opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000  ${transitionstart==0?"translate-x-0 opacity-100 scale-100":"translate-x-[150%] opacity-0 scale-0 "} `}
      /> */}
    
      <Image
        src={src[0]}
        // fill="responsive"
        className={` object-contain  opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
      />
     
      <Image
        src={src[1]}
        // fill
        className={`   object-contain opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
        // className={`bg-red-500 absolute w-[100%] object-contain translate-x-[0px] opacity-100 scale-100   transition-all ease-in-out delay-300 duration-1000  ${transitionstart==1?"translate-x-0 opacity-100 scale-100":"translate-x-[100%] opacity-0 scale-0"}`}
      />
    
     <Image
        src={src[2]}
        // fill
        className={`bg-black  object-contain  opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
        // className={`bg-red-500 absolute w-[100%]  object-contain translate-x-[0px] opacity-100 scale-100   transition-all ease-in-out delay-300 duration-1000  ${transitionstart==2?"translate-x-0 opacity-100 scale-100":"translate-x-[100%] opacity-0 scale-0"}`}
      />
   
     
    
    
    {/* <div className="bg-red-500 w-[30%] h-[50%] absolute top-1/4">
    <Image
        src={src[1]}
        fill
        className={`bg-red-500 w-[100%] object-contain translate-x-[0px] opacity-100 scale-100   transition-all ease-in-out delay-300 duration-1000  ${transitionstart==1?"translate-x-0 opacity-100 scale-100":"translate-x-[100%] opacity-0 scale-0"}`}
      />
    
    </div>
    <div className="bg-blue-600 w-[30%] h-[50%] absolute top-1/4">
    <Image
        src={src[0]}
        // fill="responsive"
        className={`bg-red-500 w-[100%]  object-contain  translate-x-[0px] opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000  ${transitionstart==0?"translate-x-0 opacity-100 scale-100":"translate-x-[100%] opacity-0 scale-0"}`}
      />
    
    </div> */}
    </div>
  );
}

export default Carousel;
