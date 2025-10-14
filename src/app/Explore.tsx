import DestinationCard from "../components/DestinationCard/DestinationCard";
import destinations from "../data/destinations.json";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Explore() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* ===== Header ===== */}
        <div className="text-center mb-12 px-4 transition-colors duration-300">
          <h1
            className="
      mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text)] dark:text-[var(--color-primary)] mb-3 tracking-tight"
          >
            Explore
          </h1>
          <p
            className="
      text-base sm:text-lg md:text-xl text-[var(--color-text)] dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Discover amazing destinations and accommodations that match your
            vibe 🌴✨
          </p>
        </div>

        {/* ===== Search Bar ===== */}
        <SearchBar />

        {/* ===== Filters ===== */}
        <div className="bg-[var(--color-card)] rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Filter Type */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                Filter by Type
              </label>
              <select className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-text)]">
                <option>All</option>
                <option>Destinations</option>
                <option>Hotels</option>
              </select>
            </div>

            {/* Country Filter */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                Country
              </label>
              <select className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-text)]">
                <option>All Countries</option>
                <option>Cambodia</option>
                <option>Vietnam</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                Price Range
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  className="w-full accent-[var(--color-primary)]"
                />
                <input
                  type="range"
                  className="w-full accent-[var(--color-primary)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ===== Results Section ===== */}
        <div className="space-y-12">
          {/* Destinations Section */}
          <section>
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">
              Destinations
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="mt-10 bg-[var(--color-card)] rounded-xl shadow-md h-64"
                >
                  <DestinationCard
                    id={destination.id}
                    name={destination.name}
                    country={destination.country}
                    description={destination.description}
                    image={destination.image}
                    rating={destination.rating}
                    priceRange={destination.priceRange}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Hotels Section */}
          <section>
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">
              Hotels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[var(--color-card)] rounded-xl shadow-md h-64"></div>
              <div className="bg-[var(--color-card)] rounded-xl shadow-md h-64"></div>
              <div className="bg-[var(--color-card)] rounded-xl shadow-md h-64"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
