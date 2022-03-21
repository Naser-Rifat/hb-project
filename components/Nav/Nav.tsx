import React from "react";

const Nav = () => {
  return (
    <nav className="w-full h-[3rem] ">
      <ul className="flex justify-center items-center py-auto">
        <li className="text-[.6em]  font-sans mx-2 mt-[5px] text-white">
          Home{" "}
        </li>
        <li className="text-[.6em] font-sans mx-2 mt-[5px] text-white">
          Coupon
        </li>
        <li className="text-[.6em] font-sans mx-2 mt-[5px] text-white">
          Feature Service
        </li>
        <li className="text-[.6em] font-sans mx-2 mt-[5px] text-white">
          Consultations
        </li>
        <li className="text-[.6em] font-sans mx-2 mt-[5px] text-white">
          Packages
        </li>
        <li className="text-[.6em] font-sans mx-2 mt-[5px] text-white">
          Best Deals
        </li>
        <li className="text-[.6em] font-sans mx-2 mt-[5px] text-white">
          Self checkups
        </li>
        <li className="text-[.6em] font-sans mx-2 mt-[5px] text-white">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
