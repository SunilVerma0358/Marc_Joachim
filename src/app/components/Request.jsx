import React from "react";
import { RequestIt, RequestItOne } from "./common/Helper";
import ConsultationLink from "./common/ConsultationLink";

const Request = () => {
  return (
    <div className="bg-[#F2F8FF] pt-10 lg:pt-14">
      <div className="container 2xl:max-w-[1320px] max-w-[1140px]">
        <div className="flex flex-wrap flex-row -mx-3 items-center">
          <div className="w-full md:w-8/12 xl:w-7/12  px-3">
            <h2
              data-aos="zoom-in-down"
              className="font-Helvet font-normal text-3xl sm:text-custom-4xl lg:text-custom-5xl leading-[128%] uppercase"
            >
              Request your
            </h2>
            <h2
              data-aos="zoom-in-down"
              className="font-Helvet font-normal text-3xl sm:text-custom-4xl lg:text-custom-5xl leading-[128%] uppercase"
            >
              <span className="text-orangeYellow">non-binding </span> strategy
            </h2>
            <h2
              data-aos="zoom-in-down"
              className=" font-Helvet font-normal text-3xl sm:text-custom-4xl lg:text-custom-5xl leading-[128%] uppercase"
            >
              meeting now!
            </h2>
          </div>
          <div className="w-ful md:w-4/12 xl:w-5/12  px-3 pt-6 md:pt-0">
            <p className="font-Poppins font-normal text-sm sm:text-base hover:text-white opacity-70 leading-[160%] sm:ms-auto lg:max-w-[350px] relative before:absolute before:h-[94%] before:w-[2px] before:left-[-6px] lg:before:-left-4 before:top-1 before:bg-[#9800B0] before:hover:w-[105%] hover:opacity-100 duration-300 before:duration-300 ease-linear z-30 before:hover:-z-30">
              Click on the button below, choose an appointment and answer the
              questions truthfully. One of our strategy consultants will then
              contact you and conduct your free consultation. We can advise you
              on the following topics:
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('../../public/assets/image/RequestNow.webp')] bg-no-repeat mt-6 sm:mt-12 lg:mt-[60px] max-md:bg-cover md:bg-size bg-center min-h-[868px] flex items-center py-12 sm:py-0">
        <div className="container max-w-[1140px] 2xl:max-w-[1320px]">
          <div className="flex flex-row flex-wrap -mx-3 justify-center">
            {RequestIt.map((props, index) => (
              <div
                key={index}
                className="w-full sm:w-4/12 lg:w-3/12 px-3 mb-4 sm:mb-0 bg-white bg-opacity-[25%] relative inset-0 hover:bg-[#003E92] !duration-300 ease-linear"
              >
                <div
                  className={`${props.class} p-[32px_24px] lg:p-[61px_38.5px]`}
                >
                  <p
                    className={`${props.classname} font-Poppins font-normal text-sm sm:text-base leading-[160%] text-white`}
                  >
                    {props.Phara}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row flex-wrap -mx-3 justify-center sm:pt-8">
            {RequestItOne.map((props, index) => (
              <div
                key={index}
                data-aos="zoom-in-down"
                className="w-full sm:w-4/12 lg:w-3/12 px-3  mt-4 sm:mt-0 bg-white bg-opacity-[25%] relative inset-0 hover:bg-[#003E92] duration-300 ease-linear"
              >
                <div
                  className={`${props.class} p-[32px_24px] lg:p-[61px_38.5px]`}
                >
                  <p
                    className={`${props.classname} font-Poppins font-normal text-base leading-[160%] text-white`}
                  >
                    {props.Phara}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-[452px] mx-auto flex justify-center sm:justify-normal mt-6 sm:mt-12 md:mt-14">
            <ConsultationLink link="Book a non-binding initial consultation now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
