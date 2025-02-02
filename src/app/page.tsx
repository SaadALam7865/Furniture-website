

"use client";
import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';
import Hero3 from '@/components/Hero3'
import React from 'react'
import FurnitureGallery from '@/components/FurnitureGallery'
import ProductsCard from '@/components/ProductsCard';




const page = () => {
  
  return (
    <div>
      <Hero/>
      <Hero2/>
      <ProductsCard/>
      <Hero3/>
      <FurnitureGallery/>
    </div>
  )
}

export default page