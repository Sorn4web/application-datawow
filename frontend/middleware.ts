import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

interface CustomToken {
  user: {
    fullName: string;
    role: string[];
    status: string;
    success: boolean;
    message: string;
    token: string;
  };
  iat: number;
  exp: number;
  jti: string;
}

export async function middleware(req: NextRequest) {
  const token = (await getToken({ req })) as CustomToken | null;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
