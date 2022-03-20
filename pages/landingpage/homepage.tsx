import React from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

const homepage = () => {
  return (
    <div className="xl:container mx-auto">
      <Header />
      <Nav />
      <div className="w-full flex h-80 bg-red-500">
        <div className="w-full flex flex-col  h-full bg-gray-300  ">
          <div className="w-full h-full bg-fuchsia-300"> </div>
          <div className="w-full h-full bg-red-500"> </div>
          <div className="w-full flex h-full bg-orange-400">
            <div className="w-full h-full bg-pink-500"></div>
            <div className="w-full h-full bg-purple-500"></div>
          </div>
        </div>
        <div className="w-full h-full bg-blue-300  "></div>
      </div>
    </div>
  );
};

export default homepage;
