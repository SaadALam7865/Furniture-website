import Link from "next/link";

import { FaAngleRight } from "react-icons/fa";
import React from "react";
import { FaSearch } from "react-icons/fa";

const page = () => {
  return (
    <div>
     
      {/* Background Section */}
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
          {/* Logo */}
          <img
            className="h-16 w-16 md:h-[77px] md:w-[77px]"
            src="/logo.png"
            alt="Logo"
          />
          {/* Title */}
          <h1 className="font-Poppins font-medium text-3xl md:text-4xl lg:text-5xl text-black mt-2">
            Blog
          </h1>
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center mt-4 text-sm md:text-base">
            <Link href="/">
              <p className="text-black font-Poppins hover:font-bold  font-medium">
                Home
              </p>
            </Link>
            <FaAngleRight className="mx-2 text-black" />
            <p className="text-black font-Poppins font-light">Blog</p>
          </div>
        </div>
      </div>
      {/* ------------------------------- */}

      <main className="w-[1440px] h-[3310px]     mb-36 shadow-md mx-auto mt-44 relative">
        <div className="w-[820px]  h-[3130px] mt-16 ml-24 border-2 rounded-md relative">
          {/* Short Form Box */}
          <div className="absolute mt-2 rounded-md shadow-lg  top-0 right-[-440px] border-[#9F9F9F]  w-[360px] h-[450px]  border-[1px]">
            <div className="w-[311px] flex justify-end  rounded-md  h-[58px] mt-7 mx-auto border-[#9F9F9F] border-[1px] ">
              <h3 className="mr-48 mt-4 font-semibold font-poppins text-[18px] text-[#9F9F9F]">
                Search
              </h3>
              <FaSearch className="h-6 w-6 text-[#393838] mr-5 items-center my-auto" />
            </div>
            <div className="w-[251px] h-[353px]  mt-6 ml-10">
              <h2 className="w-[134px] h-[36px] mt-2 ml-5 font-poppins font-[500] text-[24px] text-[#000000]">
                Categories
              </h2>
              <p className="w-[49px] flex h-[24px] mt-4 ml-6 font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                Crafts
              </p>

              <p className="w-[55px] h-[24px] mt-6 ml-6 font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                Design
              </p>
              <p className="w-[91px] h-[24px] mt-6 ml-6 font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                Handmade
              </p>
              <p className="w-[91px] h-[24px] mt-6 ml-6 font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                Interior
              </p>
              <p className="w-[91px] h-[24px] mt-6 ml-6 font-Poppins font-normal text-[16px] text-[#9F9F9F]">
                Wood
              </p>
            </div>
            {/* Posts Section */}
            <div className="w-[393px] shadow-md h-[650px] mt-12 ml-10 ">
              <div className="w-[252px] h-[618px] mt-4 border-2  ">
                <h2 className="w-[155px] h-[36px] mt-2 font-poppins font-[500] text-[24px] text-[#000000]">
                  Recent Posts
                </h2>
                <div className="w-[211px] h-[80px] flex mt-4 items-center gap-4">
                  <img
                    className="h-20 w-20 mt-5 rounded-md"
                    src="/kitab.jpeg"
                    alt=""
                  />
                  <p className="[w-119px] h-[42px] my-auto font-Poppins font-[500] text-[14px] text-[#000000] ">
                    Going all-in with millennial design
                  </p>
                </div>
                <div className="w-[211px] h-[80px] flex mt-8 items-center gap-4">
                  <img
                    className="h-20 w-20 mt-5 rounded-md"
                    src="/words.jpeg"
                    alt=""
                  />
                  <p className="[w-249px] h-[42px]  font-Poppins font-[500] text-[14px] text-[#000000] ">
                    Exploring new ways of decorating
                  </p>
                </div>
                <div className="w-[211px] h-[80px] flex mt-8 items-center gap-4">
                  <img
                    className="h-20 w-20 mt-5 rounded-md"
                    src="/laptop.jpeg"
                    alt=""
                  />
                  <p className="[w-119px] h-[42px] my-auto font-Poppins font-[500] text-[14px] text-[#000000] ">
                    Handmade pieces that took time to make
                  </p>
                </div>
                <div className="w-[211px] h-[80px] flex mt-8 items-center gap-4">
                  <img
                    className="h-20 w-20 mt-5 rounded-md"
                    src="/computer.jpeg"
                    alt=""
                  />
                  <p className="[w-119px] h-[42px] my-auto font-Poppins font-[500] text-[14px] text-[#000000] ">
                    Modern home in Milan
                  </p>
                </div>
                <div className="w-[211px] h-[80px] flex mt-8 items-center gap-4">
                  <img
                    className="h-20 w-20 mt-5 rounded-md"
                    src="/tea.jpeg"
                    alt=""
                  />
                  <p className="[w-119px] h-[42px] my-auto font-Poppins font-[500] text-[14px] text-[#000000] ">
                    Colorful office redesign
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-[820px] h-[994px]  border-2">
            <div className="w-[817px] h-[500px] items-center border-[10px] border-[#FFFFFF]">
              <img src="/book.jpeg" alt="" />
            </div>

            <div className="w-[249px] h-[24px] mt-4">
              <div className="w-[80px] flex gap-3 items-center h-[24px] mt-12">
                <img
                  className="h-5 w-5 mt-4 ml-3 text-[#9F9F9F]"
                  src="/Vector (2).png"
                  alt=""
                />
                <p className="h-6 w-14 mt-5 font-poppins font-normal">Admin</p>
              </div>
            </div>
            <div className="h-5 w-[250px] flex gap-3 items-center">
              <img
                className="text-[#9F9F9F] flex items-center h-5 w-5 ml-32 mb-7"
                src="/calendar.png"
                alt=""
              />
              <p className="w-24 h-6 mb-6 font-poppins font-normal text-[16px]">
                14 Oct 2022
              </p>
            </div>

            <div className="h-6 w-[250px] mb-12 flex gap-3 items-center">
              <img
                className="text-[#9F9F9F] flex items-center h-5 w-5 ml-72 mb-16"
                src="/Vector (3).png"
                alt=""
              />
              <p className="w-24 h-6 mb-16 font-poppins font-normal text-[16px]">
                Wood
              </p>
            </div>

            <div className="w-[517px] h-12 mt-10 ml-5">
              <h1 className="font-Poppins font-[500] text-[30px] text-[#000000]">
                Going all-in with millennial design
              </h1>
            </div>

            <div className="w-[817px] h-28 ml-5 mt-10">
              <p className="text-[#9F9F9F] text-[15px] font-normal font-Poppins">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam aliquam, asperiores rem labore est nisi omnis obcaecati
                commodi suscipit esse minus, laborum officiis doloremque nulla
                ab. Possimus vero repellendus nihil. Modi, aperiam atque. Ipsa
                et quaerat ipsum corporis, aliquid non, minus ducimus placeat
                deleniti reprehenderit pariatur voluptas iste. Error, provident
                quas sed deleniti optio voluptatibus dolore illo autem
                consequatur nulla. Ipsam nihil suscipit minus, non voluptas sed
                unde mollitia. Nisi ipsa ducimus cum blanditiis vel explicabo
                fugiat cumque inventore iusto. Obcaecati placeat consequatur
                accusamus, doloremque enim eveniet optio reiciendis! Quidem?
              </p>
            </div>

            <div className="w-[89px] h-9 mt-20 ml-5 border-b-2 border-b-[#9F9F9F]">
              <h2 className="font-Poppins font-normal text-[16px] text-center">
                Read more
              </h2>
            </div>
          </div>
          {/* saad */}
          <div className="w-[820px] h-[994px] mt-14 border-2">
            <div className="w-[817px] h-[500px] items-center border-[10px] border-[#FFFFFF]">
              <img src="/chai.jpeg" alt="" />
            </div>

            <div className="w-[249px] h-[24px] mt-4">
              <div className="w-[80px] flex gap-3 items-center h-[24px] mt-12">
                <img
                  className="h-5 w-5 mt-4 ml-3 text-[#9F9F9F]"
                  src="/Vector (2).png"
                  alt=""
                />
                <p className="h-6 w-14 mt-5 font-poppins font-normal">Admin</p>
              </div>
            </div>
            <div className="h-5 w-[250px] flex gap-3 items-center">
              <img
                className="text-[#9F9F9F] flex items-center h-5 w-5 ml-32 mb-7"
                src="/calendar.png"
                alt=""
              />
              <p className="w-24 h-6 mb-6 font-poppins font-normal text-[16px]">
                14 Oct 2022
              </p>
            </div>

            <div className="h-6 w-[250px] mb-12 flex gap-3 items-center">
              <img
                className="text-[#9F9F9F] flex items-center h-5 w-5 ml-72 mb-16"
                src="/Vector (3).png"
                alt=""
              />
              <p className="w-24 h-6 mb-16 font-poppins font-normal text-[16px]">
                Wood
              </p>
            </div>

            <div className="w-[517px] h-12 mt-10 ml-5">
              <h1 className="font-Poppins font-[500] text-[30px] text-[#000000]">
                Going all-in with millennial design
              </h1>
            </div>

            <div className="w-[817px] h-28 ml-5 mt-10">
              <p className="text-[#9F9F9F] text-[15px] font-normal font-Poppins">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores nobis aspernatur natus modi vitae! Ipsam tempore quam
                quasi temporibus labore ullam in eum, iure quos, aliquam, saepe
                sed voluptatibus. Deserunt! Nobis cupiditate ipsa saepe sed
                tempore, magni fugiat dignissimos qui animi repudiandae ratione
                dolores enim quibusdam cum rem provident aliquid necessitatibus
                ea eius odio culpa distinctio. Quidem deserunt accusantium
                veritatis.
              </p>
            </div>

            <div className="w-[89px] h-9 mt-10 ml-5 border-b-2 border-b-[#9F9F9F]">
              <h2 className="font-Poppins font-normal text-[16px] text-center">
                Read more
              </h2>
            </div>
          </div>
          {/* Third section */}
          <div className="w-[820px] h-[994px] mt-16 border-2">
            <div className="w-[817px] h-[500px] items-center border-[10px] border-[#FFFFFF]">
              <img src="/book.jpeg" alt="" />
            </div>

            <div className="w-[249px] h-[24px] mt-4">
              <div className="w-[80px] flex gap-3 items-center h-[24px] mt-12">
                <img
                  className="h-5 w-5 mt-4 ml-3 text-[#9F9F9F]"
                  src="/Vector (2).png"
                  alt=""
                />
                <p className="h-6 w-14 mt-5 font-poppins font-normal">Admin</p>
              </div>
            </div>
            <div className="h-5 w-[250px] flex gap-3 items-center">
              <img
                className="text-[#9F9F9F] flex items-center h-5 w-5 ml-32 mb-7"
                src="/calendar.png"
                alt=""
              />
              <p className="w-24 h-6 mb-6 font-poppins font-normal text-[16px]">
                14 Oct 2022
              </p>
            </div>

            <div className="h-6 w-[250px] mb-12 flex gap-3 items-center">
              <img
                className="text-[#9F9F9F] flex items-center h-5 w-5 ml-72 mb-16"
                src="/Vector (3).png"
                alt=""
              />
              <p className="w-24 h-6 mb-16 font-poppins font-normal text-[16px]">
                Wood
              </p>
            </div>

            <div className="w-[517px] h-12 mt-10 ml-5">
              <h1 className="font-Poppins font-[500] text-[30px] text-[#000000]">
                Going all-in with millennial design
              </h1>
            </div>

            <div className="w-[817px] h-28 ml-5 mt-10">
              <p className="text-[#9F9F9F] text-[15px] font-normal font-Poppins">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda accusamus iste nisi deleniti quas dicta quia quisquam
                sunt sequi illum eum voluptas temporibus iure quidem sint
                maxime, vitae at vero. Laborum quod quisquam molestias id
                similique iste adipisci vitae error dolores commodi temporibus
                repellat accusantium necessitatibus, modi accusamus autem
                blanditiis animi quo asperiores cum. Eos delectus accusantium
                nemo possimus magni?{" "}
              </p>
            </div>

            <div className="w-[89px] h-9 mt-10 ml-5 border-b-2 border-b-[#9F9F9F]">
              <h2 className="font-Poppins font-normal text-[16px] text-center">
                Read more
              </h2>
            </div>
          </div>
        </div>
        {/* saaad */}
        <div className="h-24 w-76 mt-4 flex gap-14 pt-7 justify-center  text-center">
          <div className="h-14 w-14 items-center  pt-3 rounded-md bg-[#B88E2F] font-Poppins font-normal text-[20px] text-[#FFFFFF]">
            <p className="font-Poppins font-normal items-center ">1</p>
          </div>
          <div className="h-14 w-14 items-center pt-3 bg-[#F9F1E7] border-2 border-gray-400 rounded-md font-Poppins font-normal text-[20px] text-[#000000]">
            <p className="font-Poppins font-normal items-center ">2</p>
          </div>
          <div className="h-14 w-16 items-center border-2 border-gray-400  pt-3 bg-[#F9F1E7] border-[] rounded-md font-Poppins font-normal text-[20px] text-[#000000]">
            <p className="font-Poppins font-normal items-center ">3</p>
          </div>
          <div className="mt-4">
            <p className="text-[24px]">Next</p>
          </div>
        </div>
      </main>
      {/* Feature 1 */}
      <div className="w-full space-y-6 md:space-y-0 items-center  max-w-[1500px] border-2 border-[#d6d3d3] hover:border-[#B88E2F] flex flex-wrap justify-around  h-auto mt-28 mx-auto p-8 gap-6">
        {/* Feature 1 */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-1/5 flex hover:scale-105 gap-4 items-center">
          <div className="w-14 h-14">
            <img
              src="/Group.png"
              alt="High Quality"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-Poppins font-semibold text-lg md:text-xl text-[#242424]">
              High Quality
            </h3>
            <p className="font-Poppins text-sm md:text-base text-[#898989]">
              Crafted from top materials
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-1/5 flex hover:scale-105 gap-4 items-center">
          <div className="w-14 h-14">
            <img
              src="/guarantee.png"
              alt="Warranty Protection"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-Poppins font-semibold text-lg md:text-xl text-[#242424]">
              Warranty Protection
            </h3>
            <p className="font-Poppins text-sm md:text-base text-[#898989]">
              Over 2 years
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-1/5 flex hover:scale-105 gap-4 items-center">
          <div className="w-14 h-14">
            <img
              src="/shipping.png"
              alt="Free Shipping"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-Poppins font-semibold text-lg md:text-xl text-[#242424]">
              Free Shipping
            </h3>
            <p className="font-Poppins text-sm md:text-base text-[#898989]">
              Delivered to your door
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-1/5 flex hover:scale-105 gap-4 items-center">
          <div className="w-14 h-14">
            <img
              src="/customer-support.png"
              alt="24/7 Support"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-Poppins font-semibold text-lg md:text-xl text-[#242424]">
              24/7 Support
            </h3>
            <p className="font-Poppins text-sm md:text-base text-[#898989]">
              We’re always here to help
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default page;
