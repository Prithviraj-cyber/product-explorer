interface Props {
  total: number
  page: number
  perPage: number
  onChange: (p: number) => void
}

export default function Pagination({ total, page, perPage, onChange }: Props) {
  const pages = Math.ceil(total / perPage)

  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: pages }).map((_, i) => (
        <button
          key={i}
          aria-label={`Go to page ${i + 1}`}
          onClick={() => onChange(i + 1)}
          className={`px-3 py-1 border rounded ${
            page === i + 1 ? "bg-blue-500 text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}
