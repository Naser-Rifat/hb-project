import Image from "next/image";
import React from "react";

const BestDeals = () => {
  return (
    <section className="bg-white">
      <div className="w-[55rem] mx-auto mb-20 ">
        <div className="flex justify-between items-center pb-[2rem] w-full h-[2rem] ">
          <h1 className="text-[1.1em] font-semibold">Best Deals for you</h1>

          <button className="py-1  px-3 mx-2 font-sans text-[.7em] text-black bg-[#F2F5F7]  rounded-full">
            View All
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="border-2  border-dashed border-[#B2CBFF]	 p-3">
            <div className="flex justify-between  ">
              <div>
                {" "}
                <Image
                  width="50"
                  height="60"
                  src="/images/landingpage/bestdeal/ibn-sina-logo.png"
                  alt="hospital-logo"
                />
              </div>
              <div>
                {" "}
                <Image
                  width="20"
                  height="20"
                  src="/images/landingpage/bestdeal/share-icon.png"
                  alt="hospital-logo"
                />
              </div>
            </div>
            <div>
              <p className="text-[.9em] w-[8rem] my-[1rem] font-sans font-semibold">
                {" "}
                10% OFF Full Body Check + Check Free Report
              </p>
            </div>
            <div className=" w-full text-center">
              <Image
                width="180"
                height="60"
                src="/images/landingpage/bestdeal/get-code.png"
                alt="hospital-logo"
              />
            </div>
          </div>
          <div className="border-2  border-dashed border-[#B2CBFF]	 p-3">
            <div className="flex justify-between  ">
              <div>
                {" "}
                <Image
                  width="50"
                  height="60"
                  src="/images/landingpage/bestdeal/ibn-sina-logo.png"
                  alt="hospital-logo"
                />
              </div>
              <div>
                {" "}
                <Image
                  width="20"
                  height="20"
                  src="/images/landingpage/bestdeal/share-icon.png"
                  alt="hospital-logo"
                />
              </div>
            </div>
            <div>
              <p className="text-[.9em] w-[8rem] my-[1rem] font-sans font-semibold">
                {" "}
                10% OFF Full Body Check + Check Free Report
              </p>
            </div>
            <div className=" w-full text-center">
              <Image
                width="180"
                height="60"
                src="/images/landingpage/bestdeal/get-code.png"
                alt="hospital-logo"
              />
            </div>
          </div>
          <div className="border-2  border-dashed border-[#B2CBFF]	 p-3">
            <div className="flex justify-between  ">
              <div>
                {" "}
                <Image
                  width="50"
                  height="60"
                  src="/images/landingpage/bestdeal/ibn-sina-logo.png"
                  alt="hospital-logo"
                />
              </div>
              <div>
                {" "}
                <Image
                  width="20"
                  height="20"
                  src="/images/landingpage/bestdeal/share-icon.png"
                  alt="hospital-logo"
                />
              </div>
            </div>
            <div>
              <p className="text-[.9em] w-[8rem] my-[1rem] font-sans font-semibold">
                {" "}
                10% OFF Full Body Check + Check Free Report
              </p>
            </div>
            <div className=" w-full text-center">
              <Image
                width="180"
                height="60"
                src="/images/landingpage/bestdeal/get-code.png"
                alt="hospital-logo"
              />
            </div>
          </div>
          <div className="border-2  border-dashed border-[#B2CBFF]	 p-3">
            <div className="flex justify-between  ">
              <div>
                {" "}
                <Image
                  width="50"
                  height="60"
                  src="/images/landingpage/bestdeal/ibn-sina-logo.png"
                  alt="hospital-logo"
                />
              </div>
              <div>
                {" "}
                <Image
                  width="20"
                  height="20"
                  src="/images/landingpage/bestdeal/share-icon.png"
                  alt="hospital-logo"
                />
              </div>
            </div>
            <div>
              <p className="text-[.9em] w-[8rem] my-[1rem] font-sans font-semibold">
                {" "}
                10% OFF Full Body Check + Check Free Report
              </p>
            </div>
            <div className=" w-full text-center">
              <Image
                width="180"
                height="60"
                src="/images/landingpage/bestdeal/get-code.png"
                alt="hospital-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
