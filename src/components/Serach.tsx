
"use client"; // Client Component for real-time interactivity

import { client } from "@/sanity/lib/client"; // Import the standard Sanity client
import { allProductsQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface TProduct {
  _id: string;
  description: string;
  title: string;
  imageUrl: string;
  price: number;
  discountPercentage: number;
  tags: string[];
}

export default function SearchWithSanity() {
  const [query, setQuery] = useState(""); // Search query state
  const [results, setResults] = useState<TProduct[]>([]); // Filtered products
  const [showResults, setShowResults] = useState(false); // Toggle results visibility

  // Handle Search Button Click
  const handleSearch = async () => {
    if (query.length > 2) {
      try {
        // Fetch data using the standard Sanity client
        const allProducts: TProduct[] = await client.fetch(allProductsQuery);

        // Filter results based on the search query (title and tags)
        const filteredResults = allProducts.filter(
          (product) =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.tags.some((tag) =>
              tag.toLowerCase().includes(query.toLowerCase())
            )
        );

        setResults(filteredResults);
        setShowResults(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      alert("Please enter at least 3 characters to search.");
      setShowResults(false);
    }
  };

  // Handle Clear Search
  const handleClear = () => {
    setQuery("");
    setResults([]);
    setShowResults(false);
  };
  return (
    <div className="relative z-[100] flex-wrap mx-auto bg-gray-50 shadow-md rounded max-w-2xl">
      {/* Search Input and Buttons */}
      <div className="flex items-center gap-1">
        <input
          type="text"
          placeholder="Search name or category..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-[#B88E2F] text-white px-4 py-2 rounded shadow hover:bg-pink-600 transition"
        >
          Search
        </button>
        {showResults && (
          <button
            onClick={handleClear}
            className="bg-gray-300 text-gray-800 px-3 py-2 rounded shadow hover:bg-gray-400 transition"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="mt-4 bg-white absolute z-10 w-full max-h-80 overflow-y-auto rounded shadow-lg p-4">
          <h2 className="text-lg font-bold mb-4">Search Results:</h2>
          {results.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {results.map((product: TProduct) => (
                <Link href={`/Shop/${product._id}`} key={product._id}>
                  <div className="flex gap-4 items-center bg-gray-100 border rounded shadow p-3 hover:bg-gray-200 transition">
                    <Image
                    width={200}
                    height={200}
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-[12px] font-semibold text-gray-700">
                        {product.title}
                      </h3>
                      <p className="text-xs py-1 text-slate-600">
                        Category:{" "}
                        <span className=" ml-3">{product.tags}</span>
                      </p>

                      <p className="text-sm pt-2 ">
                        {product.discountPercentage > 0 ? (
                          <span className=" text-gray-500 font-bold">
                            {product.price -
                              (product.price * product.discountPercentage) /
                                100}
                            <span className="text-red-700 ml-9 font-semibold line-through">
                              ${product.price}
                            </span>
                          </span>
                        ) : (
                          <p>${product.price}</p>
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No products found for {query}.</p>
          )}
        </div>
      )}
    </div>
  );
}