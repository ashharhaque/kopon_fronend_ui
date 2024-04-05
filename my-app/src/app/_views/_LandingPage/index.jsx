"use client"
import {useRef,useEffect,useState} from "react";
import Image from "next/image";
import DelieveryPartnerImage from "@/public/delieveryPartnerTransparent.png";
import FastFoodImage from "@/public/fastFoodsTransparent.png";
import PeopleFoodImage from "@/public/peopleFoodTransparent.png";
import FoodInTableImage from "@/public/foodintable.jpeg";
import SingleFoodImage from "@/public/singlefood.jpeg";
import RestaurantImage from "@/public/restaurantImage.jpeg";
import RestaurantImageBus from "@/public/restaurantImageBus.jpeg";
import ContentFixedslide from "@/views/_LandingPage/ContentFixedSlide"
// import CarVideo from "/carVideo.mp4"
// import CarVideo from "/public/sample_video.mp4"
import Carousel from "@/app/_commonComponents/_ui/carousel";
function LandingPage() {
  const [isVisible,setIsVisible]=useState(false);
  const observedElementRef=useRef(null);
  const handleIntersection=async(entries)=>{
    console.log("inside handleIntersection---->")
    try{
      entries.map((entry,idx)=>{
        console.log("each entry of entries---->",entry.isIntersecting);
        console.log("intersectio ratio---->",entry)
        if(entry.isIntersecting){
          // entry.target.className="bg-red-500   basis-[40%] text-center flex items-center transition-all duration-1000 translate-x-0 opacity-100"
         setIsVisible(true)
        }else{
          setIsVisible(false)
        }
        // entry.target.className="bg-red-500   basis-[40%] text-center flex items-center transition-all duration-1000 translate-x-[20px] "

      })
    }catch(err){
      console.log("error in interSection api---->",err)
    }
  }
  useEffect(()=>{
    const observer = new IntersectionObserver(handleIntersection,{
      // root:null,

      // rootMargin:"-300px",
      threshold:.5
    });
   
      observer.observe(observedElementRef.current)
    
    // return observer.disconnect()
    // return () => {
    //   if(observedElementRef.current)
    //   observer.unobserve(observedElementRef.current);
    // }
  },[])
  return (
    <>
      <div className=" md:flex justify-around relative m-10">
        <article className=" basis-[40%] text-center flex items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            accusamus quos qui magni facilis quam ex quod numquam tenetur
            doloremque quas dignissimos, quasi beatae sunt earum inventore.
            Unde, similique molestias? Iure quis dolorem mollitia soluta
            ducimus, distinctio voluptas nobis! Magnam distinctio ex est.
            Maiores, voluptas velit illum suscipit ab perferendis asperiores eos
            facilis soluta aliquid accusantium doloribus ullam ut vero?
            Reprehenderit, recusandae sit
          </p>
        </article>
        <div className="relative  ">
          <Image
            src={DelieveryPartnerImage}
            className=" object-contain min-h-[100%] w-[100%] md:h-[30%]"
          />
        </div>
      </div>
      <div className=" md:flex md:flex-row-reverse justify-around relative m-10">
        <article className=" basis-[40%] text-center flex items-center ">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            accusamus quos qui magni facilis quam ex quod numquam tenetur
            doloremque quas dignissimos, quasi beatae sunt earum inventore.
            Unde, similique molestias? Iure quis dolorem mollitia soluta
            ducimus, distinctio voluptas nobis! Magnam distinctio ex est.
            Maiores, voluptas velit illum suscipit ab perferendis asperiores eos
            facilis soluta aliquid accusantium doloribus ullam ut vero?
            Reprehenderit, recusandae sit
          </p>
        </article>
        <div className="relative  ">
          <Image
            src={FastFoodImage}
            className=" object-contain min-h-[100%] w-[100%] md:h-[30%]"
          />
        </div>
      </div>
      <div className="bg-yellow-300 md:flex justify-around relative m-10 " ref={observedElementRef} >
        <article  className={` basis-[40%] text-center flex items-center md:transition-all md:ease-in-out  md:duration-1000 md:translate-x-[-200%] ${isVisible?"bg-red-300 md:translate-x-0 md:opacity-100":"md:translate-x-[-200%] md:opacity-0"} `}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            accusamus quos qui magni facilis quam ex quod numquam tenetur
            doloremque quas dignissimos, quasi beatae sunt earum inventore.
            Unde, similique molestias? Iure quis dolorem mollitia soluta
            ducimus, distinctio voluptas nobis! Magnam distinctio ex est.
            Maiores, voluptas velit illum suscipit ab perferendis asperiores eos
            facilis soluta aliquid accusantium doloribus ullam ut vero?
            Reprehenderit, recusandae sit
          </p>
        </article>
        <div className="relative  ">
          <Image
            src={PeopleFoodImage}
            className="object-contain min-h-[100%] w-[100%] md:h-[30%] "
          />
        </div>
      </div>
      <div className="flex justify-center bg-fuchsia-500 my-4">
        <Carousel
          className="w-[80%] h-[60vh] flex "
          src={[
            DelieveryPartnerImage,
            FastFoodImage,
            PeopleFoodImage,
            FoodInTableImage,
            SingleFoodImage,
            RestaurantImage,
            RestaurantImageBus,
          ]}
          ImageWidth={"100%"}
          ImageHeight={"60vh"}
        />
      </div>
      {/* naggaro code sticky it */}
      <ContentFixedslide/>
    </>
  );
}

export default LandingPage;
