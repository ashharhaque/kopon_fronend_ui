"use client"
import { Hind_Madurai } from "next/font/google";
import { useState } from "react";
function layoutViews({ children }) {
  const [menuToggleOpen,setMenuToggleOpen]=useState(false);
  return (
    <>
      <div className="flex flex-col bg-purple-600 min-h-[100dvh] justify-between">
        <header className="bg-green-700">
          <div className="float-right pt-2" onClick={()=>{
            console.log("on menu toggle--->");
            setMenuToggleOpen(true);
          }}>
            <svg
              class="feather feather-menu"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </div>
          <nav className={`flex flex-col items-end py-2 pr-1 clear-both ${menuToggleOpen?"":"hidden"}`}>
            <span>ABOUT US</span>
            <span>FEATURES</span>
            <span>TESTIMONIALS</span>
            <span>HOME</span>
            <span>BLOG</span>
          </nav>
        </header>
        <div className="">{children}</div>
        <footer className="bg-blue-700">footer</footer>
      </div>
    </>
  );
}

export default layoutViews;
