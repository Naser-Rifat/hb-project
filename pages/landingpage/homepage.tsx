import Image from "next/image";
import React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

const homepage = () => {
  return (
    <section className="relative min-w-screen ">
      <div className=" mx-auto bannerBackground h-[100vh] ">
        <div className="customContainer ">
          <Header />
          <hr className="text-normal text-gray-100 " />
          <Nav />
          <Banner />
        </div>
        {/* <Image
          // width="1000"
          // height="100"
          layout="fill"
          className="w-full  absolute mt-[15rem] "
          src="/images/landingpage/banner/layer-2.svg"
          alt=""
        />
        <Image
          // width="1000"
          // height="100"
          layout="fill"
          className="w-full absolute "
          src="/images/landingpage/banner/layer-1.svg"
          alt=""
        /> */}
      </div>
      <div></div>
    </section>
  );
};

export default homepage;
