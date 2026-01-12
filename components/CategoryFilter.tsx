// CategoryFilter
interface CategoryFilterProps {
    categories: string[]        // List of unique product categories
    selected: string            // Currently selected category
    onChange: (value: string) => void
}

export default function CategoryFilter({
    categories,
    selected,
    onChange,
}: CategoryFilterProps) {
    return (
        <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="
            border
            rounded
            px-3
            py-2
            w-full
            md:w-60
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
        "
        aria-label="Filter products by category"
        >
        {/* Default option */}
        <option value="">All Categories</option>

        {/* Render category options */}
        {categories.map(category => (
            <option key={category} value={category}>
            {category}
            </option>
        ))}
        </select>
    )
}
