import Image from "next/image";
import React from "react";

const RutineService = () => {
  return (
    <section>
      <div className="h-full md:hidden min-w-screen">
        <div className="flex justify-between px-[3rem] pt-[2rem] pb-[1em]">
          <button className="  text-gray-500">বাংলা</button>
          <button className="  text-gray-500">skip</button>
        </div>
        <div className="absolute w-full h-full bg-white "></div>
        <div className=" absolute mt-[30%] w-full h-full bg-gray-100 shape ">
          {" "}
        </div>

        <Image
          width={50}
          height={50}
          // className="object-contain absolute  mt-[10%] ml-[10%] w-[90%]"
          src="/images/rutine-service.svg"
          alt="serviceImg"
        />
        <Image
          width={50}
          height={50}
          // className="absolute  mt-[50%] w-[50%]"
          src="/images/hb-big-logo.svg"
          alt="hb-logo"
        />
      </div>
    </section>
  );
};

export default RutineService;
