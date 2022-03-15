import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscReferences } from "react-icons/vsc";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PassChangedPop = () => {
  return (
    <section className=" min-w-screen h-full md:hidden">
      <div className="absolute bg-[#000] w-full h-96"></div>
      <div className="absolute w-full  rounded-t-[35px] mt-[270px] h-full  bg-gray-100 ">
        <div className="flex flex-col justify-center items-center">
          <img className="w-[40%] mt-[5rem]" src="/images/clock.svg" alt="" />
          <div className="flex flex-col justify-center items-center my-[2rem]">
            <h1 className="text-[1.8em] font-medium text-[#3D6ED6]">
              Password Changed
            </h1>
            <p className=" text-center w-[70%] text-[#3D6ED6]">
              Congratulation!! You’ve successfully changed your password.
            </p>
            <button className="w-[40%] mt-[2rem] h-[3rem] rounded-[6px]  mb-3  bg-[#406CDA] text-white">
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassChangedPop;
