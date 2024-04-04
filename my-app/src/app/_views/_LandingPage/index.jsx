"use client"
import {useRef,useEffect} from "react";
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
  const observedElementRef=useRef(null);
  const handleIntersection=async(entries)=>{
    try{
      entries.map((entry,idx)=>{
        console.log("each entry of entries---->",entry);
      })
    }catch(err){
      console.log("error in interSection api---->",err)
    }
  }
  useEffect(()=>{
    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(observedElementRef.current)
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
      <div className=" md:flex justify-around relative m-10" ref={observedElementRef}>
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
