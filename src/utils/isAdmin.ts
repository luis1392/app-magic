export default function isAdmin() {
  if (typeof window === 'undefined') {
    return false
  }
  const roles = localStorage?.getItem('roles')
  if (roles === 'admin') {
    return true
  }
  return false
}
