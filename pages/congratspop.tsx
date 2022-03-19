import Image from "next/image";
import React from "react";

const CongratsPop = () => {
  return (
    // <section className=" h-[100vh] md:hidden min-w-screen">
    //   <div className="absolute w-full h-[100vh] bg-[#000]"></div>
    //   <div className="absolute mt-[17.6rem]   w-full bg-white   rounded-t-[35px]">
    //     <div className="flex flex-col justify-center items-center">
    //       <Image
    //         width={50}
    //         height={50}
    //         src="/images/clock.svg"
    //         alt="clock-img"
    //       />
    //       <div className="flex flex-col justify-center items-center my-[2rem]">
    //         <h1 className="text-[1.8em] font-medium text-[#3D6ED6]">
    //           Congratulation
    //         </h1>
    //         <p className=" text-[.9em] text-center  text-[#3D6ED6]">
    //           Successfully Create Your Account.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section>
      {/* mobile responsive part  */}

      <div className="w-full h-[100vh]  bg-white md:hidden ">
        <div className=" flex relative flex-col h-[100vh] bg-gray-100 ">
          {/* sign up input field */}

          <div className="absolute bottom-0   w-full bg-white   rounded-t-[35px] ">
            <div className="flex flex-col mt-[5rem] mb-[6rem] justify-center items-center">
              <Image
                width={200}
                height={200}
                src="/images/clock.svg"
                alt="clock-img"
              />
              <div className="flex flex-col justify-center items-center my-[2rem]">
                <h1 className="text-[1.8em] font-bold text-[#3D6ED6]">
                  Congratulation!!
                </h1>
                <p className=" text-[1em] text-center mt-[1.8rem]  text-[#3D6ED6]">
                  Successfully Create Your Account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CongratsPop;
