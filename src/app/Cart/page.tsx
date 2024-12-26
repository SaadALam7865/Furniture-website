import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { FaAngleRight } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <Header />

{/* Background Section */}
<div
  className="h-[316px] w-full font-bold mt-24 opacity-[70%] relative"
  style={{
    backgroundImage: "url('/bg-img.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Content Wrapper */}
  <div className="flex flex-col items-center justify-center h-full">
    <img className="h-[77px] w-[77px]" src="/logo.png" alt="" />
    <h1 className="font-Poppins font-[500] text-[48px] text-[#000000]">
      Cart
    </h1>

    {/* Breadcrumb Navigation */}
    <div className="flex items-center mt-4">
      <Link href="/">
        <p className="text-[#000000] font-poppins text-[16px] font-semibold">
          Home
        </p>
      </Link>
      <FaAngleRight className="mx-2" />
      <p className="text-[#000000] font-poppins text-[16px] font-[300]">
        Cart
      </p>
    </div>
  </div>
      </div>
      {/* cart sections */}
      <div className="w-full flex flex-col lg:flex-row items-center h-auto mt-16">
  <div className="w-full lg:max-w-[1452px] h-auto flex flex-col lg:flex-row items-center mt-8 lg:ml-28">
    <div className="w-full lg:max-w-[817px] h-auto p-4 mt-10 border border-gray-400">
      {/* Header Section */}
      <div className="flex justify-around h-[55px] mt-8">
        <h2 className="text-base font-Poppins font-medium text-black">Product</h2>
        <h2 className="text-base font-Poppins font-medium text-black">Price</h2>
        <h2 className="text-base font-Poppins font-medium text-black">Quantity</h2>
        <h2 className="text-base font-Poppins font-medium text-black">Subtotal</h2>
      </div>
      {/* Product Section */}
      <div className="flex items-center mt-8">
        {/* Image Section */}
        <div className="w-[90px] h-[90px]">
          <div className="w-full h-full bg-[#fbe6b5] border-2 border-gray-300 rounded-sm">
            <Image src="/sofa.png" alt="sofa" height={90} width={111} />
          </div>
        </div>
        {/* Text Section */}
        <div className="flex-grow flex items-center ml-4">
          <h3 className="flex-1 font-Poppins text-gray-500 text-base">Asgaard sofa</h3>
          <h3 className="flex-1 font-Poppins text-gray-500 text-base text-center">Rs. 250,000.00</h3>
          <div className="w-8 h-8 font-Poppins flex  justify-center items-center border border-gray-400 rounded-sm hover:bg-[#B88E2F] hover:text-black">
            <p className="text-base">1</p>
          </div>
          <h3 className="flex-1 text-black text-base text-right">Rs. 250,000.00</h3>
        </div>
        {/* Icon Section */}
        <div className="ml-2">
          <img className="w-[21px] h-[21px]" src="/Vector (4).png" alt="vector" />
        </div>
      </div>
    </div>

    {/* Cart Totals Section */}
    <div className="w-full lg:max-w-[393px] h-auto mt-10 lg:mt-0 lg:ml-20 p-4">
      <h1 className="text-center font-Poppins text-2xl font-semibold">Cart Totals</h1>
      <div className="flex justify-between mt-8">
        <h3 className="text-base font-medium">Subtotal</h3>
        <h3 className="text-base font-Poppins font-medium text-gray-500">Rs. 250,000.00</h3>
      </div>
      <div className="flex justify-between mt-8">
        <h3 className="text-base font-medium">Total</h3>
        <h3 className="text-lg font-Poppins  font-medium text-[#B88E2F]">Rs. 250,000.00</h3>
      </div>
      {/* Button Section */}
      <div className="mt-10">
        <Link href="/Checkout">
          <button className="w-full hover:border-[#898989] transition h-[60px] rounded-xl border border-black text-black text-lg font-medium hover:bg-[#B88E2F] hover:text-white">
            Check Out
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

       {/* Feature 1 */}
       <div className="w-full space-y-6 md:space-y-0 items-center  max-w-[1500px] border-2 border-[#d6d3d3] hover:border-[#B88E2F] flex flex-wrap justify-around  h-auto mt-40 mx-auto p-8 gap-6">
        {/* Feature 1 */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-1/5 flex hover:scale-105 gap-4 items-center">
          <div className="w-14 h-14">
            <img
              src="/Group.png"
              alt="High Quality"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-Poppins font-semibold text-lg md:text-xl text-[#242424]">
              High Quality
            </h3>
            <p className="font-Poppins text-sm md:text-base text-[#898989]">
              Crafted from top materials
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-1/5 flex hover:scale-105 gap-4 items-center">
          <div className="w-14 h-14">
            <img
              src="/guarantee.png"
              alt="Warranty Protection"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-Poppins font-semibold text-lg md:text-xl text-[#242424]">
              Warranty Protection
            </h3>
            <p className="font-Poppins text-sm md:text-base text-[#898989]">
              Over 2 years
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-1/5 flex hover:scale-105 gap-4 items-center">
          <div className="w-14 h-14">
            <img
              src="/shipping.png"
              alt="Free Shipping"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-Poppins font-semibold text-lg md:text-xl text-[#242424]">
              Free Shipping
            </h3>
            <p className="font-Poppins text-sm md:text-base text-[#898989]">
              Delivered to your door
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-1/5 flex hover:scale-105 gap-4 items-center">
          <div className="w-14 h-14">
            <img
              src="/customer-support.png"
              alt="24/7 Support"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-Poppins font-semibold text-lg md:text-xl text-[#242424]">
              24/7 Support
            </h3>
            <p className="font-Poppins text-sm md:text-base text-[#898989]">
              We’re always here to help
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
    
  );
};

export default page;
