import React from "react";
import Image from "next/image";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { sanityFetch } from "@/sanity/lib/fetch";
import { productDetailQuery, relatedProducts } from "@/sanity/lib/queries";
import { IoIosArrowForward } from "react-icons/io";
import Feature from "@/components/Feature";


type TProducts = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  isNew: boolean;
  dicountPercentage: number;
};
const hoverIcons = [
  { alt: "Compare", src: "/compare.png" },
  { alt: "Share", src: "/share.png" },
  { alt: "Heart", src: "/myheart.png" },
];

const ProductPage = async ({ params }: { params: { id: string } }) => {


  // Fetch data from Sanity
  const product: TProducts = await sanityFetch({
   
    query: productDetailQuery,
    params: { id: params.id },
    
  });
  
  // Fetching products data from Sanity
  const products: TProducts[] = await sanityFetch({ query: relatedProducts });

  if (!product) {

    return <div className="flex justify-center items-center h-[50vh] text-2xl lg:text-3xl  hover:text-[#FFAD33] font-semibold" >
      <h1>
      Products Not found!!
      </h1>
    </div>;
    
  }

  return (
    <div className="flex flex-col min-h-screen">
      

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
            Shop
          </Link>
          <IoIosArrowForward className="w-4 h-4" />
          <span className="text-black pl-2">{product.title}</span>
        </ul>
      </div>
      <div className="container mx-auto px-4 md:px-20 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4">
            {[...Array(4)].map((_, i) => (
              <Image
                key={i}
                src={product.imageUrl}
                alt={product.title}
                width={90}
                height={90}
                className="rounded bg-[#F9F1E7] object-cover hover:cursor-pointer hover:scale-110 transition"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={481}
              height={400}
              className="rounded object-cover hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 space-y-5 space-x-3">
            <h1 className="text-black text-2xl lg:text-4xl font-semibold">
              {product.title}
            </h1>
            <span className="text-[#9F9F9F] mt-3   text-lg lg:text-2xl">
              ${product.price}
            </span>  
            <span className="text-[#9F9F9F] line-through  text-lg lg:text-2xl">
             ${product.dicountPercentage}
            </span>
            <>
            <p className="text-sm  lg:text-base hover:text-slate-700 text-black">
              {product.description} 
              
            </p>
            </>

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
              <span className="block text-sm text-slate-700 mb-2">Size</span>
              <div className="flex gap-3">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-1 bg-[#F9F1E7] rounded hover:bg-[#B88E2F] hover:text-white transition-all"
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

            {/* Button Section */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start px-4 sm:px-0">
              {/* Quantity Control Button */}
              <button className="w-full sm:w-auto border border-[#9F9F9F] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#B88E2F] hover:text-white hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                - 1 +
              </button>

              {/* Add to Cart Button */}
              <Link href="/Cart">
                <button className="w-full sm:w-[215px] h-[48px] sm:h-[64px] text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 border border-black rounded-lg hover:bg-[#B88E2F] hover:text-white hover:border-[#9F9F9F] hover:scale-105 transition-all duration-300 transform ease-in-out">
                  Add to Cart
                </button>
              </Link>

              {/* Compare Button */}
              <Link href="/ProductCompare">
                <button className="w-full sm:w-[215px] h-[48px] sm:h-[64px] text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 border border-black rounded-lg hover:bg-[#B88E2F] hover:text-white hover:border-[#9F9F9F] hover:scale-105 transition-all duration-300 transform ease-in-out">
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
        <h1 className="text-center h-auto w-auto  font-Poppins font-[600] text-[36px] text-[#000000] ">
          Related Products
        </h1>
        <div className="mt-10">
          <div className="w-full flex flex-wrap justify-center gap-12">
            {products.map((product) => (
              <div
                key={product._id}
                className="w-[285px] bg-[#F4F5F7] flex flex-col items-center border border-gray-200 p-4 rounded-lg relative group"
              >
                {/* Product Image with Link */}
                <Link href={`/Shop/${product._id}`} passHref>
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={285}
                    height={301}
                    className="w-[285px] h-[301px] object-cover rounded-sm mb-4 cursor-pointer"
                  />
                </Link>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/Shop/${product._id}`}>
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
                  {product.title}
                </h3>
                <p className="text-[#555555] text-[16px] mb-2">
                  {/* description */}
                </p>
                <div className="flex items-center gap-3">
                  <h2 className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
                    {product.price}
                  </h2>
                  <p className="line-through font-poppins font-normal  text-[16px] text-[#555555]">
                    {product.dicountPercentage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <div className="w-[245px] h-[48px]  hover:text-white border-[#B88E2F] hover:bg-[#B88E2F] text-center items-center border-[2px]">
            <Link href="/Shop">
              <button className="font-poppins hover:text-white text-[#B88E2F] font-semibold text-[16px] mt-[10px]">
                Show More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Feature/>
      </div>
   
    </div>
  );
};

export default ProductPage;
