import React from "react";
import signup from "../styles/Signup.module.css";

const SignUp = () => {
  return (
    <section className={`w-full m-0 p-0${signup.signUpLayout}`}>
      <div className=" grid lg:grid-cols-2 m-0 p-0 ">
        <div className=" hidden lg:block w-full h-full bg-[#E5E5E5]">
          <div>
            <img
              className="w-3/4 ml-40"
              src="https://i.ibb.co/TRmrKS5/Group-2654.png"
              alt="img"
            />
          </div>
        </div>
        <div className=" hidden lg:block  pt-20 pb-32 lg:px-10 w-full h-full bg-[#E5E5E5]">
          <div className="ml-32">
            <h1>
              {" "}
              Signup to{" "}
              <span className="font-bold text-blue-800">Health Bondhu</span>
            </h1>
            <p className="text-sm text-gray-400 mb-8">
              Sign Up to Healthbondu and amazing thing near around you
            </p>
          </div>
          <form className="flex flex-col justify-center px-12	 items-center ">
            <span>
              <input
                placeholder="Phone Number"
                className=" bg-white outline-none text-sm mt-2 rounded-full p-5  w-80 h-12 lg:w-80 "
              />
            </span>
            <span>
              <input
                placeholder="Full Name"
                className=" bg-white outline-none text-sm mt-2 rounded-full p-5 w-80 h-12 lg:w-80 "
              />
            </span>
            <span>
              <input
                placeholder="Password"
                className=" bg-white outline-none text-sm mt-2 rounded-full p-5 w-80 h-12 lg:w-80 "
              />
            </span>
            <span>
              <input
                placeholder="Refer code (Option)"
                className=" bg-white outline-none text-sm mt-2 rounded-full p-5 w-80  h-12 lg:w-80 "
              />
            </span>
            <button className="p-3 bg-[#2C62D6] text-sm rounded-full text-white px-20 mt-10">
              Sign Up
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-1 text-center  ">
            Or quick continue with
          </p>

          <div className="mt-5 text-center flex justify-center">
            <div className="  flex justify-center items-center text-white  rounded-full mx-2 w-5 h-9 bg-[#3B5999] p-5 ">
              <span>f</span>
            </div>
            <div className="flex justify-center items-center text-white  rounded-full mx-2 w-5 h-9 bg-[#DD4B39] p-5 ">
              <span>G</span>
            </div>
          </div>
          <div className=" flex justify-center items-start   mt-2 ml-20 lg:mx-auto  w-80 lg:w-full ">
            {" "}
            <svg
              width="18"
              height="18"
              className="mt-1  "
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 13.5H14.25V15H3.75V13.5ZM7.2 11.475L3.75 8.025L5.25 6.6L7.2 8.55L12.75 3L14.25 4.5L7.2 11.475Z"
                fill="#3E6ED7"
              />
            </svg>
            <p className="text-sm">
              By signing up you accept our{" "}
              <span className="font-bold m-0">Terms & Conditions</span> and
              <span className="font-bold m-0"> Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>

      {/* mobilw view part */}

      <div className="block lg:hidden w-screen mx-auto">
        <div className={signup.section}>
          <div className={signup.top}>
            <svg
              width="375"
              height="235"
              className={signup.top_mask_curve}
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
            <svg
              width="40"
              height="40"
              className={signup.top_user_icon}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.4307 32.6432C37.4273 30.3979 35.9712 28.3583 34.1435 26.6382C32.3214 24.9131 30.1629 23.5377 27.7872 22.5879C27.7659 22.5779 27.7446 22.5729 27.7234 22.5628C31.0372 20.3015 33.1914 16.6181 33.1914 12.4623C33.1914 5.57789 27.2872 0 20 0C12.7128 0 6.8086 5.57789 6.8086 12.4623C6.8086 16.6181 8.96284 20.3015 12.2766 22.5678C12.2554 22.5779 12.2341 22.5829 12.2128 22.593C9.82986 23.5427 7.69157 24.9045 5.85648 26.6432C4.03048 28.3647 2.57461 30.4039 1.56927 32.6482C0.58163 34.8455 0.0489727 37.2012 0.00013301 39.5879C-0.00128669 39.6416 0.00867084 39.6949 0.0294191 39.7449C0.0501674 39.7948 0.0812866 39.8403 0.120943 39.8787C0.160599 39.9171 0.20799 39.9476 0.260324 39.9685C0.312657 39.9893 0.368874 40 0.425662 40H3.61713C3.85117 40 4.03734 39.8241 4.04266 39.608C4.14904 35.7286 5.79797 32.0955 8.71284 29.3417C11.7288 26.4925 15.7341 24.9246 20 24.9246C24.2659 24.9246 28.2712 26.4925 31.2872 29.3417C34.202 32.0955 35.851 35.7286 35.9573 39.608C35.9627 39.8291 36.1488 40 36.3829 40H39.5743C39.6311 40 39.6873 39.9893 39.7397 39.9685C39.792 39.9476 39.8394 39.9171 39.8791 39.8787C39.9187 39.8403 39.9498 39.7948 39.9706 39.7449C39.9913 39.6949 40.0013 39.6416 39.9999 39.5879C39.9467 37.1859 39.4201 34.8492 38.4307 32.6432ZM20 21.1055C17.5585 21.1055 15.2607 20.206 13.532 18.5729C11.8032 16.9397 10.8511 14.7688 10.8511 12.4623C10.8511 10.1558 11.8032 7.98492 13.532 6.35176C15.2607 4.71859 17.5585 3.8191 20 3.8191C22.4415 3.8191 24.7393 4.71859 26.468 6.35176C28.1968 7.98492 29.1489 10.1558 29.1489 12.4623C29.1489 14.7688 28.1968 16.9397 26.468 18.5729C24.7393 20.206 22.4415 21.1055 20 21.1055Z"
                fill="white"
              />
            </svg>
            <h1 className={signup.top_signup_text}>Sign Up</h1>
            <p className={signup.top_signup_description}>
              Sign Up Sign Up to Healthbondu and amazing thing near around you
            </p>
          </div>

          <div className={signup.inputField}>
            <form className={signup.fromField}>
              <div className={signup.phoneDiv}>
                <svg
                  width="10"
                  height="17"
                  className="inline "
                  viewBox="0 0 10 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1.5C8.26522 1.5 8.51957 1.60536 8.70711 1.79289C8.89464 1.98043 9 2.23478 9 2.5V14.5C9 14.7652 8.89464 15.0196 8.70711 15.2071C8.51957 15.3946 8.26522 15.5 8 15.5H2C1.73478 15.5 1.48043 15.3946 1.29289 15.2071C1.10536 15.0196 1 14.7652 1 14.5V2.5C1 2.23478 1.10536 1.98043 1.29289 1.79289C1.48043 1.60536 1.73478 1.5 2 1.5H8ZM2 0.5C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V14.5C0 15.0304 0.210714 15.5391 0.585786 15.9142C0.960859 16.2893 1.46957 16.5 2 16.5H8C8.53043 16.5 9.03914 16.2893 9.41421 15.9142C9.78929 15.5391 10 15.0304 10 14.5V2.5C10 1.96957 9.78929 1.46086 9.41421 1.08579C9.03914 0.710714 8.53043 0.5 8 0.5H2Z"
                    fill="#575757"
                  />
                </svg>
                <input
                  placeholder="Phone Number"
                  className={signup.inputPhone}
                />
              </div>
              <div className={signup.nameDiv}>
                {" "}
                <svg
                  width="14"
                  height="17"
                  viewBox="0 0 14 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.44262 10.2846C9.34478 10.2526 8.72631 9.97379 9.11278 8.79902H9.10724C10.1146 7.76149 10.8845 6.09195 10.8845 4.44826C10.8845 1.92087 9.20385 0.595947 7.25062 0.595947C5.29616 0.595947 3.62478 1.92025 3.62478 4.44826C3.62478 6.09872 4.39031 7.77502 5.40385 8.8101C5.79893 9.84641 5.09247 10.231 4.94478 10.2852C2.89924 11.0249 0.499237 12.3732 0.499237 13.7043V14.2033C0.499237 16.0169 4.01554 16.4292 7.2697 16.4292C10.5288 16.4292 14.0008 16.0169 14.0008 14.2033V13.7043C14.0008 12.3332 11.5891 10.9953 9.44262 10.2846Z"
                    fill="#575757"
                  />
                </svg>
                <input placeholder="Full Name" className={signup.inputName} />
              </div>
              <div className={signup.passwordDiv}>
                <svg
                  width="13"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.25 4.83329H11.5833C11.7601 4.83329 11.9297 4.90353 12.0547 5.02855C12.1798 5.15358 12.25 5.32315 12.25 5.49996V13.5C12.25 13.6768 12.1798 13.8463 12.0547 13.9714C11.9297 14.0964 11.7601 14.1666 11.5833 14.1666H0.916667C0.739856 14.1666 0.570286 14.0964 0.445262 13.9714C0.320238 13.8463 0.25 13.6768 0.25 13.5V5.49996C0.25 5.32315 0.320238 5.15358 0.445262 5.02855C0.570286 4.90353 0.739856 4.83329 0.916667 4.83329H2.25V4.16663C2.25 3.10576 2.67143 2.08834 3.42157 1.3382C4.17172 0.588053 5.18913 0.166626 6.25 0.166626C7.31087 0.166626 8.32828 0.588053 9.07843 1.3382C9.82857 2.08834 10.25 3.10576 10.25 4.16663V4.83329ZM1.58333 6.16663V12.8333H10.9167V6.16663H1.58333ZM5.58333 8.83329H6.91667V10.1666H5.58333V8.83329ZM2.91667 8.83329H4.25V10.1666H2.91667V8.83329ZM8.25 8.83329H9.58333V10.1666H8.25V8.83329ZM8.91667 4.83329V4.16663C8.91667 3.45938 8.63572 2.7811 8.13562 2.28101C7.63552 1.78091 6.95724 1.49996 6.25 1.49996C5.54276 1.49996 4.86448 1.78091 4.36438 2.28101C3.86428 2.7811 3.58333 3.45938 3.58333 4.16663V4.83329H8.91667Z"
                    fill="#575757"
                  />
                </svg>

                <input
                  placeholder="Password"
                  className={signup.inputPassword}
                />
              </div>
              <div className={signup.referDiv}>
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.08333 10.2442L6.46125 12.6221L5.87208 13.2113L4.08333 11.4225L2.29458 13.2113L1.70542 12.6221L4.08333 10.2442ZM2.41667 1.25C2.41667 0.918479 2.54836 0.600537 2.78278 0.366117C3.0172 0.131696 3.33515 0 3.66667 0H7C7.33152 0 7.64946 0.131696 7.88388 0.366117C8.1183 0.600537 8.25 0.918479 8.25 1.25V1.66667H9.91667V9.58333H0.75V1.66667H2.41667V1.25ZM2.41667 2.5H1.58333V3.33333H2.41667V2.5ZM2.41667 4.16667H1.58333V8.75H3.66667V6.25H7V8.75H9.08333V4.16667H8.25V4.58333C8.25 4.91485 8.1183 5.2328 7.88388 5.46722C7.64946 5.70164 7.33152 5.83333 7 5.83333H3.66667C3.33515 5.83333 3.0172 5.70164 2.78278 5.46722C2.54836 5.2328 2.41667 4.91485 2.41667 4.58333V4.16667ZM8.25 3.33333H9.08333V2.5H8.25V3.33333ZM6.16667 8.75V7.08333H4.5V8.75H6.16667ZM3.66667 0.833333C3.55616 0.833333 3.45018 0.877232 3.37204 0.955372C3.2939 1.03351 3.25 1.13949 3.25 1.25V4.58333C3.25 4.69384 3.2939 4.79982 3.37204 4.87796C3.45018 4.9561 3.55616 5 3.66667 5H7C7.11051 5 7.21649 4.9561 7.29463 4.87796C7.37277 4.79982 7.41667 4.69384 7.41667 4.58333V1.25C7.41667 1.13949 7.37277 1.03351 7.29463 0.955372C7.21649 0.877232 7.11051 0.833333 7 0.833333H3.66667ZM4.91667 2.5V1.25H5.75V2.5H7V3.33333H5.75V4.58333H4.91667V3.33333H3.66667V2.5H4.91667Z"
                    fill="#575757"
                  />
                </svg>

                <input
                  placeholder="Refer Code (Optional)"
                  className={signup.inputRefer}
                />
              </div>
              <div className={signup.accountSignUp}> Sign Up</div>
            </form>
            <p className={signup.bottom_singup_text}>Or quick continue with</p>
            <div>
              <svg
                width="11"
                height="19"
                className={signup.facebook_signin}
                viewBox="0 0 11 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.86327 18.8V10.2991H9.62748L10.0384 6.9707H6.86327V4.85066C6.86327 3.89021 7.1212 3.23263 8.44982 3.23263H10.1333V0.265201C9.31421 0.174125 8.49085 0.13015 7.66704 0.133476C5.22374 0.133476 3.54622 1.68098 3.54622 4.52187V6.96448H0.800003V10.2929H3.55222V18.8H6.86327Z"
                  fill="white"
                />
              </svg>
              <svg
                width="19"
                height="19"
                className={signup.google_signin}
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6162 7.7164C18.7352 8.34121 18.8 8.99447 18.8 9.67617C18.8 15.0084 15.1582 18.8 9.65775 18.8C8.40688 18.8003 7.16819 18.5592 6.01246 18.0903C4.85673 17.6214 3.80662 16.9339 2.92212 16.0671C2.03762 15.2004 1.33607 14.1713 0.857558 13.0388C0.379046 11.9062 0.13295 10.6924 0.133332 9.46663C0.13295 8.24086 0.379046 7.02702 0.857558 5.89448C1.33607 4.76194 2.03762 3.73289 2.92212 2.86614C3.80662 1.99938 4.85673 1.31191 6.01246 0.842998C7.16819 0.374086 8.40688 0.132927 9.65775 0.133301C12.2295 0.133301 14.3784 1.06057 16.027 2.56619L13.3421 5.19723V5.19059C12.3427 4.25764 11.0742 3.77884 9.65775 3.77884C6.5152 3.77884 3.9609 6.38049 3.9609 9.46095C3.9609 12.5405 6.5152 15.1478 9.65775 15.1478C12.5091 15.1478 14.45 13.5502 14.8486 11.3562H9.65775V7.7164H18.6171H18.6162Z"
                  fill="white"
                />
              </svg>
              <svg
                width="12"
                height="13"
                className={signup.bottom_text_ok_sign}
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 11.2939H11.25V12.7939H0.75V11.2939ZM4.2 9.26895L0.75 5.81894L2.25 4.39395L4.2 6.34395L9.75 0.793945L11.25 2.29395L4.2 9.26895Z"
                  fill="#3E6ED7"
                />
              </svg>
              <p className={signup.bottom_text}>
                By signing up you accept our Terms & Conditions and Privacy
                Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
