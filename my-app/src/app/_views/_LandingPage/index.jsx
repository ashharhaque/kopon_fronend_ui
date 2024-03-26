import Image from "next/image";
import CouponImage from "@/public/coupon_image.jpeg";
function LandingPage() {
  return (
    <>
    <div className="h-[40dvh] w-[100dvw] relative">
        <Image src={CouponImage} className=" object-cover"/>
    </div>
    </>
  )
}

export default LandingPage