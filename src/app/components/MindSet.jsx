"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import ConsultationLink from "./common/ConsultationLink";
import { MapSwiper } from "./common/Helper";

const MindSet = () => {
  return (
    <div
      id="testimonials"
      className="relative z-20 overflow-hidden pt-28 md:pt-60 pb-0 md:pb-20"
    >
      <div className=" container max-w-[1140px] 2xl:max-w-[1320px] pb-12 ">
        <div className=" inline-flex items-center gap-2 md:inline-block md:absolute right-[10%] top-[4%] xl:top-2  translate-x-6 py-5 md:py-0 ">
          <p className="md:inline font-Poppins font-light text-lg sm:text-xl leading-[170%] vericaltext -rotate-90 md:rotate-180 md:translate-x-3">
            MJH
          </p>
          <div className=" border-b-2 border-b-orangeYellow md:border-r-2 md:border-r-orangeYellow w-40 md:w-7 md:h-40 lg:h-44 xl:h-48  md:mt-3 md:flex items-end">
            <div className="font-Helvet font-normal text-2xl leading-[128%] md:leading-[168%] md:-translate-x-12 md:translate-y-4 hidden  md:inline-block">
              <p className="inline-block uppercase -translate-x-28 translate-y-10">
                analysis
              </p>
              <p className="font-medium text-2xl sm:text-3xl md:text-custom-4xl  md:rotate-90  inline-block ">
                04
              </p>
            </div>
          </div>{" "}
          <div className="font-Helvet font-normal text-2xl leading-[128%] md:leading-[168%] md:-translate-x-12 md:translate-y-5 inline md:hidden overflow-hidden">
            <p className="font-medium text-2xl sm:text-3xl md:text-custom-4xl md:rotate-90 inline-block  ">
              04
            </p>
          </div>
        </div>
        <div className="absolute left-[-2%] top-[-35%] md:top-[-45%] z-[-1] max-w-[615px] rotate-[23deg]">
          <Image
            src="/assets/svg/Whatyou.svg"
            width={615}
            height={612}
            className="w-full max-w-[615px]"
            alt="whatyou img"
          />
        </div>
        <div className="flex flex-wrap flex-row -mx-3 items-center md:pt-12">
          <div className="w-full md:w-5/12 px-3 pb-6 md:pb-0">
            <h3
              data-aos="zoom-in-down"
              className="font-Helvet font-normal text-xl sm:text-2xl md:text-3xl leading-[128%]"
            >
              THE FOUR PHASES OF
            </h3>
            <h2
              data-aos="zoom-in-down"
              className=" font-Helvet font-normal text-3xl md:text-5xl lg:text-custom-5xl leading-[120%]"
            >
              SEPARATION{" "}
              <span className=" text-orangeYellow block">MINDSET</span>
            </h2>
            <p className="font-Poppins font-normal text-sm sm:text-base leading-[160%] opacity-70 max-w-[480px] pt-3 sm:pt-5">
              There are 4 typical separation phases. The 4 phases are not always
              clearly separated from each other and can overlap.
            </p>
            <div className="flex items-center pt-9">
              <ConsultationLink link="Book a non-binding initial consultation now" />
            </div>
          </div>
          <div className=" w-full md:w-7/12 px-3 relative custom">
            <Swiper
              modules={[EffectFade, Pagination, Autoplay, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              effect={"fade"}
              centeredSlides={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                paginationPosition: "bottom",
              }}
            >
              {MapSwiper.map((props, index) => (
                <SwiperSlide key={index}>
                  <div className=" w-full px-3 bg-blue relative z-[1] pb-12">
                    <div
                      data-aos="zoom-in-down"
                      className=" flex flex-col justify-center min-h-[260px] sm:min-h-[448px] "
                    >
                      <p className="font-Poppins font-medium text-xl leading-[160%] text-white text-center">
                        {props.PharaOne}
                        <span className="block">{props.PharaSpan}</span>
                      </p>
                      <p className="font-Poppins font-normal text-sm sm:text-base leading-[160%] text-white  text-center pt-4 max-w-[400px] mx-auto">
                        {" "}
                        {props.PharaTwo}
                        <span className="block">{props.PharaSpanTwo}</span>
                      </p>
                    </div>
                    <div className=" absolute bottom-0 right-0 z-[-1] ">
                      <Image
                        src="/assets/image/TargetImg.webp"
                        width={300}
                        height={180}
                        alt="targetimg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindSet;
