import React from 'react';

const Hero2 = () => {
  return (
    <div className='w-full h-[585px] mt-20 mb-[399px] px-[131px] flex flex-col items-center justify-center'>
      {/* Title Section */}
      <div className='w-full text-center'>
        <h1 className='font-poppins font-[700] text-[32px] text-[#333333]'>
          Browse The Range
        </h1>
        
        {/* Paragraph Section */}
        <p className='mt-[10px] font-poppins font-normal text-[20px] text-[#555555]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-between mt-[30px] gap-8">
        {/* Dining Image */}
        <div className="flex flex-col items-center">
          <img 
            src="/dining.png" 
            alt="Dining Area" 
            className="w-[381px] h-[480px] object-cover"
          />
          <h2 className="mt-4  font-[600] text-center text-[24px] text-[#333333]">Dining </h2>
        </div>

        {/* Living Room Image */}
        <div className="flex flex-col items-center">
          <img 
            src="/living.png" 
            alt="Living Room" 
            className="w-[381px] h-[480px] object-cover"
          />
          <h2 className="mt-4 text-center font-[600] text-[24px] text-[#333333]">Living </h2>
        </div>

        {/* Bedroom Image */}
        <div className="flex flex-col items-center">
          <img 
            src="/bedroom.png" 
            alt="Bedroom" 
            className="w-[381px] h-[480px] object-cover"
          />
          <h2 className="mt-4  font-[600] text-center text-[24px] text-[#333333]">Bedroom</h2>
        </div>
        
      </div>
    </div>
  );
};

export default Hero2;
