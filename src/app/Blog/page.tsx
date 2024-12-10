import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <main className='w-full h-full mx-8 mt-44 ml-10   bg-[#FFFFFF]'>
        <div className='w-[820px]  space-y-24 h-[2490px] mt-12 ml-10 border-2 rounded-md'>
          
          {/* First Section */}
          <div className='w-[820px] h-[794px] space-y-5  border-2'>
            <div className='w-[817px] h-[500px] items-center border-[10px] border-[#FFFFFF]'>
              <img src="/book.jpeg" alt="Book" />
            </div>
            {/* Metadata */}
            <div className='w-[249px] h-[24px] mt-4'>
              <div className='w-[80px] flex gap-3 items-center h-[24px] mt-12'>
                <img className='h-5 w-5 mt-4 ml-3 text-[#9F9F9F]' src="/Vector (2).png" alt="Admin Icon" />
                <p className='h-6 w-14 mt-5 font-poppins font-normal'>Admin</p>
              </div>
            </div>
            <div className='h-5 w-[250px] flex gap-3 items-center'>
              <img className='text-[#9F9F9F] flex items-center h-5 w-5 ml-32 mb-7' src="/calendar.png" alt="Calendar Icon" />
              <p className='w-24 h-6 mb-6 font-poppins font-normal text-[16px]'>14 Oct 2022</p>
            </div>
            <div className='h-6 w-[250px] mb-12 flex gap-3 items-center'>
              <img className='text-[#9F9F9F] flex items-center h-5 w-5 ml-72 mb-16' src="/Vector (3).png" alt="Wood Icon" />
              <p className='w-24 h-6 mb-16 font-poppins font-normal text-[16px]'>Wood</p>
            </div>
            {/* Title */}
            <div className='w-[517px] h-12 mt-10 ml-5'>
              <h1 className='font-Poppins font-[500] text-[30px] text-[#000000]'>Going all-in with millennial design</h1>
            </div>
            {/* Paragraph */}
            <div className='w-[817px] h-28 mt-10'>
              <p className='text-[#9F9F9F] text-[15px] font-normal font-Poppins'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* Read More Button */}
            <div className='w-[89px] h-9 mt-10 border-b-2 border-b-[#9F9F9F]'>
              <h2 className='font-Poppins font-normal text-[16px] text-center'>Read more</h2>
            </div>
          </div>

          {/* Second Section */}
          <div className='w-[820px] h-[794px] space-y-5 border-2 mt-8'>
            <div className='w-[817px] h-[500px] items-center border-[10px] border-[#FFFFFF]'>
              <img src="/hand.jpeg" alt="Hand" />
            </div>
            {/* Metadata */}
            <div className='w-[249px] h-[24px] mt-4'>
              <div className='w-[80px] flex gap-3 items-center h-[24px] mt-12'>
                <img className='h-5 w-5 mt-4 ml-3 text-[#9F9F9F]' src="/Vector (2).png" alt="Admin Icon" />
                <p className='h-6 w-14 mt-5 font-poppins font-normal'>Admin</p>
              </div>
            </div>
            <div className='h-5 w-[250px] flex gap-3 items-center'>
              <img className='text-[#9F9F9F] flex items-center h-5 w-5 ml-32 mb-7' src="/calendar.png" alt="Calendar Icon" />
              <p className='w-24 h-6 mb-6 font-poppins font-normal text-[16px]'>14 Oct 2022</p>
            </div>
            <div className='h-6 w-[250px] mb-12 flex gap-3 items-center'>
              <img className='text-[#9F9F9F] flex items-center h-5 w-5 ml-72 mb-16' src="/Vector (3).png" alt="Wood Icon" />
              <p className='w-24 h-6 mb-16 font-poppins font-normal text-[16px]'>Wood</p>
            </div>
            {/* Title */}
            <div className='w-[517px] h-12 mt-10 ml-5'>
              <h1 className='font-Poppins font-[500] text-[30px] text-[#000000]'>Going all-in with millennial design</h1>
            </div>
            {/* Paragraph */}
            <div className='w-[817px] h-28 mt-10'>
              <p className='text-[#9F9F9F] text-[15px] font-normal font-Poppins'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* Read More Button */}
            <div className='w-[89px] h-9 mt-10 border-b-2 border-b-[#9F9F9F]'>
              <h2 className='font-Poppins font-normal text-[16px] text-center'>Read more</h2>
            </div>
          </div>

          {/* Third Section - You can add the third section here */}
          <div className='w-[820px] h-[794px] space-y-5 border-2 mt-8'>
            <div className='w-[817px] h-[500px] items-center border-[10px] border-[#FFFFFF]'>
              <img src="/chai.jpeg" alt="Third Section Image" />
            </div>
            {/* Metadata */}
            <div className='w-[249px] h-[24px] mt-4'>
              <div className='w-[80px] flex gap-3 items-center h-[24px] mt-12'>
                <img className='h-5 w-5 mt-4 ml-3 text-[#9F9F9F]' src="/Vector (2).png" alt="Admin Icon" />
                <p className='h-6 w-14 mt-5 font-poppins font-normal'>Admin</p>
              </div>
            </div>
            <div className='h-5 w-[250px] flex gap-3 items-center'>
              <img className='text-[#9F9F9F] flex items-center h-5 w-5 ml-32 mb-7' src="/calendar.png" alt="Calendar Icon" />
              <p className='w-24 h-6 mb-6 font-poppins font-normal text-[16px]'>14 Oct 2022</p>
            </div>
            <div className='h-6 w-[250px] mb-12 flex gap-3 items-center'>
              <img className='text-[#9F9F9F] flex items-center h-5 w-5 ml-72 mb-16' src="/Vector (3).png" alt="Wood Icon" />
              <p className='w-24 h-6 mb-16 font-poppins font-normal text-[16px]'>Wood</p>
            </div>
            {/* Title */}
            <div className='w-[517px] h-12 mt-10 ml-5'>
              <h1 className='font-Poppins font-[500] text-[30px] text-[#000000]'>Going all-in with millennial design</h1>
            </div>
            {/* Paragraph */}
            <div className='w-[817px] h-28 mt-10'>
              <p className='text-[#9F9F9F] text-[15px] font-normal font-Poppins'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* Read More Button */}
            <div className='w-[89px] h-9 mt-10 border-b-2 border-b-[#9F9F9F]'>
              <h2 className='font-Poppins font-normal text-[16px] text-center'>Read more</h2>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default page;
