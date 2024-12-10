import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FaAngleRight } from "react-icons/fa";
import Products from "@/components/Products";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Full height container */}
      <Header />

      {/* Background Section */}
      <div
        className="h-[316px] w-full mt-24 opacity-[70%] relative"
        style={{
          backgroundImage: "url('/bg-img.jpeg')",
          backgroundSize: "cover", // Image covers entire div
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents image from repeating
        }}
      >
        {/* Content Wrapper */}
        <div className="flex flex-col items-center justify-center h-full">
          {/* Page Title */}
          <h1 className="font-Poppins font-[500] text-[48px] text-[#000000]">
            Shop
          </h1>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center mt-4">
            <p className="text-[#000000] font-poppins text-[16px] font-[500]">
              Home
            </p>
            <FaAngleRight className="mx-2" />
            <p className="text-[#000000] font-poppins text-[16px] font-[300]">
              Shop
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="h-[100px] border-2 border-[#9F9F9F]">
          <div className="flex items-center gap-2 mt-5 ml-8">
            <img
              className="w-[25px] h-[25px] border-[1px]"
              src="/nuts.png"
              alt=""
            />
            <p className="w-[48px] h-[30px] mt-2">Filter</p>
            <img
              className="w-[25px] h-[25px] ml-8"
              src="/vector.png"
              alt=""
            />
            <img
              className="w-[25px] h-[25px] ml-8"
              src="/vector (1).png"
              alt=""
            />
            <div className="flex-1 border-[1px] ml-12">
              <p className="font-Poppins font-normal text-[16px] text-[#000000] p-2">
                Showing 1–16 of 32 results
              </p>
            </div>
            <div className="flex gap-8 items-center ml-auto mr-12">
              <p className="font-Poppins font-normal text-[20px]">Show</p>
              <p className="mt-2 font-Poppins font-normal text-[20px] text-[#9F9F9F]">16</p>
            </div>
            <div className="flex items-center gap-4 ml-32">
              <p className="font-Poppins font-normal text-[20px] text-[#000000]">Sort by</p>
              <p className="font-Poppins font-normal text-[20px] text-[#000000]">Default</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1 w-full mt-12 pb-28"> 
        <Products />
        <Products/>
      </div>
        <div className="h-24 w-76 mt-2 flex gap-14 pt-7 justify-center ml-[100px] text-center">
        <div className="h-14 w-14 items-center pt-3 rounded-md bg-[#B88E2F] font-Poppins font-normal text-[20px] text-[#FFFFFF]">
           <p className="font-Poppins font-normal items-center ">1</p>
        </div>
        <div className="h-14 w-14 items-center pt-3 bg-[#F9F1E7] border-2 border-gray-400 rounded-md font-Poppins font-normal text-[20px] text-[#000000]">
           <p className="font-Poppins font-normal items-center ">2</p>
        </div>
        <div className="h-14 w-16 items-center border-2 border-gray-400  pt-3 bg-[#F9F1E7] border-[] rounded-md font-Poppins font-normal text-[20px] text-[#000000]">
           <p className="font-Poppins font-normal items-center ">3</p>
        </div>
        <div className="mt-4">
          <p className="text-[24px]">Next</p>
        </div>
        
        </div>
        <div className="w-full h-auto border-[2px] py-4 border-[#f2daa4] mt-32 flex justify-around items-center">
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

        
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default page;
