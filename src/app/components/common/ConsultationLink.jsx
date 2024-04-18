import Image from "next/image";
const ConsultationLink = (props) => {
  return (
    <>
      <a
        href="#"
        className="bg-LinearBlue hover:bg-LinearBlue2 group duration-300 ease-linear rounded-[63px] p-[1.7px]"
      >
        <div className="bg-white flex items-center gap-1 rounded-[63px] px-2 py-1 sm:p-[5px_48px_5px_9px]  ">
          <span>
            <Image src="/assets/image/message.webp" width={50} height={47} />
          </span>
          <span className="bg-LinearBlue group-hover:bg-LinearBlue2 duration-300 ease-linear textBg font-Inter font-medium text-sm sm:text-base leading-[150%]">
            {props.link}
          </span>
        </div>
      </a>
    </>
  );
};

export default ConsultationLink;
