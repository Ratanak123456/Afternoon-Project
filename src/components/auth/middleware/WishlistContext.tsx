
import { createContext, useState, useContext, type ReactNode, useEffect } from 'react';
import type { Hotel } from '../../../types/hotel';

interface WishlistContextType {
  wishlist: Hotel[];
  addToWishlist: (hotel: Hotel) => void;
  removeFromWishlist: (hotelId: number) => void;
  isWishlisted: (hotelId: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Hotel[]>(() => {
    try {
      const storedWishlist = localStorage.getItem('wishlist');
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    } catch (error) {
      console.error("Failed to parse wishlist from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } catch (error) {
      console.error("Failed to save wishlist to localStorage", error);
    }
  }, [wishlist]);

  const addToWishlist = (hotel: Hotel) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.find((item) => item.id === hotel.id)) {
        return prevWishlist; // Already in the wishlist
      }
      return [...prevWishlist, hotel];
    });
  };

  const removeFromWishlist = (hotelId: number) => {
    setWishlist((prevWishlist) => prevWishlist.filter((hotel) => hotel.id !== hotelId));
  };

  const isWishlisted = (hotelId: number) => {
    return wishlist.some((hotel) => hotel.id === hotelId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
