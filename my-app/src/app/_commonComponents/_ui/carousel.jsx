"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
function Carousel({ className, src, ImageWidth, ImageHeight }) {
  const [transitionstart, setTransitionStart] = useState(0);
  const [currentIndex,setCurrentIndex]=useState(0);
  // console.log("src----->", src);
  useEffect(() => {
    let count = 0;
    const srcSlider = () => {
      try {
        setCurrentIndex(count);
        count++;
        if (count ==src.length) {
          count = 0;
        }
        // setTransitionStart(count);
      } catch (err) {
        console.log("err in srcSlider---->", err);
      }
    };
    const intervalID = setInterval(srcSlider, 3000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

 
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
  // console.log("transition start---->", transitionstart);
console.log("currentIndex---->",currentIndex)
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
  // return (
  //     <div className=" w-[80%] h-[60vh] flex  overflow-hidden">
  //       <div className={`relative min-w-[100%] h-[100%] transition-all ease-in-out duration-1000  -translate-x-[${src.length-1==transitionstart?(transitionstart-1)*(-1*100):transitionstart==0?"00":transitionstart*100}%] ${transitionstart==0?"opacity-100":"opacity-0"}`}>
  //      <Image
  //           src={src[0]}
  //           fill="responsive"
  //           //   className={`bg-green-500 object-contain opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
  //           className={`  object-contain `}
  //         />
  //       </div>
  //       <div className={`relative min-w-[100%] h-[100%] transition-all ease-in-out duration-1000 -translate-x-[${src.length-1==transitionstart?transitionstart*100:transitionstart==0?"00":transitionstart*100}%] ${transitionstart==1?"opacity-100":"opacity-0"}`}>
        // <Image
        //     src={src[1]}
        //     fill
        //     //   className={`  object-contain  opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
        //     className={` object-contain `}

        //   />
  //       </div>
  //       <div className={`relative min-w-[100%] h-[100%]  transition-all ease-in-out duration-1000 -translate-x-[${src.length-1==transitionstart?transitionstart*100:transitionstart==0?"00":transitionstart*100}%] ${transitionstart==2?"opacity-100":"opacity-0"}`}>

        // <Image
        //     src={src[2]}
        //     fill
        //     //   className={`bg-black object-contain  opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
        //     className={`  object-contain `}

        //   />
  //       </div>
  //     </div>
  //   );
  //0,1,2//total 3 rounds(length of image array)
  //0//transition start=0//add 0% to each and 300% to third child(first child view)//1--0%,2--0%,3-300%
  //1//tranisitionStart=1//add 100% to each and subtract 200% from third child (second child view)//1--100%,2--100%,3--100%
  //2//transitionstart=2//add 100% to remaing 2 and subract -200% from first and //(third child view)//1-- -100%,2--200%,3--200%
  //3///transitionstart=3//add 100% to each and subtract 200% from second//1--00%,2--0%,3--300%
  //repetition start
  //4//transitionTime=4//add 100% to each and subtract 200% from third
  //5//transitionTime=5//add 100% to each and subtract 200% from first
  //6//transitionTime=6//add 100% to each and subtract 200% from second child
  
  //current index---visible
  //image index==currentIndex-1--->
  return (
    <div className="bg-violet-500 w-[80%] h-[60vh] flex  ">
      <div
        className={`bg-green-500 relative min-w-[100%] h-[100%] transition-all ease-in-out duration-1000  
        ${currentIndex==0?"opacity-100":currentIndex-0==2?`-translate-x-[-${(src.length-1)*100}%]`:`-translate-x-[${currentIndex*100}%]`}
        `}
      >
        <Image
          src={src[0]}
          fill="responsive"
          //   className={`bg-green-500 object-contain opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
          className={`  object-contain `}
        />
      </div>
      <div
        className={`bg-yellow-400 relative min-w-[100%] h-[100%] transition-all ease-in-out duration-1000 -translate-x-0
         
        `}
      >
         <Image
            src={src[1]}
            fill
            //   className={`  object-contain  opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
            className={` object-contain `}

          />
      </div>
      <div
        className={`bg-red-500 relative min-w-[100%] h-[100%]  transition-all ease-in-out duration-1000 
        -translate-x-0
         ${src.length-1==2 && currentIndex==0?`-translate-x-[${(src.length)*100}%]`:'translate-x-0'}
        `}
      >
         <Image
            src={src[2]}
            fill
            //   className={`bg-black object-contain  opacity-100 scale-100  transition-all ease-in-out delay-300 duration-1000 `}
            className={`  object-contain `}

          />
      </div>
      {/* <div className={`bg-red-500 min-w-[100%] h-[100%]  transition-all ease-in-out duration-1000 -translate-x-[300)}%]`}>eeee</div> */}
    </div>
  );
}

export default Carousel;
