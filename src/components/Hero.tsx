import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row  mt-[25px]">
      {/* Hero Image */}
      <img
        src="/hero-img.jpeg"
        alt="hero"
        className="w-full md:w-[60%] h-[50vh] md:h-full object-cover  "
      />

      {/* Hero Text Section */}
      <div className="w-full  md:w-[40%] h-auto md:h-full flex flex-col justify-center px-4 md:pr-10 md:mt-8 text-center md:text-left">
        <h3 className="font-poppins font-semibold text-[14px] md:text-[16px] tracking-wide">
          New Arrival
        </h3>

        {/* "Discover Our" and "New Collection" stacked */}
        <h1 className="font-poppins font-bold text-[32px] md:text-[40px] lg:text-[52px] text-[#B88E2F] mt-4 md:mt-5">
          <span className="block">Discover Our</span>
          <span className="block">New Collection</span>
        </h1>

        {/* Paragraph */}
        <p className="text-[14px] md:text-[16px] mt-4 md:mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>

        {/* Button Section */}
        <div className="mt-6 md:mt-8">
          <button className="bg-[#B88E2F] hover:bg-yellow-700 py-3 md:py-4 px-8 md:px-16 font-poppins font-[700] text-[14px] md:text-[16px] text-white rounded-md shadow-md transition-transform duration-300 hover:scale-105">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
