interface DetailAmenitiesProps {
  amenities: string[];
}

export default function DetailAmenities({ amenities }: DetailAmenitiesProps) {
  return (
    <div>
      <h4 className="text-xl font-semibold text-[var(--color-text)] mb-4">
        Amenities
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {amenities.map((amenity: string) => (
          <div
            key={amenity}
            className="flex items-center space-x-2 bg-[var(--color-bg-light)] dark:bg-gray-800 px-4 py-2 rounded-lg"
          >
            <span className="text-[var(--color-primary)]">✓</span>
            <span className="text-[var(--color-subtext)]">
              {amenity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
