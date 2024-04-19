"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MyNavArry } from "./common/Helper";

const NavMarc = () => {
  const [first, setfirst] = useState(false);
  function setopen() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }

  return (
    <nav className="container max-w-[1140px] 2xl:max-w-[1320px] flex justify-between items-center pt-6 ">
      <a href="#">
        <Image
          src="/assets/image/Logo.webp"
          width={146}
          height={53}
          alt="Logo"
        />
      </a>
      <div className="flex ">
        <ul
          className={`${
            first ? "right-0" : "right-[-100%]"
          } flex flex-col sm:flex-row  gap-6 sm:gap-7 md:gap-custom-4xl max-[1023px]:w-full h-full fixed  bg-opacity-80 bg-white top-0 items-center justify-center sm:h-unset sm:static sm:bg-transparent sm:justify-end z-40 transition-all ease-linear duration-300 `}
        >
          {MyNavArry.map((event, index) => (
            <li key={index}>
              <a
                href={event.ref}
                onClick={setopen}
                className="font-Helvet font-normal text-base text-black hover:text-[#8703C5] ease-linear duration-500 lg:text-white leading-[150%]"
              >
                {event.link}
              </a>
            </li>
          ))}
          <a
            href="#"
            className=" bg-LinearBlue hover:bg-LinearBlue2 font-Inter font-medium text-base text-white leading-[150%] py-4 px-7 "
          >
            Book consultation now
          </a>
        </ul>
        <div onClick={setopen}>
          {first ? (
            <div className="flex sm:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer  ">
              <span className=" bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[11px]"></span>
              <span className=" bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-[56deg] bottom-[8px]"></span>
            </div>
          ) : (
            <div className=" flex sm:hidden flex-col  z-50 justify-between w-[24px] h-[24px] cursor-pointer relative ">
              <span className=" bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
              <span className=" bg-black  w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
              <span className=" bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavMarc;
