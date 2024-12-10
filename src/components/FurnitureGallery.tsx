import React from 'react'

const FurnitureGallery = () => {
  return (
    <div className='w-full h-full mt-10  '>
      {/* Heading sec */}
    <div className='w-full h-full  justify-center items-center mt-20 '>
      <p className='font-Poppins font-semibold text-[20px] text-center text-[#616161]'>Share your setup with</p>
       <h1 className='mt-6  font-Poppins font-[700]  text-[40px] text-[#3A3A3A] items-center text-center'>#FuniroFurniture</h1>
     

    </div >
      {/* image sec */}
      <div className='flex gap-3 w-full ml-[
-196px] '>
    <div className='mt-5  ml-[-24]  flex'>
      <img src="/image1.png" alt="" height={200} width={200} />
      
    </div>
    <div className='h-[312px] w-[451px]  mt-24 ml-3 '>
        <img className='' src="/image2.png" alt="" />

        <img className='mt-8' src="/image4.png" alt="" height={"242px"} width={"344px"}/>
    </div>
    <div className='h-[195px] flex flex-col items-center w-[392px] mt-28 ml-3 '>
    <img className='h-[242px] w-[344px]' src="/image9.png" alt="" />
        <img className='h-[342px] w-[344px] pb-24 pt-5' src="/image3.png" alt="" />
       
    </div>
    <div className='h-[290px] w-[348px] mt-24 ml-[4] '>
        <img src="/image6.png" alt="" />
        <img className='mt-5' src="/image7.png" alt="" width={"178px"} height={"242px"} />
        

    </div>
    
    <div className='h-[242px] w-[344px] mt-24 ml-[-4] '>
        <img src="/image9.png" alt="" />
    </div>
    
    </div>

    </div>
  )
}

export default FurnitureGallery

