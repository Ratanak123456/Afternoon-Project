import { Link } from "react-router-dom";
import type { Hotel } from "../../types/hotel";
import StarRating from "../StarRating/StarRating";
import { useWishlist } from "../auth/middleware/WishlistContext";

export default function HotelCard(hotel: Hotel) {
  const { id, name, image, pricePerNight, rating, description, location, destinationId } = hotel;
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

  const isItemWishlisted = isWishlisted(id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isItemWishlisted) {
      removeFromWishlist(id);
    } else {
      addToWishlist(hotel);
    }
  };

  return (
    <Link to={`/detail/hotel/${id}`} className="relative block">
      <div
        className=" bg-[var(--color-card)] border border-[var(--color-border)]
             rounded-2xl shadow-md overflow-hidden transition-all duration-300
             hover:shadow-xl hover:scale-[1.03] hover:border-[var(--color-primary)]"
      >
        {/* Image & Favorite Button */}
        <div>
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <button
            onClick={toggleWishlist}
            className={`absolute top-3 right-3 p-2 rounded-full 
                 bg-[var(--color-card)] text-[var(--color-subtext)] 
                 shadow-md border border-[var(--color-border)]
                 hover:bg-[var(--color-primary)] hover:text-white 
                 transition-all duration-300 ${isItemWishlisted ? "text-[var(--color-primary)]" : ""}`}
          >
            <svg
              className="w-5 h-5"
              fill={isItemWishlisted ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-[var(--color-text)] mb-1">
            {name}
          </h3>
          <p className="text-[var(--color-subtext)] text-sm mb-2">{location}</p>
          <p className="text-[var(--color-text)]/80 text-sm mb-3 line-clamp-2">
            {description}
          </p>

          {/* Footer Section */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <StarRating rating={rating} />
              <Link
                to={`/destination/${destinationId}`}
                onClick={(e) => e.stopPropagation()}
                className="text-sm text-[var(--color-primary)] hover:underline ml-4"
              >
                View Destination
              </Link>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold text-[var(--color-primary)]">
                ${pricePerNight}
              </p>
              <p className="text-xs text-[var(--color-subtext)]">per night</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
