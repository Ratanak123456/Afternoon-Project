export default function Booking() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[var(--color-bg)] min-h-screen flex items-center justify-center px-4 py-8 transition-colors duration-300">
        <div className="w-full max-w-4xl">
          <div className="bg-[var(--color-card)] rounded-xl shadow-lg overflow-hidden border border-[var(--color-border)]">
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] py-6 px-8 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold">Hotel Ituze</h1>
                  <p className="text-[var(--color-bg)]/80">
                    Luxury stays in the heart of the city
                  </p>
                </div>
                <div className="text-4xl">
                  <i className="fas fa-hotel"></i>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <form className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-[var(--color-text)] border-b border-[var(--color-border)] pb-2">
                Book Your Room
              </h2>

              {/* Guest Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  Guest Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { id: "fullName", label: "Full Name", type: "text" },
                    { id: "email", label: "Email", type: "email" },
                    { id: "phone", label: "Phone Number", type: "tel" },
                  ].map(({ id, label, type }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="block text-sm font-medium text-[var(--color-subtext)] mb-1"
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        id={id}
                        name={id}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                      />
                    </div>
                  ))}

                  {/* Guests */}
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-[var(--color-subtext)] mb-1"
                    >
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="4+">More than 4</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  Stay Dates
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { id: "checkIn", label: "Check-in Date" },
                    { id: "checkOut", label: "Check-out Date" },
                  ].map(({ id, label }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="block text-sm font-medium text-[var(--color-subtext)] mb-1"
                      >
                        {label}
                      </label>
                      <input
                        type="date"
                        id={id}
                        name={id}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  Room Type
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Standard Room",
                      price: "$120/night",
                      desc: "1 King Bed, 2 Guests",
                      features: ["Free WiFi", "Flat-screen TV", "Coffee maker"],
                      icon: ["wifi", "tv", "coffee"],
                    },
                    {
                      name: "Deluxe Room",
                      price: "$180/night",
                      desc: "1 King or 2 Queens, 4 Guests",
                      features: ["Free WiFi", "Smart TV", "Premium toiletries"],
                      icon: ["wifi", "tv", "bath"],
                    },
                    {
                      name: "Executive Suite",
                      price: "$280/night",
                      desc: "Separate living area, 4 Guests",
                      features: [
                        "High-speed WiFi",
                        "Mini bar",
                        "Bathrobes & slippers",
                      ],
                      icon: ["wifi", "utensils", "spa"],
                    },
                  ].map((room, i) => (
                    <label
                      key={i}
                      className="border rounded-lg p-4 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="roomType"
                        value={room.name}
                        className="hidden peer"
                        defaultChecked={i === 0}
                      />
                      <div className="peer-checked:border-[var(--color-primary)] peer-checked:bg-[var(--color-primary)]/10 peer-checked:ring-2 peer-checked:ring-[var(--color-accent)] border rounded-lg p-3">
                        <div className="flex justify-between">
                          <h4 className="font-medium text-[var(--color-text)]">
                            {room.name}
                          </h4>
                          <span className="text-[var(--color-primary)] font-bold">
                            {room.price}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--color-subtext)] mt-1">
                          {room.desc}
                        </p>
                        <ul className="mt-2 text-sm text-[var(--color-subtext)] space-y-1">
                          {room.features.map((f, idx) => (
                            <li key={idx} className="flex items-center">
                              <i
                                className={`fas fa-${room.icon[idx]} mr-2 text-[var(--color-accent)]`}
                              ></i>{" "}
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label
                  htmlFor="requests"
                  className="block text-sm font-medium text-[var(--color-subtext)] mb-1"
                >
                  Special Requests
                </label>
                <textarea
                  id="requests"
                  name="requests"
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                  placeholder="Any special requirements or preferences..."
                ></textarea>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-[var(--color-border)] rounded"
                  />
                  <label
                    htmlFor="agreeTerms"
                    className="ml-2 block text-sm text-[var(--color-subtext)]"
                  >
                    I agree to Hotel Ituze's{" "}
                    <a
                      href="#"
                      className="text-[var(--color-primary)] hover:underline"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[var(--color-primary)] hover:underline"
                    >
                      Cancellation Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg text-white font-bold text-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <i className="fas fa-calendar-check mr-2"></i> Confirm Booking
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="bg-[var(--color-bg)] px-8 py-4 border-t border-[var(--color-border)]">
              <div className="flex flex-col md:flex-row justify-between items-center text-[var(--color-subtext)] text-sm">
                <div className="mb-2 md:mb-0">
                  <i className="fas fa-phone-alt mr-1"></i> +250 788 123 456
                </div>
                <div className="mb-2 md:mb-0">
                  <i className="fas fa-envelope mr-1"></i>{" "}
                  reservations@ituzehotel.com
                </div>
                <div>
                  <i className="fas fa-map-marker-alt mr-1"></i> KN 4 Ave,
                  Kigali, Rwanda
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
