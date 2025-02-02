
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { Product } from "../../../types/products";
import { IoMdHeartEmpty } from "react-icons/io";
import { useFavourite } from "@/app/wishlist/FavouriteContext";

const wishList = () => {
  const { favourites, removeFromFavourites } = useFavourite();
  return (
    <div>
      {/* Header Section */}

      <div
        className="h-[316px] mt-5 flex opacity-[90%] items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/bg-img.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="backdrop-blur-sm bg-black/50 p-6  rounded-xl">
          <Image
            src="/logo.png"
            alt="Logo"
            height={80}
            width={80}
            className="flex font-bold  text-4xl justify-center  items-center px-5"
          />
          <h1 className="text-4xl font-bold mt-4">wishlist</h1>
          <div className="flex items-center justify-center mt-2">
            <Link href="/">
              <p className="text-white text-sm font-medium hover:underline">
                Home
              </p>
            </Link>
            <FaAngleRight className="mx-2" />
            <p className="text-gray-300 text-sm">Cart</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-16 py-8 max-w-7xl">
        {favourites.length === 0 ? (
          <div className="text-center mt-16">
            <IoMdHeartEmpty size={64} className="text-gray-400 mx-auto" />
            <p className="text-gray-600 mt-4 text-lg">
              No favourite products added yet.
            </p>
          </div>
        ) : (
          <div className="p-2">
            {/* Grid for Card layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favourites.map((product) => (
                <div
                  key={product._id}
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      width={100} // Reduced image size
                      height={100} // Reduced image size
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#1D3178] truncate">
                      {" "}
                      {/* Reduced font size */}
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {" "}
                      {/* Reduced font size */}
                      <span className="font-medium">Price:</span>{" "}
                      <span className="font-semibold text-gray-800">
                        ${product.price}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Added on:{" "}
                      <span className="text-gray-700">
                        {product.favouritedAt?.toLocaleDateString() || "N/A"}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromFavourites(product._id)}
                    className="text-red-600  font-semibold hover:bg-red-700 hover:text-white mt-4 w-full py-2 border border-red-600 rounded-lg transition duration-300 ease-in-out">
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default wishList;
