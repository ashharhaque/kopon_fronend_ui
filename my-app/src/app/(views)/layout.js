"use client";
import { Hind_Madurai } from "next/font/google";
import { useState } from "react";
// import { IconCross2 } from "../_components/_icon/_socialMediaIcons/svgicon";
import { IconCross2, MenuIcon } from "@/icons/_socialMediaIcons/svgicon";
function layoutViews({ children }) {
  const [menuToggleOpen, setMenuToggleOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col bg-purple-600  min-h-dvh justify-between ">
        <header className="bg-green-700 h-[10dvh]">
          <div
            className="float-right pt-2"
            onClick={() => {
              console.log("on menu toggle--->");
              setMenuToggleOpen(!menuToggleOpen);
            }}
          >
            {menuToggleOpen?<IconCross2 />: <MenuIcon />}    
          </div>

          <nav
            className={`flex flex-col py-6 pr-4 clear-both bg-yellow-400 w-[50%] items-center mx-auto`}
          >
            <span
              className={`transition-all ease-in-out delay-75 ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }`}
            >
              ABOUT US
            </span>
            <span
              className={`transition-all ease-in-out delay-100 ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }`}
            >
              FEATURES
            </span>
            <span
              className={`transition-all ease-in-out delay-150 ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }`}
            >
              TESTIMONIALS
            </span>
            <span
              className={`transition-all ease-in-out delay-200 ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }`}
            >
              HOME
            </span>
            <span
              className={`transition-all ease-in-out delay-300 ${
                menuToggleOpen
                  ? "-translate-y-3 "
                  : "-translate-y-full invisible"
              }`}
            >
              BLOG
            </span>
          </nav>
        </header>
        <div className="">{children}</div>
        <footer className="bg-blue-700">footer</footer>
      </div>
    </>
  );
}

export default layoutViews;
