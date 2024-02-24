import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { type cookies } from 'next/headers'

export function createClient(cookieJar: ReturnType<typeof cookies>) {
  return createServerClient(
    process.env.NEXT_PRIVATE_SUPABASE_URL!,
    process.env.NEXT_PRIVATE_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieJar.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieJar.set({ name, value, ...options })
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieJar.set({ name, value: '', ...options })
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