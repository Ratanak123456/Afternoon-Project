import { useState } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch?: () => void;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  onSearch,
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  const suggestions = [
    { label: "Phnom Penh", icon: "🏙️" },
    { label: "Siem Reap", icon: "🏛️" },
    { label: "Angkor Wat", icon: "⛩️" },
    { label: "Tonle Sap", icon: "🌊" },
  ];

  const handleSearch = () => {
    if (onSearch) onSearch();
    console.log("Search triggered:", searchQuery);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    console.log("Suggestion selected:", suggestion);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
      {/* Main container for the search bar */}
      <div
        className={`
          relative backdrop-blur-xl bg-[var(--color-card)] border-2 rounded-2xl sm:rounded-3xl
          transition-all duration-300
          ${
            isFocused
              ? "border-[var(--color-primary)]/60 shadow-xl"
              : "border-transparent shadow-lg hover:shadow-xl"
          }
        `}
      >
        <div className="flex flex-col sm:flex-row items-stretch p-1.5 sm:p-2 gap-2 relative z-10">
          {/* Input + clear button */}
          <div className="relative flex-1 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 min-h-[48px] sm:min-h-0">
            <Search
              className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-all duration-300 ${
                isFocused
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-subtext)]"
              }`}
            />

            <input
              type="text"
              placeholder="Search by country or place..."
              className="flex-1 bg-transparent text-[var(--color-text)] placeholder-[var(--color-subtext)] focus:outline-none text-sm sm:text-base md:text-lg font-medium tracking-tight py-2 sm:py-3 md:py-4 min-w-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              data-testid="input-search"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="h-8 w-8 flex-shrink-0 rounded-full flex items-center justify-center hover:bg-[var(--color-border)]/50 hover:rotate-90 transition-all duration-300"
                data-testid="button-clear"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-subtext)]" />
              </button>
            )}
          </div>

          {/* Search button */}
          <button
            onClick={handleSearch}
            className="font-semibold px-6 sm:px-8 py-3 rounded-xl sm:rounded-2xl hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 min-h-[48px] sm:min-h-12 flex items-center justify-center text-sm sm:text-base gap-2"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-bg)",
            }}
            data-testid="button-search"
          >
            <i className="fa-solid fa-location-dot text-lg sm:text-xl"></i>
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Suggestions */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-4 sm:my-6">
        {/* “Try searching for:” text */}
        <span
          className="text-xs sm:text-sm font-medium w-full sm:w-auto text-center sm:text-left"
          style={{ color: "#bbbbbb" }}
        >
          Try searching for:
        </span>

        {/* Suggestion buttons */}
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.label}
            className="backdrop-blur-sm bg-[var(--color-primary)]/10 border border-[var(--color-border)]/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full cursor-pointer hover:bg-[var(--color-primary)]/20 hover:scale-105 active:scale-95 transition-all duration-200 min-h-[44px] sm:min-h-0 flex items-center"
            onClick={() => handleSuggestionClick(suggestion.label)}
            data-testid={`button-suggestion-${suggestion.label
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            <span className="mr-1 sm:mr-1.5 text-sm sm:text-base">
              {suggestion.icon}
            </span>
            <span
              className="font-semibold text-xs sm:text-sm transition-colors duration-200"
              style={{ color: "#bbbbbb" }}
            >
              {suggestion.label}
            </span>
          </button>
        ))}
      </div>

      {/* Footer text */}
      <p
        className="text-center text-xs sm:text-sm px-4"
        style={{ color: "#bbbbbb" }}
      >
        Discover amazing places with our{" "}
        <span
          className="font-semibold"
          style={{ color: "var(--color-primary)" }}
        >
          interactive search
        </span>
      </p>
    </div>
  );
}
