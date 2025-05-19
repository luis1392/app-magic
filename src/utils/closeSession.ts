// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
export function CloseSession() {
  // const cookieStore = await cookies()
  const router = useRouter()
  localStorage.clear()
  // cookieStore.delete('token')
  // cookieStore.delete('roles')
  // redirect('/')
  router.push('/')
}
