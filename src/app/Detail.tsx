import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import destinations from "../data/destinations.json";
import hotels from "../data/hotels.json";
import NotFound from "./NotFound";
import DetailHeader from "../components/DetailComponents/DetailHeader";
import DetailTabs from "../components/DetailComponents/DetailTabs";
import DetailAbout from "../components/DetailComponents/DetailAbout";
import DetailInfoGrid from "../components/DetailComponents/DetailInfoGrid";
import DetailAmenities from "../components/DetailComponents/DetailAmenities";
import DetailRelatedHotels from "../components/DetailComponents/DetailRelatedHotels";
import DetailBookButton from "../components/DetailComponents/DetailBookButton";

export default function Detail() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [item, setItem] = useState<any>(null);
  const [relatedHotels, setRelatedHotels] = useState<any[]>([]);

  useEffect(() => {
    let foundItem: any = null;
    if (type === "destination") {
      foundItem = destinations.find((d) => d.id === Number(id));
      if (foundItem) {
        const related = hotels.filter((h) => {
          if (Array.isArray(h.destinationId)) {
            return h.destinationId.includes(foundItem.id);
          } else {
            return h.destinationId === foundItem.id;
          }
        });
        setRelatedHotels(related);
      }
    } else if (type === "hotel") {
      foundItem = hotels.find((h) => h.id === Number(id));
    }
    setItem(foundItem);
  }, [type, id]);

  if (!item) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen transition-colors duration-300 py-8 ">
      <div className="max-w-7xl mx-auto px-4">
        <DetailHeader
          image={item.image}
          name={item.name}
          type={type!}
          country={item.country}
          location={item.location}
        />

        <div className=" rounded-2xl shadow-md mb-8 border border-[var(--color-border)] transition-all duration-300">
          <DetailTabs />

          <div className="p-6 space-y-8">
            <DetailAbout longDes={item.longDes} />

            <DetailInfoGrid
              type={type!}
              pricePerNight={item.pricePerNight}
              priceRange={item.priceRange}
              rating={item.rating}
              amenities={item.amenities}
            />

            {type === "hotel" && item.amenities && item.amenities.length > 0 && (
              <DetailAmenities amenities={item.amenities} />
            )}

            {type === "destination" && relatedHotels.length > 0 && (
              <DetailRelatedHotels hotels={relatedHotels} name={item.name} />
            )}

            {type === "hotel" && <DetailBookButton />}
          </div>
        </div>
      </div>
    </div>
  );
}