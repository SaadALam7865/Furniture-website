

// "use client";
// import { useShoppingCart } from "use-shopping-cart";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { toast } from "react-hot-toast";

// export interface ProductsCart {
//   _id: string;
//   title: string;
//   imageUrl: string;
//   currency: string;
//   discountPercentage: number; // Should represent the price
//   stockLevel: number; // Added stockLevel
// }

// function AddtoBag({
//   title,
//   imageUrl,
//   discountPercentage,
//   currency,
//   _id,
//   stockLevel,
// }: ProductsCart) {
//   const { addItem } = useShoppingCart();
//   const [currentStock, setCurrentStock] = useState(stockLevel);

//   // Map product fields correctly
//   const products = {
//     name: title, // Map `title` to `name`
//     title: title,
//     price: discountPercentage, // Ensure this is the correct price
//     currency: currency,
//     imageUrl: imageUrl,
//     id: _id,
//     sku: _id,
//   };

//   const handleAddToCart = async () => {
//     try {
//       const payload = {
//         productId: _id, // Ensure productId is included
//         quantity: 1, // Hardcoded quantity for adding 1 item
//       };

//       const response = await fetch("/api/updateStock", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload), // Send correct payload
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setCurrentStock((prev) => prev - 1); // Decrement stock
//         addItem(products); // Add to cart
//         toast.success(`${title} added to cart!`); // Success notification
//         console.log("Stock updated:", result.updatedStockLevel);
//         console.log(currentStock);
//       } else {
//         const data = await response.json();
//         toast.error(data.message || "Failed to add to cart!"); // Error toast
//       }
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       toast.error("Something went wrong!"); // Error toast
//     }
//   };

//   return (
//     <Button
//       className="bg-pink-700 text-white rounded-[9px] text-[15px]
//        hover:bg-pink-500 hover:scale-105 transition-all duration-300 ease-linear"
//       onClick={handleAddToCart} // Updated function
//     >
//       Add to Cart
//     </Button>
//   );
// }

// export default AddtoBag;
