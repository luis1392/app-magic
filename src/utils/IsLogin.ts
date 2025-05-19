export default function isLogIn() {
  if (typeof window === 'undefined') {
    return false
  }

  const token = localStorage?.getItem('token')
  if (token) {
    return true
  }
  return false
}
