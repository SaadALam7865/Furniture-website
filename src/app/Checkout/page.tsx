import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaAngleRight } from "react-icons/fa";

const Page = () => {
  return (
    <div>
      <Header />
      {/* Background Section */}
      <div
        className="h-[316px] w-full font-bold mt-24 opacity-[70%] relative"
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
          <h1 className="font-Poppins font-[500] text-[48px] text-[#000000]">
          Checkout
          </h1>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center mt-4">
            <Link href="/">
              <p className="text-[#000000] font-poppins text-[16px] font-semibold">
                Home
              </p>
            </Link>
            <FaAngleRight className="mx-2" />
            <p className="text-[#000000] font-poppins text-[16px] font-[300]">
            Checkout
            </p>
          </div>
        </div>
      </div>
      {/* contact section */}
      <div className="container md:mx-8 px-4 py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl leading-6 font-poppins font-[500] mb-12">Billing details</h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-2 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-6">
                     Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      Country / Region
                    </label>
                    <select
                      id="country"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                      <option value="" > Sri Lanka</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="street"
                      className="block text-sm font-medium text-gray-700 mb-6">
                    Street address
                    </label>
                    <input
                      type="text"
                      id="street"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      Town / City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Choose city"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-6">
                     Province
                    </label>
                    <select
                      id="country"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                      <option value="" >Western Province</option>
                      <option value="us">Eastern Province</option>
                      <option value="uk">Northern Province</option>
                      <option value="ca">Southtern Province</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      Zip code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  
                </div>
                <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                <div>
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium text-gray-700 mb-6">
                    
                  </label>
                  <input
                    type="text"
                    id="address2"
                    placeholder="Additional information"
                    className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>
            
          </div>
          {/*place order */}
          <div className="px-8  py-8 h-[700px]">
            <div className="flex-row  flex justify-between">
              <div className="flex flex-col  ">
                <h2 className="text-[24px] leading-6 text-black font-[500px]  mb-4">
                  Product
                </h2>
                <p className="text-[16px] leading-6 text-[#9F9F9F] font-[400px] mb-4">
                  Asgaard sofa <span className="text-black ml-2">x 1</span>
                </p>
                <p className="text-[16px] leading-6 text-black font-[400px] mb-4">
                  Subtotal{" "}
                </p>
                <p className="text-[16px] leading-6 text-black font-[400px] mb-4">
                  Total
                </p>
              </div>
              <div className="flex flex-col">
                <h2 className=" text-[24px] leading-6 text-black font-[500px] mb-4">
                  Subtotal
                </h2>
                <p className="text-[16px] leading-6 text-black font-[300px] mb-4">
                  Rs. 250,000.00
                </p>
                <p className="text-[16px] leading-6 text-black font-[300px] mb-4">
                  Rs. 250,000.00
                </p>
                <p className="text-xl font-semibold text-primary mb-4">
                  Rs. 250,000.00
                </p>
              </div>
            </div>

            <div className="mt-6  border-t pt-4">
              <div className="flex flex-col text-sm">
                <div className="flex-row flex gap-2">
                  <button className="w-4 h-4 bg-black rounded-full " />
                  <h2 className="font-[500px] text-black text-[16px] leading-6">
                    
                    Direct Bank Transfer
                  </h2>
                </div>
                <p className="text-[#9F9F9F] text-[16px] leading-6 font-[300px] pt-6">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <div className="flex-row flex gap-2 pt-6">
                  <button className="w-4 h-4 border-black rounded-full border hover:bg-black" />
                  <h2 className="font-[500px] text-[#9F9F9F] text-[16px] leading-6">
                    {" "}
                    Direct Bank Transfer
                  </h2>{" "}
                </div>
                <div className="flex-row flex gap-2 py-2">
                  <button className="w-4 h-4 border-black rounded-full border hover:bg-black" />
                  <h2 className="font-[500px] text-[#9F9F9F] text-[16px] leading-6">
                    {" "}
                    Cash On Delivery
                  </h2>{" "}
                </div>

                <p className="text-[16px] leading-6 font-[300px] py-6">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-semibold">privacy policy.</span>
                </p>
              </div>
            </div>
            <div className="justify-center items-center text-center">
              <button className="mt-6 px-24 py-4 hover:bg-[#B88E2F]  hover:text-white border border-black text-black rounded-xl shadow-sm text-[20px] leading-[30px]  focus:outline-none">
                Place order
              </button>
            </div>
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
      <Footer/>
    </div>
    
  );
};

export default Page;
