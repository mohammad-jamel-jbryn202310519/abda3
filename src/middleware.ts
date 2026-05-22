import createIntlMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const locales = ['ar', 'en'];
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: 'ar',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const loginPath = "/admin/login";

  // 1. Admin Authentication
  if (pathname.startsWith("/admin")) {
    if (pathname === loginPath) {
      return NextResponse.next();
    }
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      const url = request.nextUrl.clone();
      url.pathname = loginPath;
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // 2. Internationalization (next-intl)
  return intlMiddleware(request);
}
