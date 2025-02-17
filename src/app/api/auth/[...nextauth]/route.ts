

// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Correct path to import authOptions

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
