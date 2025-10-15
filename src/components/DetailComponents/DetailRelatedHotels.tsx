import { Link } from "react-router-dom";
import HotelCard from "../HotelCard/HotelCard";

type DetailRelatedHotelsProps = {
  hotels: any[];
  name: string;
}

export default function DetailRelatedHotels({ hotels, name }: DetailRelatedHotelsProps) {
  return (
    <div className="mb-28">
      <h3 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
        Hotels in {name}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <Link to={`/detail/hotel/${hotel.id}`} key={hotel.id}>
            <div className="bg-[var(--color-card)] dark:bg-gray-900 rounded-xl shadow-md h-64 border border-[var(--color-border)]">
              <HotelCard {...hotel} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
