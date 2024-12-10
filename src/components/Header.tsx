import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';

const Header = () => {
  return (
    <div>
        <div className='w-[1440px] h-[100px] bg-[#FFFFFF] flex'>
            <div className='w-[185px] h-[41px] mt-[29px] ml-[54px] flex items-center  gap-[5px]'>
            {/* logo */}
             <img className='w-[50px] h-[32px]' src="/logo.png" alt="logo" />
             <h1 className='w-[130px] h-[41px] font-Montserrat font-[700] text-[24px] text-[#000000]'>Furniro</h1>
            </div>
            <div className='w-[430px] h-[24px] mt-[10px] ml-[200px]'>
             <ul className='flex '>
              <Link href="/"><li className='w-[48px] h-[24px] mt-[29px] ml-[50px] font-poppins font-[500] text-[16px] '>Home</li></Link>
              <Link href="/Shop"><li className='w-[42px] h-[24px] mt-[29px] ml-[62px]'>Shop</li></Link>
              <Link href="/Blog"><li className='w-[36px] h-[24px] mt-[29px] ml-[74px]'> Blog</li></Link>
              <Link href="/Contact"><li className='w-[66px] h-[24px] mt-[29px] ml-[86px]'>Contact</li></Link>
             </ul>
            </div >
            <div className='w-[200px] h-[24px] mt-[40px] ml-[200px] flex gap-[40px] '>
            <FaRegUserCircle className='w-[28px] h-[28px]  ' />
            <FaSearch className='w-[28px] h-[28px]  '  />
            <FaRegHeart className='w-[28px] h-[28px]  '  />
            <AiOutlineShoppingCart className='w-[28px] h-[28px] '  />
            </div>
        </div>
    </div>
  )
}

export default Header