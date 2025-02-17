import React from "react";

const Pagination = () => {
  return (
    <div>
      {/* Pagination */}
      <div className="mt-4 flex justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-14">
        {/* Page 1 */}
        <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 rounded-md bg-[#B88E2F] font-Poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#FFFFFF] flex items-center justify-center">
          <p>1</p>
        </div>
        {/* Page 2 */}
        <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 bg-[#F9F1E7] border-2 border-gray-400 rounded-md font-Poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#000000] flex items-center justify-center">
          <p>2</p>
        </div>
        {/* Page 3 */}
        <div className="h-14 w-16 sm:h-16 sm:w-16 md:h-18 md:w-18 bg-[#F9F1E7] border-2 border-gray-400 rounded-md font-Poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#000000] flex items-center justify-center">
          <p>3</p>
        </div>

        {/* Next Button */}
        <div className="h-14 sm:h-16 md:h-18 flex items-center justify-center bg-[#B88E2F] rounded-md text-white font-Poppins text-[16px] sm:text-[18px] md:text-[20px] px-4 cursor-pointer">
          <p>Next</p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
