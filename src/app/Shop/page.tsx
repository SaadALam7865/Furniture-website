

"use client";
import Image from "next/image";
import Swal from "sweetalert2";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { shopPage } from "@/sanity/lib/queries";
import SearchWithSanity from "@/components/Serach";
import Feature from "@/components/Feature";
import { addToCart } from "../action/action";
import { Product } from "../../../types/products";
import { useFavourite } from "@/app/wishlist/FavouriteContext";

type Products = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags: string[];
  isNew: boolean;
  dicountPercentage: number;
  quantity?: number;
  stock?: number;
  _type?: "product";
};

const hoverIcons = [
  { alt: "Compare", src: "/compare.png" },
  { alt: "Share", src: "/share.png" },
  { alt: "Heart", src: "/myheart.png" },
];

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToFavourites } = useFavourite();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData: Product[] = await sanityFetch({ query: shopPage });
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();

    Swal.fire({
      position: "top-left",
      icon: "success",
      title: `${product.title} added to cart`,
      imageUrl: `${product.imageUrl}`,
      imageHeight: 80,
      imageWidth: 80,
      showConfirmButton: false,
      timer: 3500,
    });

    addToCart(product);
  };

  const handleAddToWishlist = (e: React.MouseEvent, product: Product) => {
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
    <div className="flex flex-col min-h-screen">
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

      <div className="mt-3">
        <SearchWithSanity />
      </div>

      <div className="flex-1 w-full mt-24 pb-28">
        <div className="mt-10">
          <div className="w-full flex flex-wrap justify-center gap-12">
            {products.map((product) => (
              <div
                key={product._id}
                className="w-[285px] flex flex-col items-center border border-gray-200 p-4 rounded-lg relative group"
              >
                {product.isNew && (
                  <div className="absolute top-6 left-6 text-white font-poppins font-medium text-sm bg-[#2EC1AC] px-2 py-2 rounded-full">
                    New
                  </div>
                )}

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

                <Link href={`/Shop/${product._id}`} passHref>
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={285}
                    height={301}
                    className="w-[285px] h-[301px] object-cover rounded-sm mb-4 cursor-pointer"
                  />
                </Link>

                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="p-2 bg-white text-yellow-600 hover:border-2 hover:border-[#B88E2F] px-10 font-semibold hover:opacity-75 active:opacity-50 transition-all cursor-pointer"
                  >
                    Add to cart
                  </button>
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
                <div className="flex items-center gap-3">
                  <h2 className="font-poppins font-semibold text-[20px] text-[#3A3A3A]">
                    Rp {product.price}
                  </h2>
                  {product.dicountPercentage > 0 && (
                    <p className="line-through font-poppins font-normal text-[16px] text-[#555555]">
                      Rp{" "}
                      {(
                        product.price +
                        (product.dicountPercentage / 100) * product.price
                      ).toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Feature />
    </div>
  );
};

export default Page;
