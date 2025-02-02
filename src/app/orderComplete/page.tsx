




import Image from "next/image";
import Link from "next/link";

function Order() {
  return (
    <div className="max-w-[1920px]  mx-auto py-16">
       
      <div className="relative md:w-[625px]  w-full mx-auto flex flex-col gap-8 justify-center text-center  items-center ">
          <Image
          className="w-[65px] hidden md:block absolute -left-12 top-4"
          src={'/order2.png'}
          alt={"order"}
          height={300}
          width={300}
        />
        <Image
          className="w-[65px] rounded-[50%] p-2 border-8 border-gray-100"
          src="/order.png"
          alt={"order"}
          height={300}
          width={300}
        />
        <h1 className="text-[#101750] font-bold text-4xl">Your Order Is Completed! </h1>
        <p className="set_lato leading-[30px] text-[#8D92A7] md:w-[600px] ">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        <Link href="/Shop">
         <button className="bg-white px-4 py-3 hover:shadow-lg hover:scale-105 hover:bg-[#FFAD33] hover:border-[#FFAD33] hover:text-white transition-all duration-300 ease-out font-[550]  items-center text-[18px] rounded-md text-[#FFAD33] shadow-sm border-[2px] border-[#FFAD33] ">
            Continue Shopping..
         </button></Link>
      </div>
    </div>
  );
}

export default Order;