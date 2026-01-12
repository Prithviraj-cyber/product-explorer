// Simple spinner shown during API loading
export default function Loader() {
    return (
        <div className="flex justify-center py-10">
            {/* Animated spinner using Tailwind */}
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
        </div>
    )
}
