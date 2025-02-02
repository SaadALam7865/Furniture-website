  "use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import { FaAngleRight } from "react-icons/fa";
import { Product } from "../../../types/products";
import { getCartItems } from "../action/action";
import { client } from "@/sanity/lib/client";

const Page = () => {
  const [cartItems, setCartItem] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "", 
    country: "",
    city: "",
    province: "",
    zipcode: "", // Changed from zipCode to match Sanity schema
    additionalInformation: "",
  });

  const [formError, setFormError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    country: false,
    city: false,
    province: false,
    zipcode: false, // Updated key
  });

  useEffect(() => {
    setCartItem(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) setDiscount(Number(appliedDiscount));
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.stock,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      country: !formValues.country,
      city: !formValues.city,
      province: !formValues.province,
      zipcode: !formValues.zipcode, // Updated key
    };
    setFormError(errors);
    return Object.values(errors).every((errors) => !errors);
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      Swal.fire("Error!", "Please fill all required fields correctly.", "error");
      return;
    }

    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const orderData = {
          _type: "order",
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          phone: formValues.phone,
          address: formValues.address,
          country: formValues.country,
          city: formValues.city,
          province: formValues.province,
          zipcode: Number(formValues.zipcode), // Ensure number type
          additionalInformation: formValues.additionalInformation || "", // Optional field
          cartItems: cartItems.map((item) => ({
            _type: "reference",
            _ref: item._id,  // Ensure item._id exists in Sanity
          })),
          total: subTotal,
          discount: discount,
          orderDate: new Date().toISOString(),
          status: "pending",
        };

        try {
          await client.create(orderData);
          localStorage.removeItem("appliedDiscount");
          Swal.fire("Success!", "Your order has been successfully processed.", "success");
        } catch (error) {
          console.error("Error creating order:", error);
          Swal.fire("Error!", "Something went wrong while processing your order.", "error");
        }
      }
    });
  };

  return (
    <div>
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
              <p className="text-[#000000]  hover:underline font-poppins text-[16px] font-semibold">
                Cart
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
              <h2 className="text-4xl leading-6 font-poppins font-[500] mb-12">
                Billing details
              </h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-6"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      className="w-full px-2 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    />
                    <div className={formError.firstName? "text-red-600" : ""}>
                      {formError.firstName && "First name is required"}
                    </div>    
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-6"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    />
                    <div className={formError.lastName? "text-red-600" : ""}>
                      {formError.lastName && "Last name is required"}
                    </div>
                    
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-6"
                  >
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
                    className="block text-sm font-medium text-gray-700 mb-6"
                  >
                    Country / Region
                  </label>
                  <select
                    id="country"
                    className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  >
                    <option value="" > Sri Lanka</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium text-gray-700 mb-6"
                  >
                    Street address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formValues.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  />
                  <div className={formError.address? "text-red-600" : ""}>
                      {formError.address && "Address is required"}
                    </div>
                  
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-6"
                  >
                    Town / City
                  </label>
                  <input
                    type="text"
                    id="city"
                    list="city-list"
                    value={formValues.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="Choose city"
                  />
                  <div className={formError.city? "text-red-600" : ""}>
                      {formError.city && "City is required"}
                    </div>
                  <datalist id="city-list">
                    <option value="Karachi" className="hover:bg-gray-300" />
                    <option value="Lahore" className="hover:bg-gray-300" />
                    <option value="Islamabad" />
                    <option value="Rawalpindi" />
                    <option value="Faisalabad" />
                    <option value="Peshawar" />
                    <option value="Quetta" />
                    <option value="Multan" />
                  </datalist>
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-6"
                  >
                    Province
                  </label>
                  <select
                    id="country"
                    className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  >

                    <option value="">Western Province</option>
                    <option value="us">Eastern Province</option>
                    <option value="uk">Northern Province</option>
                    <option value="ca">Southtern Province</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-700 mb-6"
                  >
                    Zip code
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    value={formValues.zipcode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                  <div className={formError.zipcode? "text-red-600" : ""}>
                      {formError.zipcode && "Zip code is required"}
                    </div>
                  
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-6"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  />
                  <div className={formError.email? "text-red-600" : ""}>
                      {formError.email && "Email is required"}
                    </div>
                  
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-6"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  />
                   <div className={formError.phone? "text-red-600" : ""}>
                      {formError.phone && "Phone number is required"}
                </div>
                <div>
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium text-gray-700 mb-6"
                  ></label>
                  <input
                    type="text"
                    value={formValues.additionalInformation}
                    onChange={handleInputChange}
                    id="additionalInformation"
                    placeholder="Additional information"
                    className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  />
                  
                         
                </div>
              </div>
              <button onClick={handlePlaceOrder} className="w-full mt-6 px-24 py-4 hover:bg-[#d7a93d] bg-[#cc9d30]  text-white border hover:transition-colors duration-200  border-black hover:border-none hover:shadow-lg  rounded-xl shadow-md tracking-wider text-[20px] leading-[30px]  focus:outline-none">
                Place order
              </button>
            </div>
          </div>
        </div>
                       {/* Order Summary section */}
          <div className="px-6 py-8 shadow-md bg-white rounded-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              {/* Product Details */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold text-black mb-4">
                  Product
                </h2>
                <div className="space-y-4">
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div
                        key={item._id}
                        className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg"
                      >
                        {item.imageUrl && (
                          <Image
                            className="w-28 h-28 rounded-md object-cover"
                            src={item.imageUrl}
                            alt={item.title}
                            width={112}
                            height={112}
                          />
                        )}
                        <div>
                          <p className="text-lg font-medium text-black">
                            {item.title}
                          </p>
                          <p className="text-sm  text-gray-500">
                            Quantity: {item.stock}
                          </p>
                          <p className="text-sm text-gray-500">
                            ${item.price * item.stock}
                          </p>
                          <p className="text-sm text-gray-500">
                            Price. Rs ${item.price}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No items added to cart yet.</p>
                  )}
                </div>
              </div>

              {/* Order Summary */}
              <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-black mb-4">
                  Order Summary
                </h2>
                <div className="text-lg font-medium text-gray-600 flex justify-between">
                  <span>Subtotal:</span>
                  <span>Rs. ${subTotal.toLocaleString()}</span>
                </div>
                {/* discount */}
                <div className="text-lg font-medium text-gray-600 flex justify-between mt-2">
                  <span>Discount:</span>
                  <span className="text-red-400">Rs. {discount}</span>
                </div>
                <div className="text-lg font-medium text-gray-600 flex justify-between mt-2">
                  <span>Total:</span>
                  <span className="text-green-500 font-semibold">
                    Rs. ${subTotal.toLocaleString()}
                  </span>
                </div>
                <button onClick={handlePlaceOrder} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Place Order
                </button>
              </div>
            </div>

            {/* Stripe jab lage ga tu cash ale cheezen ayge ok... */}
            <div className="mt-6  border-t pt-4">
              <div className="flex flex-col text-sm">
                <div className="flex-row flex gap-2">
                  <button className="w-4 h-4 bg-black hover:bg-orange-500 rounded-full " />
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
                  <button className="w-4 h-4 border-black rounded-full border hover:bg-orange-400" />
                  <h2 className="font-[500px] text-[#9F9F9F] text-[16px] leading-6">
                    {" "}
                    Direct Bank Transfer
                  </h2>{" "}
                </div>
                <div className="flex-row flex gap-2 py-2">
                  <button className="w-4 h-4 border-black rounded-full border hover:bg-orange-400" />
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
              <Link href={"/orderComplete"} onClick={handlePlaceOrder}>
                <button className="mt-6 px-24 py-4 hover:bg-[#B88E2F]  hover:text-white border hover:transition-colors duration-200  border-black hover:border-none text-black rounded-xl shadow-md text-[20px] leading-[30px]  focus:outline-none">
                  Place order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  );
}


export default Page;
