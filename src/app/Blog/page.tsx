import { FaAngleRight } from "react-icons/fa";
import React from "react";
import { FaCalendarAlt, FaUser, FaFolderOpen } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Feature from "@/components/Feature";
import Pagination from "@/components/Pagination";

const page = () => {
  const categories = ["Crafts", "Design", "Handmade", "Interior", "Wood"];

  const postsData = [
    {
      id: 1,
      title: "  Going all-in with millennial design",
      image: "/kitab.jpeg",
    },
    { id: 2, title: " Exploring new ways of decorating", image: "/words.jpeg" },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      image: "/laptop.jpeg",
    },
    { id: 4, title: "Modern home in Milan", image: "/computer.jpeg" },
    { id: 5, title: "Colorful office redesign", image: "/tea.jpeg" },
  ];

  const posts = [
    {
      id: 1,
      image: "/book.jpeg",
      admin: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Going all-in with millennial design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam, asperiores rem labore est nisi omnis obcaecati commodi suscipit esse minus, laborum officiis doloremque nulla ab. Possimus vero repellendus nihil...",
    },
    {
      id: 2,
      image: "/chai.jpeg",
      admin: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Going all-in with millennial design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam, asperiores rem labore est nisi omnis obcaecati commodi suscipit esse minus, laborum officiis doloremque nulla ab. Possimus vero repellendus nihil...",
    },
    {
      id: 3,
      image: "/book.jpeg",
      admin: "Admin",
      date: "14 Oct 2022",
      category: "Wood",
      title: "Going all-in with millennial design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus iste nisi deleniti quas dicta quia quisquam sunt sequi illum eum voluptas temporibus iure quidem sint maxime, vitae at vero...",
    },
  ];

  return (
    <div>
      {/* Background Section */}
      <div
        className="h-[316px] w-full mt-24 opacity-[70%] relative"
        style={{
          backgroundImage: "url('/bg-img.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Wrapper */}
        <div className="flex flex-col items-center justify-center h-full">
          <img className="h-[77px] w-[77px]" src="/logo.png" alt="Logo" />
          <h1 className="font-Poppins font-[500] text-[48px] text-[#000000]">
            Blog
          </h1>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center mt-4">
            <p className="text-[#000000] font-poppins text-[16px] font-[500]">
              Home
            </p>
            <FaAngleRight className="mx-2" />
            <p className="text-[#000000] font-poppins text-[16px] font-[300]">
              Blog
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-36 mt-44">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content Section */}
          <div className="lg:col-span-2">
            <div className="space-y-10">
              {posts.map((post) => (
                <div key={post.id} className="border-2 p-4 rounded-md">
                  <div className="w-full max-h-[500px] border-[10px] border-[#FFFFFF]">
                    <img
                      src={post.image}
                      alt="Post Image"
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-5"
                        src="/Vector (2).png"
                        alt="Admin"
                      />
                      <p className="font-poppins font-normal text-sm">
                        {post.admin}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#9F9F9F] h-5 w-5" />
                      <p className="font-poppins font-normal text-sm">
                        {post.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-5"
                        src="/Vector (3).png"
                        alt="Category"
                      />
                      <p className="font-poppins font-normal text-sm">
                        {post.category}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h1 className="font-poppins font-medium text-2xl text-[#000000]">
                      {post.title}
                    </h1>
                  </div>

                  <div className="mt-5">
                    <p className="text-[#9F9F9F] text-sm font-normal font-poppins leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="w-fit mt-8 border-b-2 border-b-[#9F9F9F]">
                    <h2 className="font-poppins  font-normal text-sm text-center">
                      Read more
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="w-full lg:w-80 border rounded-md shadow-lg p-4">
            {/* Search Bar */}
            <div className="flex items-center border rounded-md p-3 w-full mb-6">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 text-gray-600 outline-none bg-transparent"
              />
              <FaSearch className="text-gray-700" />
            </div>

            {/* Categories Section */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              {categories.map((category, index) => (
                <p
                  key={index}
                  className="text-gray-600 hover:text-black transition cursor-pointer mb-2"
                >
                  {category}
                </p>
              ))}
            </div>

            {/* Recent Posts Section */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
              {postsData.map((post) => (
                <div key={post.id} className="flex items-center gap-4 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <p className="text-sm text-black font-medium line-clamp-2">
                    {post.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
        <Pagination />
        </div>
      </main>
      <Feature />
    </div>
  );
};

export default page;
