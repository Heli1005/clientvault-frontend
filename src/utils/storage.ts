const AUTH_KEY = "user"

export function getStoredUser() {
  const user = localStorage.getItem(AUTH_KEY)
  return user ? JSON.parse(user) : null
}

export function setStoredUser(user: any) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user))
}

export function removeStoredUser() {
  localStorage.removeItem(AUTH_KEY)
}
