import React from "react";
import location from "../../assets/icon-location.svg";
import twitter from "../../assets/icon-twitter.svg";
import website from "../../assets/icon-website.svg";
import company from "../../assets/icon-company.svg";

function UserInfo({ userData, userNotFound }) {
  return (
    <>
      {userNotFound ? null : (
        <div
          className={`rounded-[15px] pt-[32px] px-[24px] pb-[49px] shadow-lg bg-[#FEFEFE] dark:bg-[#1E2A47]  lg:w-[730px] lg:p-[48px]`}
        >
          <div className="flex items-center gap-[20px] mb-[34px]">
            <img
              src={userData.avatar_url}
              alt=""
              className="w-[70px] h-[70px] rounded-full lg:w-[117px] lg:h-[117px]"
            />
            <div className="lg:flex lg:gap-[110px] lg:items-baseline">
              <h2
                className={`text-[#2B3442] dark:text-[#FFFFFF] text-lg md:text-2xl font-extrabold`}
              >
                {userData.name} <br />
                <span className="text-[#0079FF] text-[13px] md:text-base">
                  {userData.login}
                </span>
              </h2>
              <span className="text-[#697C9A] dark:text-[#FFFFFF]">
                Joined {userData.created_at.slice(0, 10)}
              </span>
            </div>
          </div>
          <p className="text-[#4B6A9B] dark:text-[#FFFFFF] text-base leading-[25px] mb-[23px]">
            {userData.bio}
          </p>
          <div
            className={`bg-[#F6F8FF] dark:bg-[#141D2F] rounded-[10px] flex justify-between md:justify-around py-[18px] px-[15px] mb-[24px]`}
          >
            <div className="flex flex-col items-center text-[#4B6A9B] dark:text-[#FFFFFF]">
              Repos{" "}
              <span className="text-lg text-[#2B3442] dark:text-[#FFFFFF] font-bold">
                {userData.public_repos}
              </span>
            </div>
            <div className="flex flex-col items-center text-[#4B6A9B] dark:text-[#FFFFFF]">
              Followers{" "}
              <span className="text-lg text-[#2B3442] dark:text-[#FFFFFF] font-bold">
                {userData.followers}
              </span>
            </div>
            <div className="flex flex-col items-center text-[#4B6A9B] dark:text-[#FFFFFF]">
              Following{" "}
              <span className="text-lg text-[#2B3442] dark:text-[#FFFFFF] font-bold">
                {userData.following}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[17px] md:grid md:grid-cols-2">
            <div className="flex items-center gap-[10px]">
              <img src={location} alt="Location" />
              <span className="text-[#4B6A9B] dark:text-[#FFFFFF]">
                {userData.location}
              </span>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={website} alt="Website" />
              <a href={userData.html_url} target="_blank">
                <span
                  className="text-[#4B6A9B] dark:text-[#FFFFFF] cursor-pointer"
                  style={{ textDecoration: "underline" }}
                >
                  {userData.html_url.slice(8)}
                </span>
              </a>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={twitter} alt="twitter" />
              <span className="text-[#4B6A9B] dark:text-[#FFFFFF]">
                {userData.twitter_username
                  ? userData.twitter_username
                  : "Not Available"}
              </span>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={company} alt="company" />
              <span className="text-[#4B6A9B] dark:text-[#FFFFFF]">
                {userData.company}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserInfo;
