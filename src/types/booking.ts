import type { Hotel } from "./hotel";

export type Booking = {
  hotel: Hotel;
  bookingDate: string;
  adults: number;
  children: number;
  rooms: number;
  nights: number;
};