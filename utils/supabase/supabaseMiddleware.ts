import {getCookie, setCookie} from 'cookies-next'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export function supabaseMiddleware(req: any, res: any) {
  return createServerClient(
    process.env.NEXT_PRIVATE_SUPABASE_URL!,
    process.env.NEXT_PRIVATE_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
            console.log("in get")
          return getCookie(name, {req, res})
        },
        set(name: string, value: string, options: CookieOptions) {
            console.log("in set")
          try {
            setCookie(name, value, {req, res, ...options})
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
            console.log("in remove")
          try {
            setCookie(name, "", {req, res, ...options})
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}