import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
    imgSrc: "/pic2.png",
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

// Repeat products data to get 16 items
const extendedProductsData = [...productsData, ...productsData];

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Background Section */}
      <div
        className="h-[316px] w-full mt-24 opacity-[70%] relative"
        style={{
          backgroundImage: "url('/bg-img.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Wrapper */}
        <div className="flex flex-col items-center justify-center h-full">
          <img className="h-[77px] w-[77px]" src="/logo.png" alt="" />
          <h1 className="font-Poppins font-[500] text-[48px] text-[#000000]">Shop</h1>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center mt-4">
            <p className="text-[#000000] font-poppins text-[16px] font-[500]">Home</p>
            <FaAngleRight className="mx-2" />
            <p className="text-[#000000] font-poppins text-[16px] font-[300]">Shop</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="h-[100px] border-2 border-[#9F9F9F]">
        <div className="flex items-center gap-2 mt-5 ml-8">
          <img className="w-[25px] h-[25px] border-[1px]" src="/nuts.png" alt="" />
          <p className="w-[48px] h-[30px] mt-2">Filter</p>
          <img className="w-[25px] h-[25px] ml-8" src="/vector.png" alt="" />
          <img className="w-[25px] h-[25px] ml-8" src="/vector (1).png" alt="" />
          <div className="flex-1 border-[1px] ml-12">
            <p className="font-Poppins font-normal text-[16px] text-[#000000] p-2">
              Showing 1–16 of 32 results
            </p>
          </div>
          <div className="flex gap-8 items-center mr-20">
            <p className="font-Poppins font-normal text-[20px]">Show</p>
            <p className="font-Poppins items-center font-normal text-[20px] text-[#9F9F9F]">16</p>
          </div>
          <div className="w-[388px] h-[55px] flex gap-8">
            <p className="mt-3 font-Poppins font-normal text-[20px] text-[#000000]">Short by</p>
            <div className="w-[188px] h-[55px] flex gap-5 ml-8">
              <p className="mt-3 font-Poppins font-[400] text-[20px] text-[#9F9F9F]">Default</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1 w-full  mt-24 pb-28">
        <div className="mt-10 ">
          <div className="w-full flex flex-wrap justify-center gap-12">
            {/* Single Product */}
            {extendedProductsData.map((product) => (
              <div key={product.id} className="w-[285px] bg-[#F4F5F7] flex flex-col items-center border border-gray-200 p-4 rounded-lg relative">
                {/* Discount Badge with Conditional Styling */}
                <div
                  className={`absolute top-4 right-7 mt-3 text-[#FFFFFF] font-poppins font-[500] text-[16px] flex items-center justify-center h-12 w-12 rounded-full ${
                    [3, 5, 7].includes(product.id) ? 'bg-[#2EC1AC]' : 'bg-[#E97171]'
                  }`}
                >
                  {product.discount}
                </div>

                {/* Product Image */}
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="w-[285px] h-[301px] object-cover rounded-sm mb-4"
                />
                {/* Product Details */}
                <h3 className="font-poppins flex  font-semibold text-[24px] text-[#3A3A3A]">{product.name}</h3>
                <p className="text-[#555555] text-[16px] mb-2">{product.description}</p>
                <div className="flex items-center gap-3">
                  <h2 className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">{product.price}</h2>
                  <p className="line-through font-poppins font-normal text-[16px] text-[#555555]">{product.originalPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      

      <div className="h-24 w-76 mt-2 flex gap-14 pt-7 justify-center ml-[100px] text-center">
        <div className="h-14 w-14 items-center pt-3 rounded-md bg-[#B88E2F] font-Poppins font-normal text-[20px] text-[#FFFFFF]">
          <p className="font-Poppins font-normal items-center ">1</p>
        </div>
        <div className="h-14 w-14 items-center hover:bg-[#B88E2F] hover:border-none hover:text-white pt-3 bg-[#F9F1E7] border-2 border-gray-400 rounded-md font-Poppins font-normal text-[20px] text-[#000000]">
          <p className="font-Poppins font-normal items-center ">2</p>
        </div>
        <div className="h-14 w-16 items-center hover:bg-[#B88E2F] hover:border-none hover:text-white border-2 border-gray-400 pt-3 bg-[#F9F1E7] border-[] rounded-md font-Poppins font-normal text-[20px] text-[#000000]">
          <p className="font-Poppins font-normal items-center ">3</p>
        </div>
        <div className="mt-4">
          <p className="text-[24px]">Next</p>
        </div>
      </div>

      <div className="w-[1500px]  border-2 border-[#d6d3d3] hover:border-[#B88E2F]   flex justify-around h-[270px]  mt-28 mx-auto">
        <div className="w-1/5 flex hover:scale-105 gap-4 items-center">
          <div className="w-14 h-14 ">
            <img
              src="/Group.png"
              alt="High Quality"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full">
            <h3 className="font-Poppins font-semibold text-xl text-[#242424]">
              High Quality
            </h3>
            <p className="font-Poppins text-base text-[#898989]">
              Crafted from top materials
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="w-1/5 flex gap-4 items-center">
          <div className="w-14 h-14">
            <img
              src="/guarantee.png"
              alt="Warranty Protection"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full">
            <h3 className="font-Poppins font-semibold text-xl text-[#242424]">
              Warranty Protection
            </h3>
            <p className="font-Poppins text-base text-[#898989]">
              Over 2 years
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="w-1/5 flex gap-4 items-center">
          <div className="w-14 h-14">
            <img
              src="/shipping.png"
              alt="Free Shipping"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full">
            <h3 className="font-Poppins font-semibold text-xl text-[#242424]">
              Free Shipping
            </h3>
            <p className="font-Poppins text-base text-[#898989]">
              Delivered to your door
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="w-1/5 flex gap-4 items-center">
          <div className="w-14 h-14">
            <img
              src="/customer-support.png"
              alt="24/7 Support"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full">
            <h3 className="font-Poppins font-semibold text-xl text-[#242424]">
              24/7 Support
            </h3>
            <p className="font-Poppins text-base text-[#898989]">
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
