import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscReferences } from "react-icons/vsc";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";

const CreateAccount = () => {
  return (
    <section className="">
      <div className="min-w-screen h-full md:hidden ">
        <div className=" flex flex-col h-[100vh] relative   ">
          <div className="absolute w-full h-96 signupPageColor ">
            <svg
              // width="375"
              height="382"
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

            <img
              className="absolute ml-[25px] mt-[95px]"
              src="/images/create-pass.svg"
              alt=""
            />
            <h1 className=" absolute mt-[145px] ml-[25px] text-2xl text-white  [font-weight:500]">
              Create new password
            </h1>
            <p className=" absolute mt-[180px] ml-[25px] text-sm text-white  ">
              Create a new password and please never share it with anyone for
              safe use.
            </p>

            <div className="absolute flex justify-between w-full p-5">
              <p className="text-white">
                <BsArrowLeft className="inline mb-[2px]" /> Back
              </p>
              <img className="" src="/images/hb-logo.svg" alt="" />
            </div>
          </div>

          {/* sign up input field */}

          <div className="absolute w-full  rounded-t-[35px] mt-[270px] h-full  bg-white ">
            <form className="mt-[2rem]  text-center">
              <div className="w-[90%] flex justify-center items-center bg-gray-100 mb-[1rem] h-[3rem] mx-auto rounded-full">
                <img
                  src="/images/changepass.svg"
                  className="  text-gray-500 ml-[1em]"
                />
                <input
                  placeholder="New Password"
                  className=" w-[80%] h-[95%] ml-[1em]  bg-transparent   focus:outline-none"
                />
              </div>
              <div className="w-[90%] flex justify-center items-center bg-gray-100 mb-[1rem] h-[3rem] mx-auto rounded-full">
                <img
                  src="/images/changepass.svg"
                  className="  text-gray-500 ml-[1em]"
                />
                <input
                  placeholder="Confirm new Password"
                  className=" w-[80%] h-[95%] ml-[1em]  bg-transparent   focus:outline-none"
                />
              </div>

              <button className="w-[60%]  h-[4rem] mt-[1.5rem] rounded-full  mb-3  bg-[#406CDA] text-white">
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
