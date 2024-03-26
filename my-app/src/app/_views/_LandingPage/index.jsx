import Image from "next/image";
import CouponImage from "@/public/coupon_image_transparent.png";
function LandingPage() {
  return (
    <>
    <div className="bg-yellow-300 h-[40dvh] w-[100%] relative">
        <Image src={CouponImage} style={{
            "objectFit":"cover"
        }} className="bg-red-500"/>
    </div>
    </>
  )
}

export default LandingPage