"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import DelieveryPartnerImage from "@/public/delieveryPartnerTransparent.png";
import FastFoodImage from "@/public/fastFoodsTransparent.png";
import PeopleFoodImage from "@/public/peopleFoodTransparent.png";
import WaiterServingFood from "@/public/waiterServingTransparent.png";

// import CarVideo from "/carVideo.mp4"
// import CarVideo from "/public/sample_video.mp4"

const DoubleArticle = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const observedElementRef = useRef(null);
  const observedElementRefTwo = useRef(null);
  const observedElementRefOne = useRef(null);
  const handleIntersection = async (entries, setVisibility) => {
    console.log("inside handleIntersection---->");
    try {
      entries.map((entry, idx) => {
        console.log("each entry of entries---->", entry.isIntersecting);
        console.log("intersectio ratio---->", entry);
        if (entry.isIntersecting) {
          setVisibility(true);
        } else {
          setVisibility(false);
        }
      });
    } catch (err) {
      console.log("error in interSection api---->", err);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (e) => handleIntersection(e, setIsVisible),
      {
        threshold: 0.5,
      }
    );
    const observerOne = new IntersectionObserver(
      (e) => handleIntersection(e, setIsVisibleOne),
      {
        threshold: 0.5,
      }
    );

    const observerTwo = new IntersectionObserver(
      (e) => handleIntersection(e, setIsVisibleTwo),
      {
        threshold: 0.5,
      }
    );

    observer.observe(observedElementRef.current);
    observerTwo.observe(observedElementRefTwo.current);
    observerOne.observe(observedElementRefOne.current);
  }, []);

  return (
    <>
      <div
        className=" md:flex justify-around relative m-10"
        ref={observedElementRefOne}
      >
        <article
          className={` basis-[40%] text-center flex items-center md:transition-all md:ease-in-out  md:duration-1000  ${
            isVisibleOne
              ? "bg-red-300 md:translate-x-0 md:opacity-100"
              : "md:translate-x-[-200%] md:opacity-0"
          } `}
        >
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
      <div
        className=" md:flex md:flex-row-reverse justify-around relative m-10 overflow-hidden"
        ref={observedElementRefTwo}
      >
        <article
          className={` basis-[40%] text-center flex items-center md:transition-all md:ease-in-out  md:duration-1000 ${
            isVisibleTwo
              ? "bg-red-300 md:translate-x-0 md:opacity-100"
              : "md:translate-x-[200%] md:opacity-0"
          } `}
        >
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
      <div
        className="bg-yellow-300 md:flex justify-around relative m-10 "
        ref={observedElementRef}
      >
        <article
          className={` basis-[40%] text-center flex items-center md:transition-all md:ease-in-out  md:duration-1000  ${
            isVisible
              ? "bg-red-300 md:translate-x-0 md:opacity-100"
              : "md:translate-x-[-200%] md:opacity-0"
          } `}
        >
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
            src={WaiterServingFood}
            className="object-contain min-h-[100%] w-[100%] md:h-[30%] "
          />
        </div>
      </div>
    </>
  );
};

export default DoubleArticle;
