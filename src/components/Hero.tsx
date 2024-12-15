import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen mt-[25 px] flex'>
      {/* Hero Image */}
      <img
        src="/hero-img.jpeg"
        alt="hero"
        className='w-[60%] h-full object-cover'
      />

      {/* Hero Text Section */}
      <div className='w-[40%] h-full mt-16 flex flex-col justify-center pl-[10px] pr-[10px]'>
        <h3 className='font-poppins font-semibold text-[16px] tracking-wide'>
          New Arrival
        </h3>

        {/* "Discover Our" and "New Collection" stacked */}
        <h1 className='font-poppins font-bold text-[52px] text-[#B88E2F] mt-[20px]'>
          <span className='block'>Discover Our</span>
          <span className='block'>New Collection</span>
        </h1>

        {/* Paragraph */}
        <p className='text-[16px] mt-[20px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>

        {/* Button Section */}
        <div className='mt-[30px]'>
          <button className='bg-[#B88E2F] hover:bg-yellow-700 py-6 px-16 font-poppins font-[700] text-[16px] text-[#FFFFFF]'>
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
