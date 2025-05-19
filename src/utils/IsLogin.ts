export default function isLogIn() {
  const token = localStorage?.getItem('token')
  if (token) {
    return true
  }
  return false
}
