// Key used to store favorites in localStorage
const FAVORITES_KEY = "favorites"

// Get favorite product IDs from localStorage
export function getFavorites(): number[] {
    // Prevent error during SSR
    if (typeof window === "undefined") return []

    // Parse stored value or return empty array
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]")
}

// Add or remove product from favorites
export function toggleFavorite(id: number): number[] {
    const favorites = getFavorites()

    // If already favorite - remove Else - add
    const updated = favorites.includes(id)
        ? favorites.filter(favId => favId !== id)
        : [...favorites, id]

    // Save updated favorites
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated))

    return updated
}

// Check if product is favorite
export function isFavorite(id: number): boolean {
    return getFavorites().includes(id)
}
