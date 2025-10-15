interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="mb-10 px-4">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-stretch bg-[var(--color-card)] dark:bg-[var(--color-card)] rounded-2xl shadow-md overflow-hidden border border-[var(--color-border)] transition-all duration-300 focus-within:ring-2 focus-within:ring-[var(--color-primary)]">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="🔍 Search by country or place..."
            className="w-full px-5 py-3 bg-transparent text-[var(--color-text)] placeholder-[var(--color-subtext)] focus:outline-none text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-[var(--color-subtext)] hover:text-[var(--color-text)]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <button className="mt-2 sm:mt-0 sm:ml-2 px-5 py-3 rounded-xl sm:rounded-none sm:rounded-r-2xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold transition-all duration-300 w-full sm:w-auto">
          Search
        </button>
      </div>

      <p className="text-center text-[var(--color-subtext)] text-sm mt-3">
        Try searching for{" "}
        <span className="text-[var(--color-primary)] font-medium">
          “Phnom Penh”
        </span>{" "}
        or{" "}
        <span className="text-[var(--color-primary)] font-medium">
          “Siem Reap”
        </span>{" "}
        🌏
      </p>
    </div>
  )
}
