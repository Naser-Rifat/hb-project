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

const SignIn = () => {
  return (
    //  mobile view
    <section>
      <div className="min-w-screen h-[100vh] md:hidden ">
        <div className=" flex flex-col h-[100vh] relative  ">
          <div className="absolute w-full h-96 signupPageColor ">
            <svg
              className=" absolute w-full  "
              viewBox="0 0 375 382"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="375" height="382" fill="url(#paint0_linear_7_26)" />
              <mask
                id="mask0_7_26"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="375"
                height="382"
              >
                <rect
                  width="375"
                  height="382"
                  fill="url(#paint1_linear_7_26)"
                />
              </mask>
              <g mask="url(#mask0_7_26)">
                <path
                  d="M82.6417 160.941C30.1103 160.541 -19.3317 196.189 -37.4863 214.063V326.821H412.486V126.863C387.035 114.335 349.877 99.8014 242.983 139.392C136.09 178.983 148.306 161.442 82.6417 160.941Z"
                  fill="#7199DF"
                  fillOpacity="0.3"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_7_26"
                  x1="-1.79715e-05"
                  y1="-30.4498"
                  x2="375"
                  y2="410.332"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2C62D6" />
                  <stop offset="1" stopColor="#48B0E0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_7_26"
                  x1="-1.79715e-05"
                  y1="-30.4498"
                  x2="375"
                  y2="410.332"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2C62D6" />
                  <stop offset="1" stopColor="#48B0E0" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              // width="360"
              height="235"
              className="mt-20 mr-20 w-full absolute opacity-70"
              viewBox="0 0 375 235"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M98.4211 94.6272C34.8941 103.179 -17.2954 148.074 -35.4492 169.453V234.607H380.927C381.267 167.586 381.742 32.4252 380.927 27.9458C379.909 22.3467 299.994 -17.8655 236.367 10.1304C172.74 38.1263 177.83 83.9378 98.4211 94.6272Z"
                fill="#3CA2DC"
                fillOpacity="0.3"
              />
            </svg>

            <Image
              width="300"
              height="300"
              layout="fill"
              className="absolute ml-[25px]  mt-[95px]"
              src="/images/hb-full-logo.png"
              alt=""
            />
            <h1 className=" absolute mt-[8rem] ml-[25px] text-[2.2em] text-white   [font-weight:500]">
              Welcome
            </h1>
            <div className=" absolute mt-[180px] ml-[25px] flex justify-center items-center">
              <p className=" text-[1.2em] text-white  ">
                Don’t have an account?
              </p>
              <button className="w-[6rem] h-[1.3rem] ml-2 mt-[.1em]  border-[1px]  text-[.8em] text-white font-bold  rounded-[10px]  ">
                Register now
              </button>
            </div>

            <div className="absolute flex justify-between w-full p-5">
              <p className="text-white">
                <BsArrowLeft className="inline mb-[2px]" /> Back
              </p>
              <Image
                width="375"
                height="375"
                layout="fill"
                className=""
                src="/images/hb-logo.svg"
                alt=""
              />
            </div>
          </div>

          {/* sign up input field */}

          <div className="absolute w-full rounded-t-[35px] mt-[19em]  bg-white ">
            <form className="mt-[2rem]  text-center">
              <div className="w-[90%]  h-[4rem]  mb-[1rem] flex justify-center items-center bg-gray-100  mx-auto rounded-full">
                <HiOutlineDeviceMobile className=" text-gray-500 ml-[1em]" />
                <input
                  placeholder="Phone Number"
                  className=" w-[80%] h-[95%] text-xl ml-[1em]  bg-transparent   focus:outline-none"
                />
              </div>
              <div className=" w-[90%] h-[4rem] flex justify-center items-center bg-gray-100 mb-[1rem]  mx-auto rounded-full">
                <RiLockPasswordLine className=" text-gray-500 ml-[1.5em]" />
                <input
                  placeholder="Password"
                  className="w-[80%] h-[95%] text-xl ml-[1.2em] bg-transparent     focus:outline-none"
                />
                {/* <FiEye className=" text-2xl mr-[1em] text-gray-400 cursor-pointer" /> */}
                <FiEyeOff className=" text-2xl  mr-[1em] text-gray-400 cursor-pointer" />
              </div>

              <button className="w-[65%] h-[4rem] rounded-full text-xl  mb-3  bg-[#406CDA] text-white">
                Log In
              </button>
            </form>
            <div className="text-center">
              <p className="mb-3 font-medium text-[1.1em] mt-[2em]">
                Or quick continue with
              </p>
              <div className="flex justify-center items-center mb-2">
                <div className="w-[2.2em] h-[2.2em] mx-2 flex justify-center items-center text-2xl font-bold  rounded-full text-white bg-[#3B5999] shadow-lg">
                  f
                </div>
                <div className="w-[2.2em] h-[2.2em] mx-2 flex justify-center items-center text-2xl font-bold  rounded-full text-white bg-[#DD4B39] shadow-lg">
                  G
                </div>
              </div>
              <div className="flex justify-center items-center w-[80%] mx-auto mb-5 ">
                {/* <MdCheckBoxOutlineBlank/> */}

                <button className="text-[1em] mt-[2em]">
                  Continue without login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
