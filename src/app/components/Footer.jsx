import React from "react";
import Image from "next/image";
const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div className="bg-[#003E92] relative z-10 ">
      <div className="absolute z-[-1] left-0 right-0 bottom-0 top-0 h-[250px] md:h-[342px]">
        <Image
          src="/assets/svg/FooterImg.svg"
          width={1920}
          height={343}
          className="w-full object-cover h-full"
          alt="footerlayer"
        />
      </div>
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] py-12 md:py-24 ">
        <div className="flex items-center justify-between max-w-[700px] ms-auto">
          <div>
            <div className="max-w-[241px] mx-auto">
              <Image
                src="/assets/image/FooterLogo.webp"
                alt="footerLogo"
                width={241}
                height={90}
              />
            </div>
            <p className="font-Poppins font-normal text-base text-white text-center leading-[160%] pt-4">
              (c) {year} MARC JOACHIM HUBRICH
              <span className="block">All Rights Reserved</span>
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <a
                href="htttps://www.facebook.com/radialcode/"
                target="blank"
                className=" duration-300 hover:-translate-y-2"
              >
                <Image
                  src="/assets/svg/Facebook.svg"
                  width={30}
                  height={30}
                  alt="Facebook"
                />
              </a>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Fradialcode"
                target="blank"
                className="duration-300 hover:-translate-y-2"
              >
                <Image
                  src="/assets/svg/Twitter.svg"
                  width={30}
                  height={30}
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.email.com"
                target="blank"
                className="duration-300 hover:-translate-y-2"
              >
                <Image
                  src="/assets/svg/mail.svg"
                  width={30}
                  height={30}
                  alt="Mail"
                />
              </a>
              <a
                href="https://www.instagram.com/radialcode/?hl=en"
                target="blank"
                className="duration-300 hover:-translate-y-2"
              >
                <Image
                  src="/assets/svg/Insta.svg"
                  width={30}
                  height={30}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
