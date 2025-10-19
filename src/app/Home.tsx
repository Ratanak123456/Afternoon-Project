import newHeroImage from "../assets/pexels-asadphoto-3601422.jpg";
import { useState } from "react";
// --- CORRECTED IMPORTS ---
import { Link, useNavigate } from "react-router-dom"; // Ensure useNavigate is imported
import About from "../components/About/about";
import FAQ from "../components/FAQ/FAQ";
import featuredDestinations from "../data/destinations.json";
import topRatedHotels from "../data/hotels.json";
import DestinationCard from "../components/DestinationCard/DestinationCard";
import HotelCard from "../components/HotelCard/HotelCard";
import SearchBar from "../components/SearchBar/SearchBar";

// Removed commented out import

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  // --- ADDED NAVIGATION HOOK ---
  const navigate = useNavigate();

  // --- ADDED NAVIGATION HANDLER FUNCTION ---
  const handleSearchNavigation = (query: string) => {
    navigate(`/explore?query=${encodeURIComponent(query)}`);
  };
  // --- END ADDITION ---

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {" "}
      {/* Base text color likely needs fixing */}
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${newHeroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#FBF9F4]">
            Discover Your Next
            <span className="text-[#E8927A]"> Adventure</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-[#FFFFFFCC]">
            Explore breathtaking destinations and find your perfect stay with
            our curated travel experiences
          </p>

          <div className="mb-8 w-full max-w-4xl">
            {" "}
            {/* Added width constraint */}
            {/* --- PASS onSearchSubmit PROP --- */}
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearchSubmit={handleSearchNavigation} // Pass the function
            />
            {/* --- END CHANGE --- */}
          </div>

          <Link
            to="/explore"
            className="bg-[#E8927A] text-[#FBF9F4] px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition duration-300 transform hover:scale-105"
            // Removed redundant inline style
          >
            Start Exploring
          </Link>
        </div>
      </section>
      {/* Featured Destinations */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-[var(--color-subtext)] max-w-2xl mx-auto">
              Discover the world's most amazing places loved by travelers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/explore"
              className="inline-block bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-border)] px-8 py-3 rounded-lg hover:bg-[var(--color-subtext)] hover:text-white transition duration-300"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>
      {/* Top Rated Hotels */}
      <section className="py-16 bg-[var(--color-card)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">
              Top Rated Hotels
            </h2>
            <p className="text-xl text-[var(--color-subtext)] max-w-2xl mx-auto">
              Experience luxury and comfort at our handpicked accommodations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topRatedHotels.map((hotel) => (
              // --- FIXED HOTELCARD PROPS ---
              <HotelCard
                key={hotel.id}
                id={hotel.id}
                name={hotel.name}
                location={hotel.location}
                pricePerNight={hotel.pricePerNight}
                rating={hotel.rating}
                image={hotel.image}
                description={hotel.description}
                // Correctly pass destinationId as an array
                destinationId={
                  Array.isArray(hotel.destinationId)
                    ? hotel.destinationId
                    : [hotel.destinationId] // Wrap single number in an array
                }
                // Ensure amenities defaults to an empty array
                amenities={hotel.amenities ?? []}
              />
              // --- END FIX ---
            ))}
          </div>
          <div className="text-center mt-12">
            {/* Corrected class syntax error */}
            <Link
              to="/explore"
              className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors duration-300"
            >
              Explore All Hotels
            </Link>
          </div>
        </div>
      </section>
      {/* About Section */}
      <About />
      {/* Removed commented out <AboutSection /> */}
      {/* FAQ Section */}
      <FAQ />
      {/* CTA Section */}
      <section
        className="py-16 bg-[#dd7f5f]" // Fixed background color
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of travelers who trust us for their perfect getaway
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Filled White Button */}
            <Link
              to="/explore"
              className="bg-white text-[#dd7f5f] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Explore Destinations
            </Link>
            {/* Outlined White Button */}
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#dd7f5f] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
