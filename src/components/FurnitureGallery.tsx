import React from 'react';

const FurnitureGallery = () => {
  return (
    <div className="w-full h-auto mt-10 px-4">
      {/* Heading Section */}
      <div className="w-full text-center mt-10">
        <p className="font-poppins font-semibold text-[20px] text-[#616161]">
          Share your setup with
        </p>
        <h1 className="mt-6 font-poppins font-bold text-[32px] md:text-[40px] text-[#3A3A3A]">
          #FuniroFurniture
        </h1>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
        {/* Column 1 */}
        <div className="flex  flex-col gap-4">
          <img src="/image1.png" alt="Furniture 1" className="w-full h-auto rounded-md" />
        

        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <img src="/image2.png" alt="Furniture 2" className="w-full h-auto rounded-md" />
          <img src="/image4.png" alt="Furniture 4" className="w-full h-auto rounded-md" />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <img src="/image9.png" alt="Furniture 9" className="w-full h-auto rounded-md" />
            
          </div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4">
          <img src="/image6.png" alt="Furniture 6" className="w-full h-auto rounded-md" />
          <img src="/image7.png" alt="Furniture 7" className="w-full h-[250px] rounded-md" />
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-4 ">
          <img src="/image9.png" alt="Furniture 9" className="w-full h-auto rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
