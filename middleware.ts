import { supabaseMiddleware } from "@/utils/supabase/supabaseMiddleware";
import { NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();

  const supabase = supabaseMiddleware(req, res);

  console.log("supabase", supabase)
  return res;
  // return;
};

export default middleware;



export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * Feel free to modify this pattern to include more paths.
       */
      '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
  }
