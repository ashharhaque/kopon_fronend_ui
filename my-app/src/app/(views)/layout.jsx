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
      <div className="flex flex-col bg-gradient-to-b from-emerald-50 to-emerald-100   min-h-dvh justify-between ">
        <header className="flex flex-row justify-around h-[10dvh] relative ">
          <Image
            // src={Logo}
            // src={"/logo.jpg"}
            src={KoponLogo}
            priority
            // height={50}
            // width={50}
            alt="logo image"
            className=" self-start h-[90%] w-[35%]  mt-1 object-cover"
          />

          {/* <nav
            className={`flex flex-col py-6 pr-4 clear-both  items-center w-[50%] mx-auto transition-all ease-in-out duration-700 ${menuToggleOpen?"translate-y-8  bg-yellow-400 ":"-translate-y-full invisible "}`}
          > */}
          {/* <h12 className="bg-red-600  ">QOPON</h12> */}
          <nav
            className={` flex  flex-col py-6 pr-4  absolute top-full left-1/4 items-center w-[40%]  transition-all  ease-in-out duration-700 origin-top   md:flex md:flex-row md:self-stretch md:justify-around md:p-0 md:relative md:top-0 md:left-0 md:transition-none ${
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
        <footer className="flex flex-col min-h-[40dvh]">
          <div className="min-h-[85%] flex flex-col md:flex-row  justify-around ">
            <div className=" p-3 flex flex-col gap-5 text-center basis-[20%] ">
              <h3 className="">Company Name</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                iste reiciendis expedita unde tenetur impedit, culpa officiis,
                distinctio perspiciatis itaque perferendis laborum nesciunt!
              </p>
            </div>
            <div className=" flex flex-col gap-5 p-3 text-center">
              <h3 className="">Products</h3>
              <ul>
                <li className=" group/underline">
                  <span>SMART PHONE</span>
                  <p className="underline-custom"></p>
                </li>
                <li className="group/underline">
                  <span>DESKTOP</span>
                  <p className="underline-custom"></p>
                </li>
                <li className="group/underline">
                  <span>RANDMO TEXT</span>
                  <p className="underline-custom"></p>
                </li>
                <li className="group/underline">
                  <span>NETALS</span>
                  <p className="underline-custom"></p>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col gap-5 p-3 text-center">
              <h3>Useful Link</h3>
              <ul>
                <li className="group/underline">
                  <span>Your account</span>
                  <p className="underline-custom"></p>
                </li>
                <li className="group/underline">
                  <span>Become Affiliate</span>
                  <p className="underline-custom"></p>
                </li>
                <li className="group/underline">
                  <span>Shipping Rate</span>
                  <p className="underline-custom"></p>
                </li>
                <li className="group/underline">
                  <span>Help</span>
                  <p className="underline-custom"></p>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col gap-5 p-3 text-center">
              <h3>Contact</h3>
              <ul className="">
                <li className="flex flex-col text-wrap">
                  <span>
                    <AdressIcon className=" inline-block h-[100%]" />
                  </span>
                  <span className="text-wrap whitespace-normal break-words">
                    Adress-saket,saidulajayab,aafasdfafafasdfas,fewerwrwerqweraa
                  </span>
                </li>
                <li className="flex flex-col">
                  <span>
                    <CallIcon className="inline-block h-[100%] " />
                  </span>

                  <span>Phone Number</span>
                </li>
                <li className="flex flex-col ">
                  <span>
                    <EmailIcon className="inline-block h-[100%] " />
                  </span>
                  <span>Email</span>
                </li>
                <li className=" flex flex-col">
                  <span>
                    <FaxMachine className=" inline-block h-[100%] " />
                  </span>
                  <span>Fax</span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-col py-5 justify-around  min-h-[15%]">
            <div className="text-center m-2 md:m-3 flex justify-center items-center">
              Follow Us
            </div>

            <ul className="flex flex-wrap justify-center">
              <li className=" h-10 w-10 m-2 md:m-3">
                <Image
                  src={InstagramIcon}
                  className="object-cover grayscale-[60%] transition-all ease-in-out duration-75 hover:grayscale-0 hover:-translate-y-3"
                />
              </li>
              <li className=" h-10 w-10 m-2 md:m-3 ">
                <Image
                  src={FaceBookIcon}
                  className="object-cover grayscale-[60%] transition-all ease-in-out duration-75 hover:grayscale-0 hover:-translate-y-3"
                />
              </li>
              <li className=" h-10 w-10 m-2 md:m-3">
                <Image
                  src={YoutubeIcon}
                  className="object-cover grayscale-[60%] transition-all ease-in-out duration-75 hover:grayscale-0 hover:-translate-y-3"
                />
              </li>
              <li className="h-10 w-10 m-2 md:m-3">
                <Image
                  src={XIcon}
                  className="object-cover grayscale-[60%] transition-all ease-in-out duration-75 hover:grayscale-0 hover:-translate-y-3"
                />
              </li>
              <li className="h-10 w-10 m-2 md:m-3">
                <Image
                  src={LinkedInIcon}
                  className="object-cover grayscale-[60%] transition-all ease-in-out duration-75 hover:grayscale-0 hover:-translate-y-3"
                />
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default layoutViews;
