import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get("jwt");
  if (!jwt) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

// matcher에 매칭되는 경로로 접근하는 경우, middleware 실행
export const config = {
  matcher: ["/profile/:path*"],
};
