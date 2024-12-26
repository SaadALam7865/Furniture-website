import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  const hoverIcons = [
    { alt: "Compare", src: "/compare.png" },
    { alt: "Share", src: "/share.png" },
    { alt: "Heart", src: "/myheart.png" },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center mt-[100px]">
      {/* Title Section */}
      <h1 className="font-poppins font-bold text-[32px] text-[#3A3A3A] mb-10">Our Products</h1>

      {/* Products Grid */}
      <div className="w-full flex flex-wrap justify-center gap-12">
        {[
          {
            imgSrc: "/pic1.png",
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            originalPrice: "Rp 3.500.000",
            discount: "-30%",
          },
          {
            imgSrc: "/pic8.jpeg",
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            originalPrice: "Rp 3.500.000",
            discount: "-50%",
          },
          {
            imgSrc: "/pic3.png",
            name: "Lolito",
            description: "Luxury big sofa",
            price: "Rp 7.000.000",
            originalPrice: "Rp 10.000.000",
            discount: "-50%",
          },
          {
            imgSrc: "/pic4.jpeg",
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: "Rp 4.500.000",
            originalPrice: "Rp 5.500.000",
            discount: "New",
          },
          {
            imgSrc: "/pic5.png",
            name: "Gramina",
            description: "Wooden dining table",
            price: "Rp 6.500.000",
            originalPrice: "Rp 8.000.000",
            discount: "New", 
          },
          {
            imgSrc: "/pic6.jpeg",
            name: "Candella",
            description: "Elegant bed lamp",
            price: "Rp 1.200.000",
            originalPrice: "Rp 1.800.000",
            discount: "New", 
          },
          {
            imgSrc: "/pic7.png",
            name: "Aurora",
            description: "Luxury sofa set",
            price: "Rp 9.000.000",
            originalPrice: "Rp 12.000.000",
            discount: "-30%", 
          },
          {
            imgSrc: "/pic8.jpeg",
            name: "Tranquilo",
            description: "Minimalist armchair",
            price: "Rp 3.000.000",
            originalPrice: "Rp 4.200.000",
            discount: "New", 
          },
        ].map((product, index) => (
          <div
            key={index}
            className="w-[285px] bg-[#F4F5F7] flex flex-col items-center border border-gray-200 p-4 rounded-lg relative group"
          >
            {/* Discount Badge */}
            <div
              className={`absolute top-4 right-7 mt-3 text-[#FFFFFF] font-poppins font-[500] text-[16px] flex items-center justify-center h-12 w-12 rounded-full ${
                [3, 5, 7].includes(index) ? "bg-[#2EC1AC]" : "bg-[#E97171]"
              }`}
            >
              {product.discount}
            </div>

            {/* Product Image */}
            <Image
              src={product.imgSrc}
              alt={product.name}
              height={301}
              width={285}
              className="w-[285px] h-[301px] object-cover rounded-md mb-4"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href="/Cart"><button className="p-2 bg-white text-yellow-600 hover:border-2 hover:border-[#B88E2F] px-10 font-semibold hover:opacity-75 active:opacity-50 transition-all cursor-pointer">
                Add to cart
              </button></Link>
              <ul className="flex gap-5 mt-4">
                {hoverIcons.map((icon, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center justify-center text-white hover:opacity-65 active:opacity-40 transition-all cursor-pointer"
                  >
                    <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                    <p className="text-[14px] font-semibold">{icon.alt}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Details */}
            <h3 className="font-poppins font-semibold text-[24px] text-[#3A3A3A]">{product.name}</h3>
            <p className="text-[#555555] text-[16px] mb-2">{product.description}</p>
            <div className="flex items-center gap-3">
              <h2 className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">{product.price}</h2>
              <p className="line-through font-poppins font-normal text-[16px] text-[#555555]">
                {product.originalPrice}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[245px] h-[48px] hover:text-white border-[#B88E2F] hover:bg-[#B88E2F] mt-10 text-center items-center border-[2px]">
        <button className="font-poppins hover:text-white text-[#B88E2F] font-semibold text-[16px] items-center mt-3">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Products;
