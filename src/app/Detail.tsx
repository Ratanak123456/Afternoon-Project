import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import destinations from "../data/destinations.json";
import hotels from "../data/hotels.json";
import NotFound from "./NotFound";
import DetailHeader from "../components/DetailComponents/DetailHeader";
import DetailAbout from "../components/DetailComponents/DetailAbout";
import DetailInfoGrid from "../components/DetailComponents/DetailInfoGrid";
import DetailAmenities from "../components/DetailComponents/DetailAmenities";
import DetailRelatedHotels from "../components/DetailComponents/DetailRelatedHotels";
import DetailBookButton from "../components/DetailComponents/DetailBookButton";
import FeedbackCard from "../components/reviewSection/Feedback";
import feedback from "../data/hotelFeedback.json"
export default function Detail() {
  const [currentView, setCurrentView] = useState("Overview");

  const { type, id } = useParams<{ type: string; id: string }>();
  const [item, setItem] = useState<any>(null);
  const [relatedHotels, setRelatedHotels] = useState<any[]>([]);

  const navItems = [
    { label: "Overview" },
    { label: "Review" },
    { label: "Location" },
  ];

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
        <div className="border-b border-[var(--color-border)] bg-[var(--color-card)] rounded-t-2xl mb-8">
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 px-6">
            {navItems.map((navItem) => (
              <button
                key={navItem.label}
                onClick={() => setCurrentView(navItem.label)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  currentView === navItem.label
                    ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                    : "border-transparent text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:border-[var(--color-border)]"
                }`}
              >
                {navItem.label}
              </button>
            ))}
          </nav>
                  {currentView === "Overview" && (
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

          {type === "hotel" && <DetailBookButton hotel={item} />}
        </div>
        )}
        {currentView === "Review" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {feedback.map((item: any) => (
              <FeedbackCard key={item.id} {...item} />
            ))}
          </div>
        )}
        </div>


      </div>
    </div>
  );
}
