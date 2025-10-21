type DetailAmenitiesProps = {
  amenities: string[];
}

export default function DetailAmenities({ amenities }: DetailAmenitiesProps) {
  return (
    <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
      <h4 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-4">
        Amenities
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {amenities.map((amenity: string) => (
          <div
            key={amenity}
            className="flex items-center space-x-2 bg-[var(--color-bg-card)] px-4 py-2 rounded-lg transition duration-300 shadow-md"
          >
            <span className="text-[var(--color-accent)] font-bold">
              ✓
            </span>
            <span className="text-[var(--color-subtext)] text-sm md:text-base">
              {amenity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
