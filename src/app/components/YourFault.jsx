import React from "react";
import Image from "next/image";
import { MyMapYourSectionOne, MyMapYourSectionTwo } from "./common/Helper";
import ConsultationLink from "./common/ConsultationLink";

const YourFault = () => {
  return (
    <div className="pb-12 md:py-36 relative">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] ">
        <div className="max-w-[409px]  absolute right-0 top-10 z-[-1] ">
          {" "}
          <Image
            src="/assets/svg/Your.svg"
            width={409}
            height={207}
            alt="your"
            className="max-w-[200px] sm:max-w-[409px] w-full max-h-[200px] sm:max-h-[294px]"
          />
        </div>
        <div className=" flex items-center gap-2 md:inline-block md:absolute top-[-10%] lg:top-[-18%]  translate-x-3 py-5 md:py-0 ">
          <p className=" md:inline font-Poppins font-light text-lg sm:text-xl leading-[170%] vericaltext -rotate-90 md:rotate-180 md:-translate-x-4">
            MJH
          </p>
          <div className=" border-b-2 border-b-orangeYellow md:border-l-2 md:border-l-orangeYellow w-20 sm:w-40 md:w-7 md:h-40 lg:h-72  md:mt-3"></div>
          <div className="font-Helvet font-normal text-2xl leading-[128%] md:leading-[168%] md:translate-x-7 md:-translate-y-7 md:overflow-hidden flex md:inline-block">
            <p className="font-medium text-2xl sm:text-3xl md:text-custom-4xl  md:-rotate-90 md:inline-block ">
              01
            </p>
            <p className="md:inline-block uppercase"> fault</p>
          </div>
        </div>
        <div className=" flex flex-row flex-wrap -mx-3 items-center justify-between ">
          <div className="w-full sm:w-6/12 lg:w-7/12 px-3">
            <div className="flex flex-col  sm:items-end justify-end ">
              <div data-aos="zoom-in-down" className="text-start">
                <p
                  className="font-Helvet font-normal text-5xl lg:text-6xl leading-[128%]
              "
                >
                  IT'S NOT
                </p>
                <p className="font-Helvet font-normal text-5xl lg:text-6xl leading-[128%] md:pl-16">
                  <span className="text-[#F77B0B]">YOUR </span>FAULT!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-6/12 lg:w-5/12 px-3 pt-6 sm:pt-0">
            <div data-aos="zoom-in-down" className="flex sm:justify-center">
              <p className="font-Helvet font-normal text-sm sm:text-base leading-[170%] max-w-[288px] text-black duration-300 hover:text-white relative before:absolute before:h-[90%] before:w-[2px] before:left-[-6px] lg:before:-left-4 before:top-1 before:bg-[#9800B0] before:hover:w-[110%]  before:duration-300 ease-linear before:hover:-z-30">
                It's not your fault for not knowing how to let go of the partner
                who no longer made you feel special.
              </p>
            </div>
          </div>
        </div>
        <h2 className=" font-Helvet font-medium text-base sm:text-lg md:text-xl leading-[140%] text-center pt-7 sm:pt-10 md:pt-14 ">
          How would you know when you are busy with completely different things
          at the moment:
        </h2>
      </div>
      <div className="bg-[url('../../public/assets/image/fault.webp')] max-md:bg-cover bg-size bg-center  bg-no-repeat my-7 sm:my-10 md:my-14">
        <div className=" container  max-w-[1140px] 2xl:max-w-[1320px] ">
          <div className=" flex flex-row flex-wrap -mx-auto md:justify-end">
            {MyMapYourSectionOne.map((props, index) => (
              <div
                key={index}
                className=" w-full sm:w-4/12 lg:w-3/12 px-3 bg-[#003E92] bg-opacity-[30%] relative inset-0 hover:bg-opacity-100 duration-300 ease-linear "
              >
                <div className={`${props.class}`}>
                  <p
                    className={`${props.classname} font-Poppins font-normal text-base leading-[160%] text-white  `}
                  >
                    {props.Phara}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex flex-row flex-wrap -mx-auto mt-6">
            {MyMapYourSectionTwo.map((props, index) => (
              <div
                key={index}
                className=" w-full sm:w-4/12 lg:w-3/12 px-3 bg-[#003E92] bg-opacity-[30%] relative inset-0 hover:bg-opacity-100 duration-300 ease-linear    "
              >
                <div className={`${props.class}`}>
                  <p
                    className={`${props.classname} font-Poppins font-normal text-base leading-[160%] text-white  `}
                  >
                    {props.PharaOne}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className=" font-Poppins font-normal text-sm sm:text-base leading-[160%] text-center">
        {" "}
        You are not alone! Numerous women before you stood exactly at this
        point, where you are now.
      </p>
      <div className="flex justify-center  pt-5">
        {" "}
        <ConsultationLink link="Book a non-binding initial consultation now" />
      </div>
    </div>
  );
};

export default YourFault;
