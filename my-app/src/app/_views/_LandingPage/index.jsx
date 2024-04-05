import DelieveryPartnerImage from "@/public/delieveryPartnerTransparent.png";
import FastFoodImage from "@/public/fastFoodsTransparent.png";
import PeopleFoodImage from "@/public/peopleFoodTransparent.png";
import FoodInTableImage from "@/public/foodintable.jpeg";
import SingleFoodImage from "@/public/singlefood.jpeg";
import RestaurantImage from "@/public/restaurantImage.jpeg";
import WaiterServingFood from "@/public/waiterServingTransparent.png";
import RestaurantImageBus from "@/public/restaurantImageBus.jpeg";
import ContentFixedslide from "@/views/_LandingPage/ContentFixedSlide";
import DoubleArticle from "@/views/_LandingPage/DoubleSection";
// import CarVideo from "/carVideo.mp4"
// import CarVideo from "/public/sample_video.mp4"
import Carousel from "@/app/_commonComponents/_ui/carousel";
function LandingPage() {
  return (
    <>
      <DoubleArticle />
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
            WaiterServingFood
          ]}
          ImageWidth={"100%"}
          ImageHeight={"60vh"}
        />
      </div>
      {/* naggaro code sticky it */}
      <ContentFixedslide />
    </>
  );
}

export default LandingPage;
