import Image from 'next/image';
import React from 'react';

const FeatureCoupons = () => {
  return (
    <section className="bg-white py-[5rem] ">
        <div className="pb-[2rem]  w-[55rem] mx-auto">
        <div className="flex justify-between items-center pb-[2rem] w-full h-[2rem] ">
          <h1 className="text-[1.1em] font-semibold">Our Feature Service</h1>
          
            <button className="py-1  px-3 mx-2 font-sans text-[.7em] text-black bg-[#F2F5F7]  rounded-full">
              View All
            </button>
            
          
        </div>

        <div className="grid grid-cols-12 gap-3">
        <div
           
            className=" col-span-6 flex p-3 border-2 rounded-2xl drop-shadow-lg bg-white "
          >
           
            <div className=" ">
        <Image width="200" height="270" src="/images/landingpage/featurecoupon/coupon.png" alt="" />

           </div>
            <div className="ml-3 w-full">
            <Image width="35" height="45" src="/images/landingpage/featurecoupon/ibn-sina-logo.png" alt="" />
             <h2 className="font-sans font-semibold text-[1rem] mt-[.3rem]">IBN SINA</h2>
         <p className="font-bold text-[.7em] tracking-normal leading-snug	 w-[12rem] mt-[.8em]">Information on how to participate forms part of these Terms & Conditions. </p>
 <div className="flex justify-between items-center">
   <h3 className="text-[1em] font-bold mt-[.4em]">10% OFF</h3>
   <button className=" px-4 py-2 text-[.7em] text-white rounded bg-[#2C62D6]"> Coupons</button>
 </div>
           </div>
             
            
            </div>
            <div
           
           className=" col-span-6 flex p-3 border-2 drop-shadow-lg rounded-2xl bg-white "
         >
          
           <div className=" ">
       <Image width="200" height="270" src="/images/landingpage/featurecoupon/coupon.png" alt="" />

          </div>
           <div className="ml-3 w-full">
           <Image width="35" height="45" src="/images/landingpage/featurecoupon/ibn-sina-logo.png" alt="" />
            <h2 className="font-sans font-semibold text-[1rem] mt-[.3rem]">IBN SINA</h2>
        <p className="font-bold text-[.7em] tracking-normal leading-snug	 w-[12rem] mt-[.8em]">Information on how to participate forms part of these Terms & Conditions. </p>
<div className="flex justify-between items-center">
  <h3 className="text-[1em] font-bold mt-[.4em]">10% OFF</h3>
  <button className=" px-4 py-2 text-[.7em] text-white rounded bg-[#2C62D6]"> Coupons</button>
</div>
          </div>
            
           
           </div>
       
      
        </div>
      </div>
    </section>
  );
};

export default FeatureCoupons;