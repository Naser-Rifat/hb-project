import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[3rem] flex justify-between items-center ">
        <div>
          <Image
            width="110"
            height="55"
            src="/images/landingpage/header/hblogo.svg"
            alt="hb-logo"
          />
        </div>
        <div className="flex justify-end items-center w-[35rem]">
          <p className=" mr-2 w-[20rem] text-[.9rem]   text-white  font-sans ">
            We’ve just Launched in Borned Find out more
          </p>

          <button className="flex justify-center items-center w-[8rem] text-[.8rem] text-white h-[1.8rem] rounded-full border-[1px] border-white">
            <Image
              width="15"
              height="15"
              src="/images/landingpage/header/phonelogo.svg"
              alt="phone-logo"
            />{" "}
            <span className="font-sans font- text-[.9rem] ml-2">09613-892</span>
          </button>
          <button className="font-sans w-[5rem]  text-[.8rem] ml-2 h-[1.8rem] rounded-full bg-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
