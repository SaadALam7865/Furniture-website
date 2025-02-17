import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // ✅ Protected routes list
  const protectedRoutes = ["/dashboard", "/Cart", "/Checkout","/Contact"];

  // ✅ Agar user login nahi hai aur protected route pe jaana chahta hai, toh redirect karo
  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next(); // ✅ Allow request if authorized
}

// ✅ Apply middleware only on these routes
export const config = {
  matcher: ["/Cart", "/Checkout", "/dashboard", "/Blog"], 
};
