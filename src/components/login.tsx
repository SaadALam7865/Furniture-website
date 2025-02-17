"use client";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // If user is already logged in, redirect to home
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  if (session) {
    return null; // Don't render the login page if user is already logged in
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Furniro</span>
          </h1>
          <p className="text-lg text-gray-700 mt-2 max-w-md">
            Your go-to destination for premium furniture. Please log in to manage your account and explore more.
          </p>
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Login to Your Account</h2>
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })} // Auto redirect after login
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none"
          >
            Login with Google
          </button>
          <button
            onClick={() => signIn("github", { callbackUrl: "/" })} // Auto redirect after login
            className="w-full mt-4 bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-900 transition-transform transform hover:scale-105 focus:outline-none"
          >
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
