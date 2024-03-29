"use client"
import { useState,useEffect } from "react";
import Image from "next/image";
function Carousel({className,src}) {
    const [currentSrc,setCurrentSrc]=useState(src[0])
    useEffect(()=>{
        let count=0
        const srcSlider=()=>{
            try{
                // console.log("inside srcSlider count--->",count);
                // console.log("src length---->",src.length);
                // console.log("src on particular count----->",count%src.length);
                setCurrentSrc(src[count%src.length])
                count++
                if(count>=src.length){
                    count=0
                }
            }catch(err){
                console.log("err in srcSlider---->",err)
            }
        }
        const intervalID = setInterval(srcSlider, 3000);
        return () => {
            clearInterval(intervalID);
          };
    },[])
  return (
    <div className={`${className}]`}>
        <Image
            // src={src[0]}
            src={currentSrc}

            className="bg-yellow-400 object-cover"
        />
    </div>
  )
}

export default Carousel