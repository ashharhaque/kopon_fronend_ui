import Image from "next/image";
import DelieveryPartnerImage from "@/public/delieveryPartnerTransparent.png";
import FastFoodImage from "@/public/fastFoodsTransparent.png";
import PeopleFoodImage from "@/public/peopleFoodTransparent.png";
import Carousel from "@/app/_commonComponents/_ui/carousel";
function LandingPage() {
  return (
    <>
      <div className="bg-yellow-300 md:flex justify-around relative m-10">
        <article className="bg-pink-400 basis-[40%] text-center flex items-center">
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
            className="bg-red-500 object-contain min-h-[100%] w-[100%] md:h-[30%]"
          />
        </div>
      </div>
      <div className="bg-yellow-300 md:flex md:flex-row-reverse justify-around relative m-10">
      <article className="bg-pink-400 basis-[40%] text-center flex items-center ">
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
            className="bg-red-500 object-contain min-h-[100%] w-[100%] md:h-[30%]"
          />
        </div>
       
      </div>
      <div className="bg-yellow-300 md:flex justify-around relative m-10">
        <article className="bg-pink-400 basis-[40%] text-center flex items-center">
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
            className="bg-red-500 object-contain min-h-[100%] w-[100%] md:h-[30%] "
          />
        </div>
      </div>
      <div>
        <Carousel/>
      </div>
    </>
  );
}

export default LandingPage;
