
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { IoIosArrowForward } from "react-icons/io";

const RelatedData = [
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
];

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
  {
    id: 9,
    imgSrc: "/pic8.jpeg",
    name: "Tranquilo",
    description: "Minimalist armchair",
    price: "Rp 3.000.000",
    originalPrice: "Rp 4.200.000",
    discount: "New",
  }
 
 

 

];

const ProductPage = ({ params }: { params: { id: string } }) => {


  const hoverIcons = [
    { alt: "Compare", src: "/compare.png" },
    { alt: "Share", src: "/share.png" },
    { alt: "Heart", src: "/myheart.png" },
  ];

  
  const { id } = params;
  const product = productsData.find((item) => item.id === parseInt(id,10));

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <h1>Product not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      {/* Breadcrumb */}
      <div className="bg-[#F9F1E7] mx-auto px-4 py-8">
        <ul className="flex items-center lg:space-x-8 space-x-2 mt-4 text-[16px] sm:text-[20px]">
          <Link
            href="/"
            className="text-[#9F9F9F] hover:cursor-pointer hover:scale-110 transition-transform"
          >
            Home
          </Link>
          <IoIosArrowForward className="w-4 h-4" />
          <Link
            href="/Shop"
            className="text-[#9F9F9F] hover:cursor-pointer hover:scale-110 transition-transform"
          >
          CartSidebar
          </Link>
          <IoIosArrowForward className="w-4 h-4" />
          <span className="text-black pl-2">{product.name}</span>
        </ul>
      </div>
      <div className="container mx-auto px-4 md:px-20 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4">
            {[...Array(4)].map((_, i) => (
              <Image
                key={i}
                src={product.imgSrc}
                alt={product.name}
                width={90}
                height={90}
                className="rounded bg-[#F9F1E7] object-cover hover:cursor-pointer hover:scale-110 transition"
              />
            ))}
          </div>


          {/* Main Image */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={product.imgSrc}
              alt={product.name}
              width={481}
              height={400}
              className="rounded object-cover hover:scale-110 transition"
            />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-black text-2xl lg:text-4xl font-semibold">
              {product.name}
            </h1>
            <p className="text-[#9F9F9F] text-lg lg:text-2xl">
              {product.price}
            </p>
            <p className="text-sm lg:text-base text-black">
              {product.description}
            </p>

            {/* Ratings */}
            <div className="flex items-center space-x-2">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  fill="currentColor"
                  className="w-6 h-6 text-[#FFAD33]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="text-sm text-[#9F9F9F]">
                (5 Customer Reviews)
              </span>
            </div>

            {/* Size Options */}
            <div>
              <span className="block text-sm text-[#9F9F9F] mb-2">Size</span>
              <div className="flex gap-3">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-1 bg-[#F9F1E7] rounded hover:bg-[#B88E2F] hover:text-white transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div>
              <span className="block text-sm text-[#9F9F9F] mb-2">Colors</span>
              <div className="flex gap-2">
                <button className="w-7 h-7 bg-[#816DFA] rounded-full border-2" />
                <button className="w-7 h-7 bg-black rounded-full border-2" />
                <button className="w-7 h-7 bg-[#B88E2F] rounded-full border-2" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <button className="border border-[#9F9F9F]  px-4 sm:px-8 py-2 rounded hover:bg-[#B88E2F] hover:text-white transition text-sm sm:text-base">
                - 1 +
              </button>
              <Link href="/Cart">
                <button className="w-full sm:w-[215px] h-[48px] sm:h-[64px] hover:border-[#9F9F9F] border border-black hover:text-white hover:bg-[#B88E2F] rounded-lg hover:scale-105 transition text-sm sm:text-base">
                  Add to Cart
                </button>
              </Link>
              <Link href="/ProductCompare">
                <button className="w-full sm:w-[215px] h-[48px] sm:h-[64px] hover:bg-[#B88E2F] hover:text-white hover:border-[#9F9F9F] border border-black rounded-lg hover:scale-105 transition-transform text-sm sm:text-base">
                  + Compare
                </button>
              </Link>
            </div>

            <div className="mt-48 w-full flex gap-20 text-left h-[24px] font-Poppins font-normal text-[16px] text-[#9F9F9F]">
              <p className="text-[#9F9F9F]">SKU</p>
              <p className="text-[#9F9F9F]">SS001</p>
            </div>
            <div className="w-full flex gap-10 h-[24px] mt-2 font-Poppins font-normal text-[16px] text-[#9F9F9F]">
              <p className="text-[#9F9F9F]">Category</p>
              <p className="text-[#9F9F9F]">Sofas</p>
            </div>
            <div className="w-full flex gap-20 h-[24px] mt-2 font-Poppins font-normal text-[16px] text-[#9F9F9F]">
              <p className="text-[#9F9F9F]">Tags</p>
              <p className="text-[#9F9F9F]">Sofa, Chair, Home, Shop</p>
            </div>
            <div className="w-full flex gap-20 h-[24px] mt-2 font-Poppins font-normal text-[16px] text-[#9F9F9F]">
              <p className="text-[#9F9F9F]">Share</p>
            </div>

            {/* Share Icons */}
            <div className="flex gap-2 text-left">
              {/* Facebook Icon */}

              <Link href="/Shop">
                <button className="text-red-600  p-2 rounded-full  shadow-lg transform hover:scale-110  hover:text-red-800 transition ">
                  <FaYoutube className="h-7 w-7  " />
                </button>
              </Link>
              <Link href="/Shop">
                <button className="text-blue-600  p-2 rounded-full shadow-lg transform hover:scale-110  hover:text-blue-800 transition">
                  <FaFacebook className="h-7 w-7  " />
                </button>
              </Link>

              <Link href="/Shop">
                <button className="text-pink-700  p-2 rounded-full shadow-lg transform hover:scale-110  hover:text-pink-800 transition">
                  <FaInstagram className="h-7 w-7  " />
                </button>
              </Link>

              {/* Twitter Icon */}
              <Link href="/Shop">
                <button className="text-sky-500  p-2 rounded-full shadow-lg transform hover:scale-110  hover:text-blue-800 transition">
                  <FaTwitter className="h-7 w-7  " />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="text-gray-600 mt-8  body-font">
        <div className="container px-5 py-16 mx-auto">
          {/* Tabs Section */}
          <div className="flex flex-wrap w-full mb-12">
            <div className="w-full flex flex-col sm:flex-row items-center justify-center lg:gap-12 gap-6">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-Poppins font-medium text-[#000000]">
                Description
              </h1>
              <p className="text-base sm:text-lg font-Poppins lg:text-xl text-[#9F9F9F] font-medium cursor-pointer hover:underline">
                Additional Information
              </p>
              <p className="text-base sm:text-lg font-Poppins lg:text-xl text-[#9F9F9F] font-medium cursor-pointer hover:underline">
                Reviews [5]
              </p>
            </div>
          </div>

          {/* Description Text */}
          <div className="flex flex-col items-center gap-8">
            <p className="max-w-4xl font-Poppins text-[#9F9F9F] text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="max-w-4xl font-Poppins text-[#9F9F9F] text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine-tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>

          {/* Images Section */}
          <div className="flex  flex-wrap -m-4 mt-8">
            <div className="w-full  sm:w-1/2 p-4">
              <div className="bg-[#F9F1E7] p-6 rounded-lg">
                <Image
                  className="rounded w-full object-cover object-center"
                  src="/oursofa.png"
                  alt="Sofa 1"
                  width={605}
                  height={348}
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-4">
              <div className="bg-[#F9F1E7] p-6 rounded-lg">
                <Image
                  className="rounded w-full object-cover object-center"
                  src="/oursofa1.png"
                  alt="Sofa 2"
                  width={605}
                  height={348}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}

      <div className="flex-1 w-full mt-24 pb-28">
        <h1 className="text-center h-auto w-auto  font-Poppins font-[500] text-[36px] text-[#000000] ">
          Related Products
        </h1>
        <div className="mt-10">
          <div className="w-full flex flex-wrap justify-center gap-12">
            {RelatedData.map((product) => (
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
        <div className="flex justify-center mt-20">
  <div className="w-[245px] h-[48px]  hover:text-white border-[#B88E2F] hover:bg-[#B88E2F] text-center items-center border-[2px]">
    <Link href="/Shop"><button className="font-poppins hover:text-white text-[#B88E2F] font-semibold text-[16px] mt-[10px]">
      Show More
    </button>
    </Link>
  </div>
</div>

      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
