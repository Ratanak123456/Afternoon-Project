import type { Booking } from "../../types/booking";

 type BookingCardProps = {
  booking: Booking;
};

 export default function BookingCard({ booking }: BookingCardProps) {
  return (
<div className="card rounded-2xl shadow-lg overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 group">
  <div className="relative overflow-hidden">
    <img 
      src={booking.hotel.image} 
      alt={booking.hotel.name} 
      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-card/20 via-transparent to-transparent"></div>
  </div>
  
  <div className="p-6">
    <div className="mb-4">
      <h3 className="text-xl font-bold text-foreground mb-2">{booking.hotel.name}</h3>
      <p className="text-subtext flex items-center gap-2">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {booking.hotel.location}
      </p>
    </div>

    <div className="flex items-center gap-4 py-3 mb-4 border-y border-border/30">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-subtext/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-sm text-subtext">Booked: {new Date(booking.bookingDate).toLocaleDateString()}</span>
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="font-semibold text-foreground flex items-center gap-2">
        <svg className="w-4 h-4 text-subtext" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        Booking Details
      </h4>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-3 p-3 bg-subtext/5 rounded-lg">
          <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-subtext/70">Adults</p>
            <p className="font-semibold text-foreground">{booking.adults}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-subtext/5 rounded-lg">
          <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-subtext/70">Children</p>
            <p className="font-semibold text-foreground">{booking.children}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-subtext/5 rounded-lg">
          <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-subtext/70">Rooms</p>
            <p className="font-semibold text-foreground">{booking.rooms}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-subtext/5 rounded-lg">
          <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-subtext/70">Nights</p>
            <p className="font-semibold text-foreground">{booking.nights}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}