import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Products from '@/components/Products'
import Hero3 from '@/components/Hero3'
import React from 'react'
import FurnitureGallery from '@/components/FurnitureGallery'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Hero2/>
      <Products/>
      <Hero3/>
      <FurnitureGallery/>
      <Footer/>
    </div>
  )
}

export default page