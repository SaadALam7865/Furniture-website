

"use client";

import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from 'react-icons/ai';

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";



const Header = () => { 

  return (
    <div className=" bg-[#87CEE] border-b-[1px] border-b-gray-100 shadow-md ">
      {/* Desktop Header */}
      <div className="w-full h-[100px] flex items-center justify-between px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-[50px] h-[32px]" src="/logo.png" alt="logo" />
          <h1 className="font-Montserrat font-[700] text-[24px] text-[#000000]">
            Furniro
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-16">
          <Link href="/">
            <li className="font-poppins font-[500] text-[16px] relative inline-block before:content-[''] before:absolute before:w-0 before:left-0 before:h-[4px] before:top-6 before:rounded-full before:transition-all before:duration-300 before:ease-in-out before:bg-gradient-to-r before:from-yellow-500 before:to-orange-500 hover:before:w-full hover:before:right-0">
              Home
            </li>
          </Link>
          <Link href="/Shop">
            <li className="font-poppins font-[500] text-[16px] relative inline-block before:content-[''] before:absolute before:w-0 before:left-0 before:h-[4px] before:top-6 before:rounded-full before:transition-all before:duration-300 before:ease-in-out before:bg-gradient-to-r before:from-yellow-500 before:to-orange-500 hover:before:w-full hover:before:right-0">
              Shop
            </li>
          </Link>
          <Link href="/Blog">
            <li className="font-poppins font-[500] text-[16px] relative inline-block before:content-[''] before:absolute before:w-0 before:left-0 before:h-[4px] before:top-6 before:rounded-full before:transition-all before:duration-300 before:ease-in-out before:bg-gradient-to-r before:from-yellow-500 before:to-orange-500 hover:before:w-full hover:before:right-0">
              Blog
            </li>
          </Link>
          <Link href="/Contact">
            <li className="font-poppins font-[500] text-[16px] relative inline-block before:content-[''] before:absolute before:w-0 before:left-0 before:h-[4px] before:top-6 before:rounded-full before:transition-all before:duration-300 before:ease-in-out before:bg-gradient-to-r before:from-yellow-500 before:to-orange-500 hover:before:w-full hover:before:right-0">
              Contact
            </li>
          </Link>
        </ul>
       

       

        {/* Icons */}
        <div className="hidden md:flex gap-10">
          <Image src="/user.png" alt="User" height={24} width={24} className="w-[24px] h-[24px] hover:scale-110" />
          <button >
            <AiOutlineSearch className="w-[24px] h-[24px] hover:scale-110" />
          </button>
          <Link href="/wishlist"><FaRegHeart  className="w-[24px] h-[24px] hover:scale-110 hover:text-red-500" /></Link>
          <Link href="/Cart">
            <AiOutlineShoppingCart className="w-[24px] h-[24px] hover:scale-110" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-3xl text-black ">
              <FiMenu />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#FFFFFF] w-[300px] p-4">
            <ul className="flex flex-col items-center gap-6 py-6">
              <Link href="/">
                <SheetClose asChild>
                  <li className="font-poppins hover:text-[#B88E2F] transition-all duration-150 font-[500] text-[16px] relative inline-block before:content-[''] before:absolute before:w-0 before:left-0 before:h-[4px] before:top-6 before:rounded-full before:transition-all before:duration-300 before:ease-in-out before:bg-gradient-to-r before:from-yellow-500 before:to-orange-500 hover:before:w-full hover:before:right-0">Home</li>
                </SheetClose>
              </Link>
              <Link href="/Shop">
                <SheetClose asChild>
                  <li className="font-poppins hover:text-[#B88E2F] transition-all duration-150 font-[500] text-[16px] relative inline-block before:content-[''] before:absolute before:w-0 before:left-0 before:h-[4px] before:top-6 before:rounded-full before:transition-all before:duration-300 before:ease-in-out before:bg-gradient-to-r before:from-yellow-500 before:to-orange-500 hover:before:w-full hover:before:right-0">Shop</li>
                </SheetClose>
              </Link>
              <Link href="/Blog">
                <SheetClose asChild>
                  <li className="font-poppins hover:text-[#B88E2F] transition-all duration-150 font-[500] text-[16px] relative inline-block before:content-[''] before:absolute before:w-0 before:left-0 before:h-[4px] before:top-6 before:rounded-full before:transition-all before:duration-300 before:ease-in-out before:bg-gradient-to-r before:from-yellow-500 before:to-orange-500 hover:before:w-full hover:before:right-0">Blog</li>
                </SheetClose>
              </Link>
              <Link href="/Contact">
                <SheetClose asChild>
                  <li className="font-poppins hover:text-[#B88E2F] transition-all duration-150 font-[500] text-[16px] relative inline-block before:content-[''] before:absolute before:w-0 before:left-0 before:h-[4px] before:top-6 before:rounded-full before:transition-all before:duration-300 before:ease-in-out before:bg-gradient-to-r before:from-yellow-500 before:to-orange-500 hover:before:w-full hover:before:right-0">Contact</li>
                </SheetClose>
              </Link>
              <div className="flex gap-8 mt-4">
                <Image src="/user.png" alt="User" height={24} width={24} className="w-[24px] h-[24px] hover:scale-110" />
                <Image src="/search.png" alt="Search" height={24} width={24} className="w-[24px]  h-[24px] hover:scale-110" />
                <FaRegHeart className="w-[24px] h-[24px] hover:scale-110 hover:text-red-500" />
                <Link href="/Cart">
                  <AiOutlineShoppingCart className="w-[24px] h-[24px] hover:scale-110" />
                </Link>
              </div>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      
      
    </div>
  );
}

export default Header;
