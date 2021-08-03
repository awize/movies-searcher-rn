const BASE_URL = 'http://localhost:3000'

export const getAll = async () => {
  const res = await fetch(`${BASE_URL}/movies`)
  if (res.ok) {
    const data = await res.json()
    return data
  }
  return []
}

export const getDetail = async (movieId) => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}`)
  if (res.ok) {
    const data = await res.json()
    return data
  }
  return {}
}
