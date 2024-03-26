import Image from "next/image";
import DelieveryPartnerImage from "@/public/delieveryPartnerTransparent.png";
function LandingPage() {
  return (
    <>
    <div className="bg-yellow-300  relative">
        <Image src={DelieveryPartnerImage}  className="bg-red-500 h-[50%] w-[100%] object-contain "/>
    </div>
    </>
  )
}

export default LandingPage