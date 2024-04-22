import Image from "next/image";
import { MapCard } from "./common/Helper";

const WhatYou = () => {
  return (
    <div className="relative pt-12 md:pt-0">
      <div className="inline-flex items-center gap-2 md:inline-block md:absolute top-[-22%] lg:top-[-25%] right-[5%] xl:right-[12%] translate-x-6 md:py-0 ">
        <p className="md:inline font-Poppins font-light text-lg sm:text-xl leading-[170%] vericaltext -rotate-90 md:rotate-180 md:translate-x-3">
          MJH
        </p>
        <div className=" border-b-2 border-b-orangeYellow md:border-r-2 md:border-r-orangeYellow w-40 md:w-7 md:h-40 lg:h-64  md:mt-3 md:flex items-end">
          <div className="font-Helvet font-normal text-2xl leading-[128%] md:leading-[168%] md:-translate-x-12 md:translate-y-5 hidden  md:inline-block">
            <p className="font-medium text-2xl sm:text-3xl md:text-custom-4xl  md:rotate-90  inline-block ">
              02
            </p>
          </div>
        </div>{" "}
        <div className="font-Helvet font-normal text-2xl leading-[128%] md:leading-[168%] md:-translate-x-12 md:translate-y-5 inline md:hidden overflow-hidden">
          <p className="font-medium text-2xl sm:text-3xl md:text-custom-4xl md:rotate-90 inline-block  ">
            02
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden max-w-[1920px] z-20 pt-4 pb-14 md:pt-0 md:pb-32">
        <div className="max-w-[150px] sm:max-w-[313px] absolute right-[-20%] sm:right-[-5%] lg:right-[-8%] top-[20%] z-[-1]">
          <Image
            src="/assets/image/FlowerImg.webp"
            width={313}
            height={301}
            className="w-full opacity-30"
            alt="flowerimgOne"
          />
        </div>
        <div className="max-w-[150px] sm:max-w-[313px] absolute left-[-20%] sm:left-[-5%] lg:left-[-12%] bottom-[10%] xl:bottom-0 z-[-1]">
          <Image
            src="/assets/image/FlowerImg.webp"
            width={313}
            height={301}
            className="w-full opacity-30"
            alt="flowerimg"
          />
        </div>
        <div className="container max-w-[1140px] 2xl:max-w-[1320px]">
          <div className="inline-block absolute bottom-[-1%] sm:bottom-[-4%] md:bottom-0 translate-x-1 py-5 md:py-0">
            <div className="border-b-2 border-b-orangeYellow border-l-2 border-l-orangeYellow w-7 h-[660px] sm:h-[480px] md:h-[710px] lg:h-[505px] mt-3"></div>
            <div className="font-Helvet font-normal text-2xl leading-[128%] sm:leading-[170%] translate-x-7 -translate-y-7 inline-block">
              <p className="font-medium text-2xl sm:text-3xl md:text-custom-4xl -rotate-90 inline-block ">
                03
              </p>
              <p className="inline-block uppercase"> goal</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap -mx-3 items-center">
            <div className="w-full sm:w-6/12 px-3">
              <div className="flex items-center">
                <h2
                  data-aos="zoom-in-down"
                  className="font-Helvet font-normal text-3xl md:text-5xl lg:text-custom-5xl leading-[128%] uppercase "
                >
                  what you{" "}
                  <span className="xl:block text-3xl md:text-5xl lg:text-6xl">
                    will <span className="text-[#F77B0B]">get</span>
                  </span>
                </h2>
                <div
                  data-aos="zoom-in-down"
                  className=" max-w-[150px] lg:max-w-[224px]"
                >
                  <Image
                    src="/assets/image/FlowerImg.webp"
                    width={224}
                    height={216}
                    className="w-full"
                    alt="flowerimg two"
                  />
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-down" className="w-full sm:w-6/12 px-3">
              <p className=" font-Poppins font-normal text-sm sm:text-base leading-[160%] max-w-[383px] duration-300 hover:text-white relative before:absolute before:h-[90%] before:w-[2px] before:left-[-6px] lg:before:-left-4 before:top-1 before:bg-[#9800B0] before:hover:w-full before:duration-300 ease-linear before:hover:-z-30">
                I will show you which steps are necessary for you to finally
                successfully let go of your EX. And I will support you to look
                confidently into your new future.
              </p>
            </div>
          </div>
          <p className="font-Helvet font-semibold text-base sm:text-lg md:text-xl leading-[140%] capitalize text-center pt-6 sm:pt-9 md:pt-12">
            In a 1:1 live coaching session, we will clarify the following
            questions in particular:
          </p>
          <div className="flex flex-row flex-wrap -mx-3 pt-7">
            {MapCard.map((props, index) => (
              <div
                key={index}
                className="w-full sm:w-6/12 lg:w-4/12 px-3 duration-300 ease-linear hover:bg-[#F5FAFF] group "
              >
                <div className="flex items-center px-5 py-8  md:px-9 md:py-16">
                  <p className=" font-Poppins font-normal text-sm sm:text-base leading-[160%] md:max-w-[283px] opacity-70 duration-300 ease-linear group-hover:text-[#003E92]">
                    {props.Phara}
                  </p>
                </div>
              </div>
            ))}
            <div className="w-full sm:w-6/12 lg:w-4/12 px-3">
              <div className="flex items-center my-8 md:my-16 max-w-[283px] mx-auto md:mx-9">
                <a
                  href="#"
                  className="bg-LinearBlue hover:bg-LinearBlue2 duration-300 ease-linear rounded-xl p-[1.7px]  "
                >
                  <div className="bg-white flex items-center gap-1 rounded-xl p-2 sm:p-[5px_23px_5px_9px]  ">
                    <span>
                      <Image
                        src="/assets/image/message.webp"
                        width={50}
                        height={47}
                        alt="messageimage"
                      />
                    </span>
                    <span className="bg-LinearBlue hover:bg-LinearBlue2 duration-300 ease-linear textBg font-Inter font-medium text-sm sm:text-base leading-[150%] ">
                      Book a non-binding initial consultation now
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYou;
