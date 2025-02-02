

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Feature from "@/components/Feature";
import { FaAngleRight } from "react-icons/fa";
import Swal from "sweetalert2";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../action/action";
import { useRouter } from "next/navigation"

const CartPage = () => {
  const [cartItem, setCartItem] = useState<Product[]>([]);

  useEffect(() => {
    setCartItem(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItem(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItem(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stock + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product && product.stock > 1) {
      handleQuantityChange(id, product.stock - 1);
    }
  };

  const calculatedTotal = () => {
    return cartItem.reduce((total, item) => total + item.price * item.stock, 0);
  };

   const router = useRouter()
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been successfully processed.", "success");
        router.push('/Checkout')
        setCartItem([]);
      }
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div
        className="h-[316px] flex opacity-[90%] items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/bg-img.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="backdrop-blur-sm bg-black/50 p-7 rounded-xl">
          <Image src="/logo.png" alt="Logo" height={77} width={77} />
          <h1 className="text-4xl font-bold mt-4">Cart</h1>
          <div className="flex items-center justify-center mt-2">
            <Link href="/">
              <p className="text-white text-sm font-medium hover:underline">Home</p>
            </Link>
            <FaAngleRight className="mx-2" />
            <p className="text-gray-300 text-sm">Cart</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items Section */}
          <div className="col-span-2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-6">Shopping Cart</h2>

            {cartItem.length > 0 ? (
              cartItem.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between border-b pb-4 mb-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.imageUrl || "/placeholder.png"}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded-lg border hover:border-[1px] hover:border-[#FFAD33]"
                    />
                    <div>
                      <p className="font-medium text-gray-700">{item.title}</p>
                      <p className="text-sm text-gray-500">Rs. {item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      -
                    </button>
                    <p>{item.stock}</p>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">
                      Rs. {item.price * item.stock}
                    </p>
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="bg-red-500 text-white hover:bg-red-600 px-2 py-1 rounded-sm hover:transition-all duration-200  text-sm  mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center text-lg">Your cart is empty.</p>
            )}
          </div>

          {/* Cart Totals Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-6">Cart Totals</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">Rs. {calculatedTotal()}</p>
            </div>
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">Total</p>
              <p className="text-lg font-bold text-green-600">Rs. {calculatedTotal()}</p>
            </div>
             <Link href="/Checkout">
            <button
              onClick={handleProceed}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
            >
              Proceed to Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5">
      <Feature/>
      </div>
     
    </div>
    
    
  );
};

export default CartPage;