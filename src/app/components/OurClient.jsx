"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { Clients } from "./common/Helper";
const OurClient = () => {
  return (
    <div id="Benifits" className="pb-12 md:py-24 lg:py-32">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] relative">
        <div className="inline-flex justify-center items-center gap-2 md:inline-block md:absolute right-[6%] top-[-36%] xl:top-[-34%] translate-x-6 py-5 md:py-0">
          <p className="md:inline font-Poppins font-light text-lg sm:text-xl leading-[170%] vericaltext -rotate-90 md:rotate-180 md:translate-x-3">
            MJH
          </p>
          <div className="border-b-2 border-b-orangeYellow md:border-r-2 md:border-r-orangeYellow w-40 md:w-7 md:h-40 lg:h-44 xl:h-48 md:mt-3 md:flex items-end">
            <div className="font-Helvet font-normal text-2xl leading-[128%] md:leading-[168%] md:-translate-x-12 md:translate-y-4 hidden md:inline-block">
              <p className="font-medium text-2xl sm:text-3xl md:text-custom-4xl md:rotate-90 inline-block">
                06
              </p>
            </div>
          </div>{" "}
          <div className="font-Helvet font-normal text-2xl leading-[128%] md:leading-[168%] md:-translate-x-12 md:translate-y-5 inline md:hidden overflow-hidden">
            <p className="font-medium text-2xl sm:text-3xl md:text-custom-4xl md:rotate-90 inline-block">
              06
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:inline-block absolute bottom-[-5%] md:bottom-[-20%] translate-x-3 py-5 md:py-0">
          <p className="md:inline font-Poppins font-light text-lg sm:text-xl leading-[170%] vericaltext -rotate-90 md:rotate-180 md:-translate-x-4">
            MJH
          </p>
          <div className="border-b-2 border-b-orangeYellow md:border-l-2 md:border-l-orangeYellow w-20 sm:w-40 md:w-7 md:h-40 lg:h-72 md:mt-3"></div>
          <div className="font-Helvet font-normal text-2xl leading-[128%] md:leading-[168%] md:translate-x-7 md:-translate-y-7 md:overflow-hidden flex md:inline-block">
            <p className="font-medium text-2xl sm:text-3xl md:text-custom-4xl md:-rotate-90 md:inline-block ">
              07
            </p>
            <p className="md:inline-block uppercase"> take step</p>
          </div>
        </div>
        <div className="max-w-[98px] absolute right-0 xl:right-[3%] top-[20%]">
          <Image
            src="/assets/svg/Cottes.svg"
            width={98}
            height={70}
            className="w-full"
            alt="Cottes"
          />
        </div>
        <h2 className="font-Helvet font-normal text-3xl sm:text-custom-4xl lg:text-custom-5xl leading-[128%] text-center uppercase sm:pb-5 ">
          What our <span className="text-orangeYellow">clients</span> say
        </h2>
        <div className=" swiperone">
          <Swiper
            modules={[Pagination, Autoplay]}
            direction="vertical"
            loop={true}
            pagination={{
              clickable: true,
            }}
            className=" h-[820px] sm:h-[600px]"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {Clients.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="mx-auto max-w-[820px] pt-14 relative ">
                  <div className="max-w-[86px] absolute top-2 left-[43%] z-1">
                    <Image
                      src="/assets/image/CuteGirl.webp"
                      width={86}
                      height={86}
                      className="w-full"
                      alt={event.alt}
                    />
                  </div>
                  <div className="w-full px-3 bg-white shadow-[0px_2px_48px_0px_#00000014] pb-8 pt-14">
                    <p className="font-Poppins font-normal text-sm sm:text-base leading-[160%] text-center max-w-[615px] mx-auto opacity-70">
                      {event.headingOne}
                    </p>
                    <h3 className="font-Poppins font-semibold text-sm sm:text-base leading-[160%] text-center  pt-2 sm:pt-4">
                      {event.ceo}
                    </h3>
                    <p className="font-Poppins font-normal text-sm sm:text-base leading-[160%] text-center opacity-70">
                      {event.ca}
                    </p>
                  </div>
                  <div className="flex  flex-row flex-wrap -mx-3 pt-5">
                    <div className="w-full sm:w-1/2 px-3">
                      <div className="bg-white shadow-[0px_2px_48px_0px_#00000014] p-[25px_36px]">
                        <p className="font-Poppins font-normal text-sm sm:text-base leading-[160%] text-center max-w-[615px] mx-auto opacity-70">
                          {event.headingTwo}
                        </p>
                        <h3 className="font-Poppins font-semibold text-sm sm:text-base leading-[160%] text-center  pt-2 sm:pt-4">
                          {event.ceoTwo}
                        </h3>
                        <p className="font-Poppins font-normal text-sm sm:text-base leading-[160%] text-center opacity-70">
                          {event.ca}
                        </p>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3 pt-5 sm:pt-0">
                      <div className="bg-white shadow-[0px_2px_48px_0px_#00000014] p-[25px_36px]">
                        <p className="font-Poppins font-normal text-sm sm:text-base leading-[160%] text-center max-w-[615px] mx-auto opacity-70">
                          {event.headingTwo}
                        </p>
                        <h3 className="font-Poppins font-semibold text-sm sm:text-base leading-[160%] text-center pt-2 sm:pt-4">
                          {event.ceoThree}
                        </h3>
                        <p className="font-Poppins font-normal text-sm sm:text-base leading-[160%] text-center opacity-70">
                          {event.ca}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
