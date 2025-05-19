'use server'

import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

export async function setCookies(data: {
  token: string | ResponseCookie
  roles: string | ResponseCookie
}) {
  const cookieStore = await cookies()

  cookieStore.set(
    'token',
    typeof data.token === 'string' ? data.token : data.token.value
  )
  // or
  cookieStore.set(
    'roles',
    typeof data.roles === 'string' ? data.roles : data.roles.value
  )
  // or
}
