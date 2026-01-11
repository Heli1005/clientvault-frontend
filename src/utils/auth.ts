export const AUTH_KEY = "user"

export function getUser() {
  const user = localStorage.getItem(AUTH_KEY)
  return user ? JSON.parse(user) : null
}

export function isAuthenticated(): boolean {
  return !!getUser()
}

export function logout() {
  localStorage.removeItem(AUTH_KEY)
}
