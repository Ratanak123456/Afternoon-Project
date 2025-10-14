import type { Destination } from "../../types/destination";

export default function PlaceCard({ image, name, country, description, rating, priceRange }: Destination) {
  return (
    <div className="relative">
      {/* 💫 Card */}
      <div className="bg-[var(--color-card)] dark:bg-[var(--color-card)] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[var(--color-border)]">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold text-lg">{name}</h3>
            <p className="text-gray-200 text-sm">{country}</p>
          </div>
        </div>

        <div className="p-4">
          <p className="text-[var(--color-subtext)] text-sm mb-3 line-clamp-2">
            {description}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-[var(--color-text)]">
                {rating}
              </span>
            </div>
            <span className="text-sm font-semibold text-[var(--color-primary)]">
              {priceRange}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
