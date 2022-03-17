import Image from "next/image";
import React from "react";

const CongratsPop = () => {
  return (
    <section className=" h-full md:hidden min-w-screen">
      <div className="absolute w-full h-96 bg-[#000]"></div>
      <div className="absolute mt-[270px]  w-full h-full bg-gray-100  rounded-t-[35px] ">
        <div className="flex flex-col justify-center items-center">
          <Image
            width={50}
            height={50}
            src="/images/clock.svg"
            alt="clock-img"
          />
          <div className="flex flex-col justify-center items-center my-[2rem]">
            <h1 className="text-[1.8em] font-medium text-[#3D6ED6]">
              Congratulation
            </h1>
            <p className=" text-[.9em] text-center  text-[#3D6ED6]">
              Successfully Create Your Account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CongratsPop;
