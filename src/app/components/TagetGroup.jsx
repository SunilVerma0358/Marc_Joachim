import React from "react";

const TagetGroup = () => {
  return (
    <div className="bg-[#F2F8FF]">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px]">
        <div className="flex flex-row flex-wrap -mx-3 items-center pt-12">
          <div className=" w-full sm:w-8/12 px-3 ">
            <h2
              data-aos="zoom-in-down"
              className=" font-Helvet font-normal text-3xl md:text-5xl lg:text-custom-5xl leading-[128%] text-[#F77B0B] uppercase sm:text-center"
            >
              TARGET <span className="text-black">group</span>
            </h2>
          </div>
          <div className=" w-full sm:w-4/12 px-3">
            <p className=" font-Poppins font-normal text-sm sm:text-base leading-[160%] max-w-[306px] duration-300 hover:text-white relative before:absolute before:h-[90%] before:w-[2px] before:left-[-6px] lg:before:-left-4 before:top-1 before:bg-[#9800B0] before:hover:w-full before:duration-300 ease-linear z-30 before:hover:-z-30">
              The coaching is aimed at married women who have already separated
              or are thinking of separating.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('../../public/assets/image/TargetGroupImg.webp')] bg-no-repeat bg-center max-md:bg-cover md:bg-size mt-6 md:mt-12  py-11 sm:py-14 md:py-28">
        <div className="container max-w-[1140px] 2xl:max-w-[1320px] max-md:flex items-center flex-col relative">
          <div
            data-aos="zoom-in-down"
            className="bg-[#424242] bg-opacity-35 border backdrop-blur-sm border-[#FFFFFF26] max-w-[382px] p-[40px_37px_40px_32px]  "
          >
            <p className="font-Poppins font-normal text-sm sm:text-base text-white leading-[160%]">
              You have separated and have the feeling that you can never be
              happy again and that you will be alone forever.
            </p>
          </div>
          <div
            data-aos="zoom-in-down"
            className="bg-[#424242] bg-opacity-35 border backdrop-blur-sm border-[#FFFFFF26] max-w-[382px] p-[40px_38px_40px_40px] mt-8  "
          >
            <p className="font-Poppins font-normal text-sm sm:text-base text-white leading-[160%] max-w-[303px]">
              How are you supposed to be able to let go of someone who is so
              entangled with your life? It's impossible, isn't it?
            </p>
          </div>
          <div className="bg-[#003E92] bg-opacity-70 backdrop-blur-sm max-w-[382px] p-[40px_38px_40px_40px] md:p-[55px_24px] lg:p-[65px_28px_77px_39px] mt-8 md:absolute right-3 md:translate-y-[-55%] ">
            <p className="font-Poppins font-normal text-sm sm:text-base text-white leading-[160%] max-w-[303px]">
              To understand how to let go of your partner, you need a detailed
              step-by-step action plan, which you will receive from me in a 1:1
              coaching session.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagetGroup;
