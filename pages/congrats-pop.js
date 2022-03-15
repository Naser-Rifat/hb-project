import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscReferences } from "react-icons/vsc";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Image from "next/image";

const CongratsPop = () => {
  return (
    <section className=" min-w-screen h-full md:hidden">
      <div className="absolute bg-[#000] w-full h-96"></div>
      <div className="absolute w-full  rounded-t-[35px] mt-[270px] h-full  bg-gray-100 ">
        <div className="flex flex-col justify-center items-center">
          <Image
            width={500}
            height={500}
            layout="fill"
            className="w-[40%] mt-[5rem]"
            src="/images/clock.svg"
            alt=""
          />
          <div className="flex flex-col justify-center items-center my-[2rem]">
            <h1 className="text-[1.8em] font-medium text-[#3D6ED6]">
              Congratulation
            </h1>
            <p className=" text-center text-[.9em]  text-[#3D6ED6]">
              Successfully Create Your Account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CongratsPop;
