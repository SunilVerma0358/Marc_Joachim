import React from "react";

const AreYou = () => {
  return (
    <div className=" bg-[url('../../public/assets/image/yourEx.webp')] bg-no-repeat max-lg:bg-cover bg-left md:bg-center lg:bg-size min-h-[516px] flex items-center ">
      <div className="container max-w-[1140px] ">
        <div
          data-aos="zoom-in-down"
          className="bg-white bg-opacity-15 border border-white border-opacity-15 max-w-[768px] mx-auto p-[50px_12px_42px_12px]"
        >
          <h2 className="font-Helvet font-normal text-3xl sm:text-5xl md:text-custom-5xl text-white leading-[120%] text-center">
            Are you over your EX?
          </h2>
          <p className="font-Poppins font-normal text-sm sm:text-base text-white leading-[160%] max-w-[585px] mx-auto text-center pt-2">
            Most women don't even realize how their past experiences affect
            their lives today. Assisting you to overcome this situation is what
            we do.
          </p>
          <button className=" bg-LinearBlue hover:bg-LinearBlue2 duration-300 font-Inter font-medium text-base leading-[150%] text-white block mx-auto p-[12px_24px] sm:p-[16px_36px] rounded-full mt-4 sm:mt-8">
            Let’s find it out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreYou;
