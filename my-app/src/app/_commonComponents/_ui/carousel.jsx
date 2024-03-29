"use client"
import { useState,useEffect } from "react";
import Image from "next/image";
function Carousel({className,src}) {
  return (
    <div className={`${className}]`}>
        <Image
            src={src[0]}
            className="w-[100%] bg-yellow-400 object-cover"
        />
    </div>
  )
}

export default Carousel