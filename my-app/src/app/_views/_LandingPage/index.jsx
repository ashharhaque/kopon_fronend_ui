import Image from "next/image";
import DelieveryPartnerImage from "@/public/delieveryPartnerTransparent.png";
function LandingPage() {
  return (
    <>
      <div className="bg-yellow-300 md:flex justify-around relative m-10">
        <article className="bg-pink-400 basis-[40%] text-center flex items-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          accusamus quos qui magni facilis quam ex quod numquam tenetur
          doloremque quas dignissimos, quasi beatae sunt earum inventore. Unde,
          similique molestias? Iure quis dolorem mollitia soluta ducimus,
          distinctio voluptas nobis! Magnam distinctio ex est. Maiores, voluptas
          velit illum suscipit ab perferendis asperiores eos facilis soluta
          aliquid accusantium doloribus ullam ut vero? Reprehenderit, recusandae
          sit</p>
        </article>
        <div className="relative  ">
        <Image
          src={DelieveryPartnerImage}
          className="bg-red-500 object-contain min-h-[100%] w-[100%] md:h-[30%]"
        />
        </div>
        
      </div>
    </>
  );
}

export default LandingPage;
