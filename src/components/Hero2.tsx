import React from "react";

const Hero2 = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-[50px] lg:px-[131px] py-10 md:py-20 flex flex-col items-center justify-center">
      {/* Title Section */}
      <div className="w-full text-center">
        <h1 className="font-poppins font-[700] text-[24px] sm:text-[28px] md:text-[32px] text-[#333333]">
          Browse The Range
        </h1>

        {/* Paragraph Section */}
        <p className="mt-4 md:mt-6 font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#555555]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full flex flex-wrap justify-center md:justify-between mt-8 md:mt-[45px] gap-6 lg:gap-8">
        {/* Dining Image */}
        <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%]">
          <img
            src="/dining.png"
            alt="Dining Area"
            className="w-full hover:scale-105 h-[240px] sm:h-[300px] md:h-[400px] lg:h-[480px] object-cover"
          />
          <h2 className="mt-4 font-[600] text-center text-[18px] sm:text-[20px] md:text-[24px] text-[#333333]">
            Dining
          </h2>
        </div>

        {/* Living Room Image */}
        <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%]">
          <img
            src="/living.png"
            alt="Living Room"
            className="w-full h-[240px] hover:scale-105 sm:h-[300px] md:h-[400px] lg:h-[480px] object-cover"
          />
          <h2 className="mt-4 font-[600] text-center text-[18px] sm:text-[20px] md:text-[24px] text-[#333333]">
            Living
          </h2>
        </div>

        {/* Bedroom Image */}
        <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%]">
          <img
            src="/bedroom.png"
            alt="Bedroom"
            className="w-full hover:scale-105 h-[240px] sm:h-[300px] md:h-[400px] lg:h-[480px] object-cover"
          />
          <h2 className="mt-4 font-[600] text-center text-[18px] sm:text-[20px] md:text-[24px] text-[#333333]">
            Bedroom
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
