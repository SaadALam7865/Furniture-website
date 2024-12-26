import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import React from "react";

const productsData = [
  {
    id: 1,
    imgSrc: "/pic1.png",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
  },
  {
    id: 2,
    imgSrc: "/pic4.jpeg",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-50%",
  },
  {
    id: 3,
    imgSrc: "/pic3.png",
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 10.000.000",
    discount: "-50%",
  },
  {
    id: 4,
    imgSrc: "/pic4.jpeg",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 4.500.000",
    originalPrice: "Rp 5.500.000",
    discount: "New",
  },
  {
    id: 5,
    imgSrc: "/pic5.png",
    name: "Gramina",
    description: "Wooden dining table",
    price: "Rp 6.500.000",
    originalPrice: "Rp 8.000.000",
    discount: "New",
  },
  {
    id: 6,
    imgSrc: "/pic6.jpeg",
    name: "Candella",
    description: "Elegant bed lamp",
    price: "Rp 1.200.000",
    originalPrice: "Rp 1.800.000",
    discount: "New",
  },
  {
    id: 7,
    imgSrc: "/pic7.png",
    name: "Aurora",
    description: "Luxury sofa set",
    price: "Rp 9.000.000",
    originalPrice: "Rp 12.000.000",
    discount: "-30%",
  },
  {
    id: 8,
    imgSrc: "/pic8.jpeg",
    name: "Tranquilo",
    description: "Minimalist armchair",
    price: "Rp 3.000.000",
    originalPrice: "Rp 4.200.000",
    discount: "New",
  },
  
];

const Page = () => {
  const hoverIcons = [
    { alt: "Compare", src: "/compare.png" },
    { alt: "Share", src: "/share.png" },
    { alt: "Heart", src: "/myheart.png" },
  ];

  // Repeat products data to get 16 items
  const extendedProductsData = [...productsData, ...productsData];
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Background Section */}
      <div
        className="h-[316px] w-full mt-64 md:mt-10 opacity-70 relative"
        style={{
          backgroundImage: "url('/bg-img.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <img
            className="h-16 w-16 md:h-[77px] md:w-[77px]"
            src="/logo.png"
            alt="Logo"
          />
          <h1 className="font-Poppins font-medium text-3xl md:text-4xl lg:text-5xl text-black mt-2">
            Shop
          </h1>
          <div className="flex items-center justify-center mt-4 text-sm md:text-base">
            <Link href="/">
              <p className="text-black hover:font-semibold font-Poppins font-medium">
                Home
              </p>
            </Link>
            <FaAngleRight className="mx-2 text-black" />
            <p className="text-black font-Poppins font-light">Shop</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1 w-full mt-24 pb-28">
        <div className="mt-10">
          <div className="w-full flex flex-wrap justify-center gap-12">
            {extendedProductsData.map((product) => (
              <div
                key={product.id}
                className="w-[285px] bg-[#F4F5F7] flex flex-col items-center border border-gray-200 p-4 rounded-lg relative group"
              >
                {/* Product Image with Link */}
                <Link href={`/Shop/${product.id}`} passHref>
                  <Image
                    src={product.imgSrc}
                    alt={product.name}
                    width={285}
                    height={301}
                    className="w-[285px] h-[301px] object-cover rounded-sm mb-4 cursor-pointer"
                  />
                </Link>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/Shop/${product.id}`}>
                    <button className="p-2 bg-white text-yellow-600 hover:border-2 hover:border-[#B88E2F] px-10 font-semibold hover:opacity-75 active:opacity-50 transition-all cursor-pointer">
                      Add to cart
                    </button>
                  </Link>
                  <ul className="flex gap-5 mt-4">
                    {hoverIcons.map((icon, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center text-white hover:opacity-65 active:opacity-40 transition-all cursor-pointer"
                      >
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          width={24}
                          height={24}
                        />
                        <p className="text-[14px] font-semibold">{icon.alt}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <h3 className="font-poppins font-semibold text-[24px] text-[#3A3A3A]">
                  {product.name}
                </h3>
                <p className="text-[#555555] text-[16px] mb-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-3">
                  <h2 className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
                    {product.price}
                  </h2>
                  <p className="line-through font-poppins font-normal text-[16px] text-[#555555]">
                    {product.originalPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Feature 1 */}
      <div className="w-full space-y-6 md:space-y-0 items-center  max-w-[1500px] border-2 border-[#d6d3d3] hover:border-[#B88E2F] flex flex-wrap justify-around  h-auto mt-28 mx-auto p-4 gap-6">
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
      <Footer />
    </div>
  );
};

export default Page;
