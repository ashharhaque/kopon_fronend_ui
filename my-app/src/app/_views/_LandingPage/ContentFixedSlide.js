
import FastFoodAll from "@/public/fastFoodsAll.jpeg";
import ContentWithBgImg from "@/ui/contentWithBgImg";
function ContentFixedSlide() {
  return (
    <div className="flex flex-col ">
    <h1 className="bg-yellow-500 flex px-[300px] sticky top-1/3 font-bold text-2xl">Ashhar</h1>
    <div className="w-[100%] aspect-video ">
      <ContentWithBgImg className="bg-blue-300 flex  flex-col justify-center w-[100%] aspect-video ">
        <h1 className="sticky top-1/3  flex justify-center items-center font-bold text-2xl">
          Background image component is created
        </h1>
      </ContentWithBgImg>
    </div>

    <div className="w-[100%] aspect-video ">
      <ContentWithBgImg className="bg-red-400 flex  flex-col justify-center w-[100%] h-[100%]  grayscale-100">
      <h1 className="sticky top-1/3  flex justify-center items-center font-bold text-2xl">
          Background image component is created
        </h1>
      </ContentWithBgImg>
    </div>

    <div className="w-[100%] aspect-video ">
      <ContentWithBgImg className="bg-green-300 flex  flex-col justify-center w-[100%] h-[100%] grayscale-100">
      <h1 className="sticky top-1/3  flex justify-center items-center font-bold text-2xl">
          Background image component is created
        </h1>
      </ContentWithBgImg>
    </div>
  </div>
  )
}

export default ContentFixedSlide