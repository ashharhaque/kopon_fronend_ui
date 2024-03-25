"use client";
import { useState } from "react";
import Image from "next/image";
// import KoponLogo from "./../../../public/Kopon_transparent.png"
import KoponLogo from "@/public/Kopon_transparent.png";
import InstagramIcon from "@/public/icons/instagram.svg";
import FaceBookIcon from "@/public/icons/facebook1.svg";
import YoutubeIcon from "@/public/icons/youtube-red.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";
import XIcon from "@/public/icons/twitter.svg";
import {
  MenuIcon,
  IconCross2,
  AdressIcon,
  CallIcon,
  EmailIcon,
  FaxMachine,
} from "@/icons/svgicon";

function layoutViews({ children }) {
  const [menuToggleOpen, setMenuToggleOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-emerald-50 to-teal-400   min-h-dvh justify-between ">
        <header className="flex flex-row justify-around h-[10dvh] relative bg-green-500">
          <Image
            // src={Logo}
            // src={"/logo.jpg"}
            src={KoponLogo}
            priority
            // height={50}
            // width={50}
            alt="logo image"
            className="bg-red-600 self-start h-[90%] w-[35%]  mt-1 object-cover"
          />

          {/* <nav
            className={`flex flex-col py-6 pr-4 clear-both  items-center w-[50%] mx-auto transition-all ease-in-out duration-700 ${menuToggleOpen?"translate-y-8  bg-yellow-400 ":"-translate-y-full invisible "}`}
          > */}
          {/* <h12 className="bg-red-600  ">QOPON</h12> */}
          <nav
            className={`bg-fuchsia-700 flex  flex-col py-6 pr-4  absolute top-full left-1/4 items-center w-[40%]  transition-all  ease-in-out duration-700 origin-top   md:flex md:flex-row md:self-stretch md:justify-around md:p-0 md:relative md:top-0 md:left-0 md:transition-none ${
              menuToggleOpen
                ? " bg-zinc-50 translate-y-[0%] md:bg-white "
                : "scale-y-0 invisible md:visible md:scale-y-100"
            }`}
          >
            <span
              className={`transition-all ease-in-out delay-75 ${
                menuToggleOpen
                  ? "-translate-y-3 md:translate-y-0"
                  : "-translate-y-full invisible"
              }md:transition-none md:translate-y-0`}
            >
              ABOUT US
            </span>
            <span
              className={`transition-all ease-in-out delay-100 ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }md:transition-none md:translate-y-0`}
            >
              FEATURES
            </span>
            <span
              className={` transition-all ease-in-out delay-150 ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }md:transition-none md:translate-y-0`}
            >
              TESTIMONIALS
            </span>
            <span
              className={`transition-all ease-in-out delay-200 ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }md:transition-none md:translate-y-0`}
            >
              HOME
            </span>
            <span
              className={`transition-all ease-in-out delay-300 ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }md:transition-none md:translate-y-0`}
            >
              BLOG
            </span>
          </nav>
          <div
            className=" pt-2 md:hidden"
            onClick={() => {
              console.log("on menu toggle--->");
              setMenuToggleOpen(!menuToggleOpen);
            }}
          >
            {menuToggleOpen ? (
              <IconCross2
                className={`transition-all delay-150 ${
                  menuToggleOpen ? "" : ""
                }`}
              />
            ) : (
              <MenuIcon className="" />
            )}

            {/* <IconCross2 className={`transition-all delay-150 ease-in-out${menuToggleOpen?"hidden":"visible"}`} />
           
              <MenuIcon className={`transition-all delay-150 ease-in-out ${!menuToggleOpen?"hidden":"visible"}`} /> */}
          </div>
        </header>
        <div className="h-[200dvh]">{children}</div>
        <footer className="bg-yellow-300 flex flex-col min-h-[40dvh]">
          <div className="bg-blue-500 min-h-[85%] flex flex-col md:flex-row  justify-around ">
            <div className="bg-red-500 p-3 text-center">
              <h3 className="">Company Name</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                iste reiciendis expedita unde tenetur impedit, culpa officiis,
                distinctio perspiciatis itaque perferendis laborum nesciunt!
              </p>
            </div>
            <div className="bg-pink-300 p-3 text-center">
              <h3>Products</h3>
              <ul>
                <li>SMART PHONE</li>
                <li>DESKTOP</li>
                <li>RANDMO TEXT</li>
                <li>NETALS</li>
              </ul>
            </div>
            <div className="bg-orange-400 p-3 text-center">
              <h3>Useful Link</h3>
              <ul>
                <li>Your account</li>
                <li>Become Affiliate</li>
                <li>Shipping Rate</li>
                <li>Help</li>
              </ul>
            </div>
            <div className="bg-teal-200 p-3 text-center">
              <h3>Contact</h3>
              <ul className="">
                <li className="bg-white relative">
                  <span>
                    <AdressIcon className="bg-red-600 inline-block h-[100%] absolute top-0 left-0" />
                    Adress-saket,saidulajayab,westend marg,saket
                  </span>
                </li>
                <li className="bg-pink-500 relative">
                  <span>
                    <CallIcon className="bg-pink-400 inline-block h-[100%] absolute top-0 left-0" />
                    Phone Number
                  </span>
                </li>
                <li className=" relative">
                  <span>
                    <EmailIcon className="bg-yellow-500 inline-block h-[100%] absolute top-0 left-0" />
                    Email
                  </span>
                </li>
                <li className="bg-green-500 relative">
                  <span>
                    <FaxMachine className="bg-blue-700 inline-block h-[100%] absolute top-0 left-0" />
                    Fax
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-row justify-around bg-green-400 min-h-[15%]">
            <ul className="flex ">
              <li className="text-center">Follow Us</li>
              <li className="bg-pink-500 h-10 w-10">
                <Image src={InstagramIcon} className="object-cover" />
              </li>
              <li className="bg-blue-500 h-10 w-10">
                <Image src={FaceBookIcon} className="object-cover" />
              </li>
              <li className="bg-white h-10 w-10">
                <Image src={YoutubeIcon} className="object-cover" />
              </li>
              <li className="bg-yellow-500 h-10 w-10">
                <Image src={XIcon} className="object-cover" />
              </li>
              <li className="bg-white h-10 w-10">
                <Image src={LinkedInIcon} className="object-cover" />
              </li>
            </ul>
           
          </div>
        </footer>
      </div>
    </>
  );
}

export default layoutViews;
