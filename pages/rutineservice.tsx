import React from "react";

import Image from "next/image";

const RutineService = () => {
  return (
    <section>
      <div className="h-full  md:hidden min-w-screen m-0 p-0">
        <div className="flex justify-between px-[3rem] pt-[2rem] pb-[1em]">
          <button className="  text-gray-500">বাংলা</button>
          <button className="  text-gray-500">skip</button>
        </div>
        <div
          style={{
            backgroundImage: "url('/images/rutineservice/rutineservice.svg')",
          }}
          className="absolute w-full  bg-no-repeat bg-cover h-[100vh] xs:h-[35rem] bg-white mt-[2rem]"
        ></div>

        <div className="absolute ml-[2.7rem] xs:ml-[2rem] mt-[25rem] xs:mt-[19rem]">
          <h4 className="text-[#A6A6A6]">Health Bondhu</h4>
          <hr className="[height:.17rem] w-[60%] bg-[#C4D9EF]" />
          <h1 className="w-[75%]  text-[22px] [font-weight:900]">
            On Demand & Rutine Service
          </h1>
          <p className="w-[75%]  text-[.9rem] [font-weight:500] mt-[.8rem] ">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the in
          </p>
        </div>

        <div className="absolute w-full mt-[38rem] xs:mt-[32rem] mb-[2rem] flex justify-center items-center ">
          <button className="rounded-full bg-[#2C62D6] w-[40%] h-[4rem] xs:h-[3rem] xs:text-sm text-base	 text-white font-medium mx-1">
            Login
          </button>
          <button className="rounded-full bg-[#53ACDD] w-[40%] h-[4rem] xs:h-[3rem] xs:text-sm text-base	 text-white font-medium mx-1">
            Registration
          </button>
        </div>
      </div>
    </section>
  );
};

export default RutineService;
