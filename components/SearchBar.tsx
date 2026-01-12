interface SearchBarProps {
    value: string
    onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <input
        type="text"
        placeholder="Search products by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
            w-full
            border
            rounded
            px-3
            py-2
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
        "
        aria-label="Search products"
        />
    )
}
