type DetailInfoGridProps ={
  type: string;
  pricePerNight?: number;
  priceRange?: string;
  rating: number;
  amenities?: any[];
}

export default function DetailInfoGrid({ type, pricePerNight, priceRange, rating, amenities }: DetailInfoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="text-center p-4 bg-[var(--color-card)] rounded-xl shadow-md">
        <p className="text-2xl font-bold text-[var(--color-primary)]">
          {type === "hotel" ? `$${pricePerNight}` : priceRange}
        </p>
        <p className="text-[var(--color-subtext)]">
          {type === "hotel" ? "per night" : "Price Range"}
        </p>
      </div>
      <div className="text-center p-4 bg-[var(--color-card)] rounded-lg shadow-md">
        <div className="flex justify-center items-center space-x-1 mb-2">
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-[var(--color-text)]">{rating}</span>
        </div>
        <p className="text-[var(--color-subtext)]">Rating</p>
      </div>
      {type === "hotel" && amenities && (
        <div className="text-center p-4 bg-[var(--color-card)] rounded-lg shadow-md">
          <p className="text-2xl font-bold text-[var(--color-primary)]">
            {amenities.length}
          </p>
          <p className="text-[var(--color-subtext)]">Amenities</p>
        </div>
      )}
    </div>
  );
}
