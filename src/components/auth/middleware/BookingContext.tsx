
import { createContext, useState, useContext, type ReactNode } from 'react';
import type { Hotel } from '../../../types/hotel';

interface Booking {
  hotel: Hotel;
  bookingDate: string;
  adults: number;
  children: number;
  rooms: number;
  nights: number;
}

interface BookingContextType {
  bookings: Booking[];
  addBooking: (hotel: Hotel, bookingDetails: Omit<Booking, 'hotel' | 'bookingDate'>) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (hotel: Hotel, bookingDetails: Omit<Booking, 'hotel' | 'bookingDate'>) => {
    const newBooking: Booking = {
      hotel,
      bookingDate: new Date().toISOString(),
      ...bookingDetails,
    };
    setBookings([...bookings, newBooking]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookings = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBookings must be used within a BookingProvider');
  }
  return context;
};
