"use client"
import { Hind_Madurai } from "next/font/google";
import { useState } from "react";
function layoutViews({ children }) {
  const [menuToggleOpen,setMenuToggleOpen]=useState(false);
  return (
    <>
      <div className="flex flex-col bg-purple-600 min-h-[100dvh] justify-between ">
        <header className="bg-green-700">
          <div className="float-right pt-2" onClick={()=>{
            console.log("on menu toggle--->");
            setMenuToggleOpen(!menuToggleOpen);
          }}>
            <svg
              className="feather feather-menu"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </div>
          <nav className={`flex flex-col  items-end py-6 pr-4 clear-both h-5`}>
            <span className={`transition-all ease-in-out delay-75 ${menuToggleOpen?"-translate-y-3 " : "-translate-y-full invisible"}`}>ABOUT US</span>
            <span className={`transition-all ease-in-out delay-100 ${menuToggleOpen?"-translate-y-3 " : "-translate-y-full invisible"}`}>FEATURES</span>
            <span className={`transition-all ease-in-out delay-150 ${menuToggleOpen?"-translate-y-3 " : "-translate-y-full invisible"}`}>TESTIMONIALS</span>
            <span className={`transition-all ease-in-out delay-200 ${menuToggleOpen?"-translate-y-3 " : "-translate-y-full invisible"}`}>HOME</span>
            <span className={`transition-all ease-in-out delay-300 ${menuToggleOpen?"-translate-y-3 " : "-translate-y-full invisible"}`}>BLOG</span>
          </nav>
        </header>
        <div className="">{children}</div>
        <footer className="bg-blue-700">footer</footer>
      </div>
    </>
  );
}

export default layoutViews;
