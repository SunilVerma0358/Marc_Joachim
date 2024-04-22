import Image from "next/image";
import NavMarc from "./NavMarc";
import { Phone } from "./common/SvgExport";
import ConsultationLink from "./common/ConsultationLink";
const Header = () => {
  return (
    <div
      className="h-screen flex flex-col bg-cover
      sm:bg-size bg-center max-md:bg-[url('../../public/assets/image/HeroImg.webp')] md:bg-[url('../../public/assets/image/HeroMainImg.webp')] bg-no-repeat"
    >
      {" "}
      <div className="hidden md:block absolute left-[-12%] xl:left-[-5%] md:top-[-45%] xl:top-[-38%] 2xl:top-[-30%] max-w-[533px] 2xl:max-w-[650px] rotate-[-25deg] z-0 ">
        <Image
          src="/assets/svg/Whatyou.svg"
          width={533}
          height={501}
          className="w-full "
          alt="whatyou img"
        />
      </div>
      <div>
        <NavMarc />
      </div>
      <div className="flex flex-grow  justify-center items-center relative z-2">
        <div className="container max-w-[1140px] 2xl:max-w-[1320px]">
          <div className="flex flex-wrap flex-row -mx-3">
            <div className="w-full md:w-7/12 lg:w-6/12 px-3">
              <p className=" font-Helvet font-semibold text-[#F77B0B] text-base sm:text-lg  leading-[128%]">
                Marc Joachim Hubrich
              </p>
              <h1 className="font-Helvet font-normal max-md:text-white text-6xl leading-[128%] uppercase">
                Now I let you <span className="sm:block">go!</span>
              </h1>
              <p className=" font-Poppins font-normal max-md:text-white text-sm sm:text-base leading-[160%] max-w-[517px] opacity-70 pt-2  ">
                For women who do not want to be completely dragged down by a
                SEPARATION.
                <span className="sm:block">
                  How to let go of your EX so you can leave him behind without
                  having to run to a therapist right away.
                </span>
              </p>
              <div className="flex items-center gap-4 pt-8">
                <ConsultationLink link="Book a non-binding initial consultation now" />
                <a href="tel:0120219873" className=" animate-Phone">
                  <Phone />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap -mx-3 md:justify-end pt-16">
            <div className="w-full md:w-6/12 px-3">
              <div className="flex gap-2 md:justify-center">
                <p className="font-Helvet font-normal text-sm sm:text-base text-white leading-[170%] uppercase max-w-[203px] relative before:absolute before:h-[87%] before:w-[2px] before:left-[-6px] lg:before:-left-4 before:top-1 before:bg-[#9800B0] before:hover:w-[85%] before:duration-300 ease-linear z-30 before:hover:-z-30">
                  Die wichtigsten Aspekte einer Trennung:
                </p>

                <ul className="list-disc text-white">
                  <li>
                    <a
                      href="#"
                      className=" font-Poppins font-medium text-sm sm:text-base leading-[160%] text-white"
                    >
                      physische Trennung
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" font-Poppins font-medium text-sm sm:text-base leading-[160%] text-white pt-1"
                    >
                      mentale Trennung
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
