import React from "react";
import Image from "next/image";
const LawyerCoach = () => {
  return (
    <div className="relative py-12 md:py-0">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] pb-20">
        <div className="flex gap-2 items-center md:inline-block">
          {" "}
          <div className=" border-b-2 border-b-orangeYellow border-l-2 border-l-orangeYellow w-40 md:w-7 md:h-40 mt-3"></div>
          <div className="font-Helvet font-normal text-2xl leading-[168%] md:translate-x-7 md:-translate-y-7 overflow-hidden md:inline-block">
            <p className="font-medium text-2xl sm:text-3xl lg:text-4xl md:-rotate-90 inline-block">
              05
            </p>
            <p className="inline-block"> ABOUT</p>
          </div>
        </div>
        <div className=" flex flew-row flex-wrap -mx-3 pt-6">
          <div className="w-full md:w-6/12 px-3">
            <div data-aos="zoom-in-down" className=" max-w-[559px] mx-auto">
              <Image
                src="/assets/image/lawyer.webp"
                width={559}
                height={574}
                className="w-full"
                alt="lawyer img"
              />
            </div>
          </div>
          <div className="w-full md:w-6/12 px-3 pt-6 md:pt-0 ">
            <div className="lg:ps-11">
              <h2
                data-aos="zoom-in-down"
                className="font-Helvet font-normal text-3xl sm:text-custom-4xl lg:text-custom-5xl leading-[128%] uppercase"
              >
                LAWYER <span className=" text-orangeYellow">&</span> DIVORCE
                COACH
              </h2>
              <h3
                data-aos="zoom-in-down"
                className="font-Helvet font-normal text-2xl sm:text-3xl lg:text-4xl leading-[128%] uppercase"
              >
                <span className=" text-orangeYellow">M</span>arc{" "}
                <span className=" text-orangeYellow">J</span>
                oachim <span className=" text-orangeYellow">h</span>ubrich
              </h3>
              <p
                data-aos="zoom-in-down"
                className="font-Helvet font-semibold text-lg md:text-xl leading-[140%] pt-4 md:pt-8"
              >
                About The Mindset Agency Coach
              </p>
              <p
                data-aos="zoom-in-down"
                className=" font-Poppins font-normal tex-sm sm:text-base leading-[160%] opacity-70 pt-4"
              >
                Marc J. Hubrich is the founder of the mindset agency
                <span className="lg:block">
                  {" "}
                  specializing in consulting services.
                </span>
              </p>
              <a
                href="#"
                className="bg-LinearBlue hover:bg-LinearBlue2 duration-300 group rounded-[63px] p-[1.7px] block  max-w-[350px] mt-8  "
              >
                <div className="bg-white  flex items-center gap-3 rounded-[63px] py-4 px-8">
                  <span className="bg-LinearBlue group-hover:bg-LinearBlue2 duration-300 textBg font-Inter font-medium text-base leading-[150%]">
                    Learn more about the agency
                  </span>
                  <span className="group-hover:translate-x-1 duration-300">
                    <Image src="/assets/svg/Arrow.svg" width={39} height={0} />
                  </span>
                </div>
              </a>
              <div className=" absolute md:end-0 -bottom-4 md:bottom-[10%] z-[-1]">
                <Image
                  src="/assets/svg/LawyerCoachSvg.svg"
                  width={738}
                  height={211}
                  className="w-full max-w-[600px] xl:max-w-[738px] "
                  alt="lawyerCoach"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerCoach;
