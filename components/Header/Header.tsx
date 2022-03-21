import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[3rem] flex justify-between items-center ">
        <div>
          <Image
            width="90"
            height="45"
            src="/images/landingpage/header/hblogo.svg"
            alt="hb-logo"
          />
        </div>
        <div className="flex justify-end items-center w-[25rem]">
          <p className=" mr-2 w-[14rem] text-[.6rem]   text-white  font-sans ">
            We’ve just Launched in Borned Find out more
          </p>

          <button className="flex justify-center items-center w-[8rem] text-[.8rem] text-white h-[1.5rem] rounded-full border-[1px] border-white">
            <Image
              width="10"
              height="10"
              src="/images/landingpage/header/phonelogo.svg"
              alt="phone-logo"
            />{" "}
            <span className="font-sans font-normal ml-2">09613-892</span>
          </button>
          <button className="font-sans w-[5rem]  text-[.6rem] ml-2 h-[1.5rem] rounded-full bg-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
