import React, { useState } from "react";
import moonImg from "../../assets/icon-moon.svg";
import sunImg from "../../assets/icon-sun.svg";

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between mb-[35px] lg:w-[730px]">
      <h1
        className={`text-[#222731] dark:text-[#FFFFFF] text-[26px] font-bold`}
      >
        devfinder
      </h1>
      <div className="flex gap-[16px] items-center">
        <span
          className={`text-[#4B6A9B] dark:text-[#FFFFFF] text-sm font-bold uppercase tracking-[2.5px]`}
        >
          {darkMode ? "Light" : "Dark"}
        </span>
        {darkMode ? (
          <img
            src={sunImg}
            alt="Sun"
            onClick={() => {
              setDarkMode(!darkMode);
              document.documentElement.classList.remove("dark");
            }}
            className="cursor-pointer"
          />
        ) : (
          <img
            src={moonImg}
            alt="Moon"
            onClick={() => {
              setDarkMode(!darkMode);
              document.documentElement.classList.add("dark");
            }}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
