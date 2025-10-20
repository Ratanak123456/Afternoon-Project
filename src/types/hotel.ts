export type Hotel = {
  id: number;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
  image: string;
  destinationId: number[];
  description: string;
  amenities: string[];
  longDes: string;
  roomTypes: {
    standard: {
      price: number;
    };
    deluxe: {
      price: number;
    };
    suite: {
      price: number;
    };
  };
};
