"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
function Carousel({ className, src, ImageWidth, ImageHeight }) {
  const [currentSrc, setCurrentSrc] = useState(src[0]);
  const [transitionstart, setTransitionStart] = useState(0);
  console.log("src----->", src);
  useEffect(() => {
    let count = 0;
    const srcSlider = () => {
      try {
        setCurrentSrc(src[count % src.length]);
        count++;
        if (count >= src.length) {
          count = 0;
        }
        setTransitionStart(count);
      } catch (err) {
        console.log("err in srcSlider---->", err);
      }
    };
    const intervalID = setInterval(srcSlider, 3000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  //   return (
  //     <div
  //     className={`${className}`}
  //     // className="bg-yellow-500 flex justify-center m-[12px]  w-[100%] h-[60dvh] overflow-hidden  relative"
  //     >
        // <Image
        //   src={src[0]}
        //   fill="responsive"
        //   //   className={`bg-green-500 object-contain opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
        //   className={`bg-red-500  object-contain translate-x-[0px] opacity-100 scale-100   transition-all ease-in-out delay-300 duration-1000  ${
        //     transitionstart == 0
        //       ? "translate-x-0 opacity-100 scale-100"
        //       : "translate-x-[100%] opacity-0 scale-0"
        //   }`}
        // />

        // <Image
        //   src={src[1]}
        //   fill
        //   //   className={`  object-contain  opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
        //   className={`bg-red-500  object-contain translate-x-[0px] opacity-100 scale-100   transition-all ease-in-out delay-300 duration-1000  ${
        //     transitionstart == 1
        //       ? "translate-x-0 opacity-100 scale-100"
        //       : "translate-x-[100%] opacity-0 scale-0"
        //   }`}
        // />

        // <Image
        //   src={src[2]}
        //   fill
        //   //   className={`bg-black object-contain  opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
        //   className={`bg-red-500  object-contain translate-x-[0px] opacity-100 scale-100   transition-all ease-in-out delay-300 duration-1000  ${
        //     transitionstart == 2
        //       ? "translate-x-0 opacity-100 scale-100"
        //       : "translate-x-[100%] opacity-0 scale-0"
        //   }`}
        // />
  //     </div>
  //   );
  console.log("transition start---->",transitionstart)
//   return (
//     <div className="bg-violet-500 w-[80%] h-[60vh] flex  overflow-visible">
//       <div className="bg-green-500 min-w-[100%] h-[100%] -translate-x-[0%]">
//         asfadfaf
//       </div>
//       <div className="bg-yellow-400 min-w-[100%] h-[100%] -translate-x-[0%]">ddddd</div>
//       <div className="bg-red-500 min-w-[100%] h-[100%] -translate-x-[0%]">eeee</div>
//     </div>
//   );
//0,1,2//total 3 rounds
//0--starting at 00%
//1--add 100% to each
//2--subract -200% from first and add 100% to remaing 2
//3--(again start the values) and reset to 00%
return (
    <div className="bg-violet-500 w-[80%] h-[60vh] flex  overflow-hidden">
      <div className={`bg-green-500 min-w-[100%] h-[100%] transition-all ease-in-out duration-1000  -translate-x-[${src.length-1==transitionstart?(transitionstart-1)*(-1*100):transitionstart==0?"00":transitionstart*100}%]`}>
      <Image
          src={src[0]}
          fill="responsive"
          //   className={`bg-green-500 object-contain opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
          className={`bg-red-500  object-contain `}
        />
      </div>
      <div className={`bg-yellow-400 min-w-[100%] h-[100%] transition-all ease-in-out duration-1000 -translate-x-[${src.length-1==transitionstart?transitionstart*100:transitionstart==0?"00":transitionstart*100}%]`}>
      <Image
          src={src[1]}
          fill
          //   className={`  object-contain  opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
          className={`bg-red-500  object-contain `}
          
        />
      </div>
      <div className={`bg-red-500 min-w-[100%] h-[100%]  transition-all ease-in-out duration-1000 -translate-x-[${src.length-1==transitionstart?transitionstart*100:transitionstart==0?"00":transitionstart*100}%]`}>

      <Image
          src={src[2]}
          fill
          //   className={`bg-black object-contain  opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
          className={`bg-red-500  object-contain `}
         
        />
      </div>
    </div>
  );
//0,1,2//total 3 rounds(length of image array)
//0--starting at 00%
//1--add 100% to each
//2--subract -200% from first and add 100% to remaing 2
//3--(again start the values) and reset to 00%
// return (
//     <div className="bg-violet-500 w-[80%] h-[60vh] flex  overflow-visible">
//       <div className={`bg-green-500 min-w-[100%] h-[100%] transition-all ease-in-out duration-1000 -translate-x-[-100%]`}>
//         asfadfaf
//       </div>
//       <div className={`bg-yellow-400 min-w-[100%] h-[100%] transition-all ease-in-out duration-1000 -translate-x-[200%]`}>ddddd</div>
//       <div className={`bg-red-500 min-w-[100%] h-[100%]  transition-all ease-in-out duration-1000 -translate-x-[200%]`}>eeee</div>
//     </div>
//   );
}

export default Carousel;
