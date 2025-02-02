"use client";
import React from 'react'

const Feature = () => {
  return (
    <div>
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
    </div>
  )
}

export default Feature