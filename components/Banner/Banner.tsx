import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="relative">
      <div className="w-full flex h-80">
        <div className="w-full flex flex-col  h-full ">
          <div className="w-full  mt-[2rem]">
            <h1 className="text-[1.5em] text-white font-sans font-bold">
              Health Bondhu for all your health needs.
            </h1>
            <p className=" w-[15rem] text-[.5em]  mt-[5px] text-white opacity-40 font-sans text-justify	">
              Reference site about Lorem Ipsum, giving information on its
              origins, giving information on its origins, m Ipsum, giving giving
              information on its origins, giving information on its origin
            </p>
          </div>

          <div className="w-full flex  justify-center items-center mt-[2rem]">
            <div className="w-full h-[4rem] ">
              <Image
                width="100"
                height="50"
                src="/images/landingpage/banner/booknow.svg"
                alt=""
              />
            </div>
            <div className="w-full h-[4rem] ">
              <Image
                width="100"
                height="50"
                className="p-[4.5rem]"
                src="/images/landingpage/banner/googleplay.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full ">
          <Image
            width="500"
            height="500"
            src="/images/landingpage/banner/iPhone12Pro(Wooden Hands).svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
