const LOCAL_STORAGE_KEY = 'favourites'

export const saveFavouritesToLocalStorage = (favourites) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favourites))
}

export const getFavouritesFromLocalStorage = () => {
  if (typeof window === 'undefined') return {}
  let hasStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY)
  let favourites = {}
  if (hasStorage) favourites = JSON.parse(hasStorage)
  return favourites
}
