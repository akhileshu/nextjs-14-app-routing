import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // middleware will run before accessing a page.js / route or requesting to a route handler

  /* cookies,headers,send response ,NextResponse.next() : return early,CORS*/

  return NextResponse.next();

  return NextResponse.json({ msg: "hello from middleware" });

  return NextResponse.rewrite(
    new URL("/streamUi", request.url)
  ); /* similar to redirect , but preserves url on browser */

  return NextResponse.redirect(
    new URL("/streamUi", request.url)
  ); /* always redirect '/' to '/streamUi' */
}

export const config = {
  matcher: "/" /* cant use variables here ,read docs */,
};
