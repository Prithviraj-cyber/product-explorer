"use client"

import { useEffect, useState } from "react"
import { isFavorite, toggleFavorite } from "@/utils/favorites"

// Button to mark/unmark product as favorite
export default function FavoriteButton({ id }: { id: number }) {
    const [favorite, setFavorite] = useState(false)

    // Check favorite status on mount
    useEffect(() => {
        setFavorite(isFavorite(id))
    }, [id])

    // Toggle favorite on click
    const handleClick = () => {
        toggleFavorite(id)
        setFavorite(!favorite)
    }

    return (
        <button
            onClick={handleClick}
            aria-label="Toggle Favorite"
            className="text-xl"
            >
            {/* Heart icon based on state */}
            {favorite ? "❤️" : "🤍"}
        </button>
    )
}
