"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "./../../../public/logo.jpg";
// import { IconCross2 } from "../_components/_icon/_socialMediaIcons/svgicon";
import { IconCross2, MenuIcon } from "@/icons/_socialMediaIcons/svgicon";
function layoutViews({ children }) {
  const [menuToggleOpen, setMenuToggleOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col bg-purple-600  min-h-dvh justify-between ">
        <header className="flex flex-row justify-between bg-green-700 h-[10dvh] relative ">
          <Image
            src={Logo}
            // src={"/logo.jpg"}
            priority
            height={50}
            width={50}
            alt="logo image"
            className="bg-red-600 my-3 self-start ]"
          />

          {/* <nav
            className={`flex flex-col py-6 pr-4 clear-both  items-center w-[50%] mx-auto transition-all ease-in-out duration-700 ${menuToggleOpen?"translate-y-8  bg-yellow-400 ":"-translate-y-full invisible "}`}
          > */}
          <h1 className="bg-red-600">QOPON</h1>
          <nav
            className={`flex flex-col py-6 pr-4 self-start absolute top-full left-1/4 items-center w-[40%]  transition-all  ease-in-out duration-700 origin-top md:bg-fuchsia-700  md:flex md:flex-row md:self-stretch md:justify-around md:relative md:top-0 md:left-0 md:transition-none ${
              menuToggleOpen
                ? " bg-yellow-400 translate-y-[0%] md:bg-white "
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
              className={`transition-all ease-in-out delay-150 ${
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
        <div className="">{children}</div>
        <footer className="bg-blue-700">footer</footer>
      </div>
    </>
  );
}

export default layoutViews;
