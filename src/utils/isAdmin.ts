export default function isAdmin() {
  const roles = localStorage?.getItem('roles')
  if (roles === 'admin') {
    return true
  }
  return false
}
