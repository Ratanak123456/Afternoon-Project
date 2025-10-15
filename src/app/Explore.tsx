import { useState } from "react";
import DestinationCard from "../components/DestinationCard/DestinationCard";
import destinations from "../data/destinations.json";
import SearchBar from "../components/SearchBar/SearchBar";
import HotelCard from "../components/HotelCard/HotelCard";
import hotels from "../data/hotels.json";

export default function Explore() {
  // State for search input
  const [searchQuery, setSearchQuery] = useState("");
  // State for filter type (All, Destinations, Hotels)
  const [filterType, setFilterType] = useState("All");
  // State for selected city/country
  const [selectedCity, setSelectedCity] = useState("All Location");
  // State for maximum price filter
  const [maxPrice, setMaxPrice] = useState(500);

  // Filter destinations based on search query and selected city
  const filteredDestinations = destinations.filter(
    (destination) =>
      (destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.country
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) &&
      (selectedCity === "All Location" || destination.country === selectedCity)
  );

  // Filter hotels based on search query, selected city, and max price
  const filteredHotels = hotels.filter(
    (hotel) =>
      (hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCity === "All Location" ||
        hotel.location.includes(selectedCity)) &&
      hotel.pricePerNight <= maxPrice
  );

  // Handle change for city/country filter dropdown
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  // Handle change for price range slider
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  };

  // Handle change for filter type dropdown
  const handleFilterTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterType(event.target.value);
  };

  // Get unique list of cities/countries for dropdown options
  const cities = [
    "All Location",
    ...new Set(destinations.map((d) => d.country)),
  ];

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
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* ===== Filters ===== */}
        <div className="bg-[var(--color-card)] rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Filter Type */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                Filter by Type
              </label>
              <select
                className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-text)]"
                value={filterType}
                onChange={handleFilterTypeChange}
              >
                <option>All</option>
                <option>Destinations</option>
                <option>Hotels</option>
              </select>
            </div>

            {/* City Filter */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                Destination
              </label>
              <select
                className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-bg)] text-[var(--color-text)]"
                value={selectedCity}
                onChange={handleCityChange}
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                Max Price: ${maxPrice}
              </label>
              <input
                type="range"
                min="0"
                max="500"
                value={maxPrice}
                onChange={handlePriceChange}
                className="w-full accent-[var(--color-primary)]"
              />
            </div>
          </div>
        </div>

        {/* ===== Results Section ===== */}
        <div className="space-y-12">
          {/* Destinations Section */}
          {(filterType === "All" || filterType === "Destinations") && (
            <section>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">
                Destinations
              </h2>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDestinations.map((destination) => (
                  <div
                    key={destination.id}
                    className="mt-10 bg-[var(--color-card)] rounded-xl shadow-md h-64"
                  >
                    <DestinationCard {...destination} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Hotels Section */}
          {(filterType === "All" || filterType === "Hotels") && (
            <section className="mb-28">
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">
                Hotels
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredHotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-[var(--color-card)] rounded-xl shadow-md h-64"
                  >
                    <HotelCard {...hotel} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
