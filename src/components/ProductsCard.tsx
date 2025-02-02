
"use client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { fourProducts } from "@/sanity/lib/queries";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { useFavourite } from "@/app/wishlist/FavouriteContext";
import { Product } from "../../types/products";

type TProducts = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags: string[];
  dicountPercentage: number;
  quantity?: number;
  isNew: boolean;
  stock?: number;
  _type?: "product";
};

const hoverIcons = [
  { alt: "Compare", src: "/compare.png" },
  { alt: "Share", src: "/share.png" },
  { alt: "Heart", src: "/myheart.png" },
];






const ProductsCard =  () => {
  const [products, setProducts] = useState<Product[]>([])
 const { addToFavourites } = useFavourite();
  useEffect(() => {
    async function fetchProduct(){
      const  fetchedProduct:Product[] = await sanityFetch({query: fourProducts})
      setProducts(fetchedProduct)
    }
    fetchProduct()
  },[])

   const handleAddToWishlist = (e: React.MouseEvent, product:Product) => {
     e.preventDefault();
   Swal.fire({
        position: "top-left",
        icon: "success",
        title: `${product.title} added to wishlist`,
        imageUrl: `${product.imageUrl}`,
        imageHeight: 80,
        imageWidth: 80,
        showConfirmButton: false,
        timer: 3500,
      });
  
      addToFavourites(product);
    };
  return (
    <div className="w-full h-auto flex flex-col items-center mt-[100px]">
      {/* Title Section */}
      <h1 className="font-poppins font-bold text-[32px] text-[#3A3A3A] mb-10">
        Our Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="w-full flex flex-col items-center border border-gray-200 p-4 rounded-lg relative group"
          >
            {/* Updated Discount Badge */}
            {product.dicountPercentage > 0 && (
              <div
                className={`absolute top-6 right-6 text-white font-poppins font-medium text-sm flex items-center justify-center h-12 w-12 rounded-full ${
                  product.dicountPercentage > 30
                    ? "bg-[#2EC1AC]"
                    : "bg-[#E97171]"
                }`}
              >
                -{product.dicountPercentage}%
              </div>
            )}

            {/* Product Image */}
              <Image
                src={product.imageUrl}
                alt={product.title}
                height={301}
                width={285}
                className="w-72 h-[301px] object-cover rounded-md mb-4"
              />
            
           
            {/* Hover Overlay */}
            <Link href={`/Shop/${product._id}`} passHref>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href="/Cart">
                <button className="p-2 bg-white text-yellow-600 hover:border-2 hover:border-[#B88E2F] px-10 font-semibold hover:opacity-75 active:opacity-50 transition-all cursor-pointer">
                  Add to Cart
                </button>
              </Link>
              <ul className="flex gap-5 mt-4">
                {hoverIcons.map((icon, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-center justify-center text-white hover:opacity-65 active:opacity-40 transition-all cursor-pointer"
                    onClick={
                      icon.alt === "Heart"
                        ? (e) => handleAddToWishlist(e, product)
                        : undefined
                    }
                  >
                    <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                    <p className="text-[14px] font-semibold">{icon.alt}</p>
                  </li>
                ))}
              </ul>
            </div>
            </Link>
            

            {/* Product Title */}
            <h3 className="font-poppins font-semibold text-[24px] text-[#3A3A3A] text-center mt-4">
              {product.title}
            </h3>


            {/* Product Price and Discount Price */}
            <div className="flex items-center justify-center gap-3 mt-2">
              <h2 className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
                Rp {product.price.toLocaleString()}
              </h2>
              {product.dicountPercentage > 0 && (
                <p className="line-through font-poppins font-normal text-[16px] text-[#555555]">
                  Rp {(product.price / (1 - product.dicountPercentage / 100)).toLocaleString()}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-10">
        <button className="w-[245px] h-[48px] text-[#B88E2F] hover:text-white border-[#B88E2F] hover:bg-[#B88E2F] border-[2px] text-center font-poppins font-semibold text-[16px]">
          Show More
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
