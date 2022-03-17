import React from "react";
import Image from "next/image";

const PassChangedPop = () => {
  return (
    <section className=" h-full md:hidden min-w-screen">
      <div className="absolute w-full h-96 bg-[#000]"></div>
      <div className="absolute mt-[270px]  w-full h-full bg-gray-100  rounded-t-[35px] ">
        <div className="flex flex-col justify-center items-center">
          <Image width={40} height={40} src="/images/clock.svg" alt="" />
          <div className="flex flex-col justify-center items-center my-[2rem]">
            <h1 className="text-[1.8em] font-medium text-[#3D6ED6]">
              Password Changed
            </h1>
            <p className=" w-[70%] text-center text-[#3D6ED6]">
              Congratulation!! You’ve successfully changed your password.
            </p>
            <button className="mt-[2rem] mb-3 w-[40%] h-[3rem]  text-white  bg-[#406CDA] rounded-[6px]">
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassChangedPop;
