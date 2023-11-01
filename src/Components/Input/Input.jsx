import React, { useState } from "react";
import searchIcon from "../../assets/icon-search.svg";
import axios from "axios";

function Input(props) {
  const getUser = async () => {
    try {
      const user = await axios.get(
        `https://api.github.com/users/${props.userName}`
      );
      props.setUserData(user.data);
      props.setUserNotFound(false);
    } catch (error) {
      if (error.response.status === 404) {
        props.setUserNotFound(true);
      }
    }
  };
  return (
    <div
      className={`relative flex items-center mb-[16px] md:mb-[24px] shadow-lg`}
    >
      <img
        src={searchIcon}
        alt="Search"
        className="absolute top-[15px] md:top-[23px] left-[16px] md:left-[32px] md:w-[24px] md:h-[24px]"
      />
      <input
        type="text"
        placeholder="Search Github username..."
        className={`w-full lg:w-[730px] pt-[18px] pr-[98px] pb-[17px] pl-[50px] md:py-[22px] md:pr-[240px] md:pl-[80px] placeholder:text-[13px] rounded-[15px] outline-none bg-[#FEFEFE] dark:bg-[#1E2A47] dark:text-[#FFFFFF]`}
        onChange={(event) => props.setUserName(event.target.value)}
      />
      {props.userNotFound ? (
        <span className="absolute right-[120px] text-[#F74646] font-bold">
          No Results
        </span>
      ) : null}
      <button
        className="absolute right-[10px] text-[#FFF] bg-[#0079FF] rounded-[10px] py-[12px] pr-[14px] pl-[18px]"
        onClick={getUser}
      >
        Search
      </button>
    </div>
  );
}

export default Input;
