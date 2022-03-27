import Image from 'next/image';
import React from 'react';
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <section className="relative mt-[30rem] pt-10 bg-white m-0">
      
     
     <img
        
        className="absolute bottom-0 lg:w-full bg-white"
        src="/footer-bg.svg"
        alt=""
      />
    <div className=" relative w-[55rem] -mt-[30rem] mx-auto  ">
   <div className="absolute flex ">
  <div className="">
        <Image width="120" height="70" src="/images/hb-full-logo.svg" alt="logo" />
        <div className=" flex items-center">
          <div className="mx-2">
            <Image width="10" className="" height="10" src="/images/landingpage/footer/phone.svg" alt="logo" />
            </div> 
          <div className="text-[.8em] text-white mt-[.2rem]">09613- 892</div> 
          </div>
        <div className=" flex items-start">
          <div className="mx-2">
            <Image width="20" className="" height="20" src="/images/landingpage/footer/email.svg" alt="logo" />
            </div> 
          <div className="text-[.8em] text-white mt-[.2rem]">Suite # A6, House # Sha, 22 Gulshan Badda Link Rd, Dhaka 1212</div> 
          </div>

          <div className="flex mt-[2rem]">
            <FaFacebookF className="mr-2 text-white"/>
            <BsInstagram className="mx-2 text-white"/>
            <FaLinkedinIn className="mx-2 text-white" />
           
          </div>

          <div>
          <Image width="150" height="80" src="/images/landingpage/footer/playstore.svg" className="" alt=""/>
          </div>
        
     
  </div>
 <div className=" mx-2 mt-[5rem] w-full grid grid-cols-4 gap-4">
   <div className="w-full ml-4 mr-10 "> 
   <h1 className="text-white    font-sans tracking-wide text-[.97em]  leading-10">About</h1> 
    <ul>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Our Story</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Our Care Props</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">HealthBondhu App</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Reviews</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Covid-19 Advisor</li>
    </ul>
   
   </div>
   <div className="w-full mx-10 "> 
   <h1 className="text-white    font-sans tracking-wide text-[.97em]  leading-10">Health Care</h1> 
    <ul>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Home Care</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Coupon</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Featured Service</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Consultations </li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Packages</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Best Deals</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Todays Deals</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Self Checkup</li>
    </ul>
   
   </div>

   <div className="w-full mx-10"> 
   <h1 className="text-white    font-sans tracking-wide text-[.97em]  leading-10">Healthbondhu</h1> 
    <ul>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Consult Doctor Online </li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Doctors</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Medicines </li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Blog </li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Testimonials</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Join US</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Terms of Use</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Contact Us</li>
    </ul>
   
   </div>

   <div className="w-full mx-[4.8rem]"> 
   <h1 className="text-white    font-sans tracking-wide text-[.97em]  leading-10">Connect</h1> 
    <ul>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Support</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Contact Us</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Pressroom</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Reviews</li>
      <li className="text-white font-sans tracking-wide  text-[.7em] leading-8">Careers</li>
    </ul>
   
   </div>
  
   
 
      
   </div>
   </div>
   <div className='absolute mt-[26rem] '>
     <p className="t text-[.8em] font-normal text-gray-400 font-sans tracking-wide" >Policies &copy; 2022 Healthbondhu Ltd. All rights reserved.</p>
   </div>
   
</div>
    </section>
  );
};

export default Footer;