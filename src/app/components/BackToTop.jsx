"use client";
import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [backToTopIcon, setBackToTopIcon] = useState(false);

  function BackTo() {
    document.documentElement.scrollTop = 0;
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 10) {
        setBackToTopIcon(true);
      } else {
        setBackToTopIcon(false);
      }
    });
  });

  return (
    <div>
      {backToTopIcon ? (
        <button
          id="Back"
          onClick={BackTo}
          className="
        group border flex justify-center animate-backtoTop items-center w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-full bg-black right-[6px] fixed sm:right-[1%] bottom-[6px] sm:bottom-[1%] z-50"
        >
          <svg
            className="flex justify-center items-center"
            width="20"
            height="20"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
            ></path>
            <path
              fillRule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            ></path>
          </svg>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default BackToTop;
