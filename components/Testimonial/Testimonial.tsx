import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-white pb-[20rem]">
      <div className="w-[55rem] mx-auto">
        <div className="text-center py-[3rem]">
          <h1 className="text-[1.1em] font-semibold">Testimonials</h1>
        </div>
        <main className="grid grid-cols-3 gap-4 bg-white ">
          <div className=" flex justify-center items-center">
            <div className="max-w-sm bg-[#2C62D6]  p-3 rounded-lg tracking-wide shadow-lg">
              <div className="mx-auto text-center w-[4rem] h-[4rem] -mt-10 rounded-full border-4 border-white overflow-hidden ">
                <Image
                  width="100%"
                  height="100%"
                  alt="avatar"
                  className="  object-cover "
                  src="/profile.jpg"
                />
              </div>

              <div className=" ">
                <h1 className="text-white text-[1.5em] h-[1.5rem]">❛❛</h1>
                <div className="text-center">
                  <p className=" font-sans text-[.65em]  text-white leading-[15px]">
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry&apos;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of
                  </p>
                  <div className=" font-sans text-[.65em]  text-white leading-[15px]	mt-[.7rem]	">
                    <h4>Bill Gates</h4>
                    <p>25 year old , Dhaka Link Road</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <div className="max-w-sm bg-[#2C62D6] border-2 border-gray-300 p-3 rounded-lg tracking-wide shadow-lg">
              <div className="mx-auto text-center w-[4rem] h-[4rem] -mt-10 rounded-full border-4 border-white overflow-hidden ">
                <Image
                  width="100%"
                  height="100%"
                  alt="avatar"
                  className="  object-cover "
                  src="/profile.jpg"
                />
              </div>

              <div className=" ">
                <h1 className="text-white text-[1.5em] h-[1.5rem] ">❛❛</h1>
                <div className="text-center">
                  <p className=" font-sans text-[.65em]  text-white leading-[15px]">
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry&apos;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of
                  </p>
                  <div className=" font-sans text-[.65em]  text-white leading-[15px]	mt-[.7rem]	">
                    <h4>Bill Gates</h4>
                    <p>25 year old , Dhaka Link Road</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <div className="max-w-sm bg-[#2C62D6] border-2 border-gray-300 p-3 rounded-lg tracking-wide shadow-lg">
              <div className="mx-auto text-center w-[4rem] h-[4rem] -mt-10 rounded-full border-4 border-white overflow-hidden ">
                <Image
                  width="100%"
                  height="100%"
                  alt="avatar"
                  className="  object-cover "
                  src="/profile.jpg"
                />
              </div>

              <div className=" ">
                <h1 className="text-white text-[1.5em] h-[1.5rem]">❛❛</h1>
                <div className="text-center">
                  <p className=" font-sans text-[.65em]  text-white leading-[15px]">
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                  </p>
                  <div className=" font-sans text-[.65em]  text-white leading-[15px]	mt-[.7rem]	">
                    <h4>Bill Gates</h4>
                    <p>25 year old , Dhaka Link Road</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Testimonial;
