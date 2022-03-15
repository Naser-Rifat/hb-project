import React from "react";

const RutineService = () => {
  return (
    <section>
      <div className="min-w-screen h-full md:hidden">
        <div className="flex justify-between px-[3rem] pt-[2rem] pb-[1em]">
          <button className="  text-gray-500">বাংলা</button>
          <button className="  text-gray-500">skip</button>
        </div>
        <div className="absolute w-full h-full bg-white "></div>
        <div className=" absolute shape w-full h-full bg-gray-100 mt-[30%] ">
          {" "}
        </div>

        <img
          className="absolute object-contain  mt-[10%] ml-[10%] w-[90%]"
          src="/images/rutine-service.svg"
        />
        <img
          className="absolute  w-[50%] mt-[50%]"
          src="/images/hb-big-logo.svg"
          alt=""
        />
      </div>
    </section>
  );
};

export default RutineService;
