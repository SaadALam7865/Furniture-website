"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { TiLocation } from 'react-icons/ti';
import { FaPhone } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import React from 'react';

const Page = () => {
  return (
    <div>
      <Header />

      <main  className='font-poppins h-[1700px] '  id="contact">
         
        {/* Background Section */}
        <div
          className="h-[316px] w-full mt-24 opacity-[70%] relative"
          style={{
            backgroundImage: "url('/bg-img.jpeg')",
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat", 
          }}
        >
          {/* Content Wrapper */}
          <div className="flex flex-col items-center justify-center h-full">
            <img className='h-[77px] w-[77px] ' src="/logo.png" alt="" />
            <h1 className="font-Poppins font-[500] text-[48px] text-[#000000]">
             Contact
            </h1>

            {/* Breadcrumb Navigation */}
            <div className="flex items-center mt-4">
              <p className="text-[#000000] font-poppins text-[16px] font-[500]">
                Home
              </p>
              <FaAngleRight className="mx-2" />
              <p className="text-[#000000] font-poppins text-[16px] font-[300]">
              Contact
              </p>
            </div>
          </div>
        </div>

        {/* Heading Section */}
        <div className="flex flex-col items-center mt-52">
          <h1 className="text-4xl font-semibold text-black font-poppins">
            Get In Touch With Us
          </h1>
          <p className="text-lg mt-5 text-gray-400 font-normal font-poppins max-w-3xl text-center">
            For More Information About Our Product & Services. Please Feel Free To Drop Us 
            An Email Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col  md:flex-row mx-16 items-start md:space-x-12 mt-40">
          
          {/* Contact Info */}
          <div className="flex-1 mx-20  mt-10 md:mt-0">
            
            <div className="mb-8 space-y-3 ">
              <TiLocation className="inline-block text-3xl mr-4" />
              <div>
                <h2 className="font-bold text-gray-900 text-2xl">Address</h2>
                <p className="font-medium text-black mt-1">
                  236 5th Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="mb-8 space-y-3 ">
              <FaPhone className="inline-block text-3xl mr-4" />
              <div>
                <h2 className="font-bold text-gray-900 text-2xl">Phone</h2>
                <p className="text-black mt-1 font-medium">Mobile: +(84) 546-6789</p>
                <p className="text-black mt-1 font-medium">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="mb-8 space-y-3 ">
              <IoTimeSharp className="inline-block text-3xl mr-4" />
              <div>
                <h2 className="font-bold text-gray-900 text-2xl">Working Time</h2>
                <p className="text-black mt-1 font-medium">Monday-Friday: 9:00-22:00</p>
                <p className="text-black mt-1 font-medium">Saturday-Sunday: 9:00-21:00</p>
              </div>
            </div>

          </div>

          {/* Form Section */}
          <div className="flex-1 w-[500px] md:mr-24  md:mt-0">
            <form className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block font-Poppins font-[500] text-[16px] mb-2 text-[#000000]">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-[528px] p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-[#000000]">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-[528px] p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-[#000000]">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-[528px] p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-[#000000]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-[528px] p-3 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter Your Message"
                  required
                />
              </div>

              <div className='py-5'>
                <button 
                  type="submit"
                  className="text-white px-4 bg-yellow-700 w-36 h-11 rounded hover:bg-yellow-800 transition-all"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        
        </div>

        {/* ------------------------------------ */}
        {/* Features Section */}
<div className="flex justify-between py-5 px-3 hover:border-yellow-400 border-2 border-[#9e9a9a] mx-16 mt-36">
  {/* Feature 1 */}
  <div className="w-1/5 flex gap-4 items-center">
    <div className="w-14 h-14">
      <img src="/Group.png" alt="High Quality" className="w-full h-full object-contain" />
    </div>
    <div className="w-full">
      <h3 className="font-Poppins font-semibold text-xl text-[#242424]">High Quality</h3>
      <p className="font-Poppins text-base text-[#898989]">Crafted from top materials</p>
    </div>
  </div>

  {/* Feature 2 */}
  <div className="w-1/5 flex gap-4 items-center">
    <div className="w-14 h-14">
      <img src="/guarantee.png" alt="Warranty Protection" className="w-full h-full object-contain" />
    </div>
    <div className="w-full">
      <h3 className="font-Poppins font-semibold text-xl text-[#242424]">Warranty Protection</h3>
      <p className="font-Poppins text-base text-[#898989]">Over 2 years</p>
    </div>
  </div>

  {/* Feature 3 */}
  <div className="w-1/5 flex gap-4 items-center">
    <div className="w-14 h-14">
      <img src="/shipping.png" alt="Free Shipping" className="w-full h-full object-contain" />
    </div>
    <div className="w-full">
      <h3 className="font-Poppins font-semibold text-xl text-[#242424]">Free Shipping</h3>
      <p className="font-Poppins text-base text-[#898989]">Delivered to your door</p>
    </div>
  </div>

  {/* Feature 4 */}
  <div className="w-1/5 flex gap-4 items-center">
    <div className="w-14 h-14">
      <img src="/customer-support.png" alt="24/7 Support" className="w-full h-full object-contain" />
    </div>
    <div className="w-full">
      <h3 className="font-Poppins font-semibold text-xl text-[#242424]">24/7 Support</h3>
      <p className="font-Poppins text-base text-[#898989]">We’re always here to help</p>
    </div>
  </div>
</div>

        

        {/* Footer Section */}
        <div className="h-screen flex mt-36">
          <div 
            className="h-[20%] w-full bg-cover bg-center" 
            style={{ backgroundImage: "url('/cool.jpg')" }} 
          ></div>
        </div>

      </main>

      <Footer />
    </div >
  );
}

export default Page;
