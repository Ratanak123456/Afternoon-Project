import { useState } from "react";

export default function DetailBookButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Book Now Button */}
      <div className="text-center">
        <button
          onClick={() => setOpen(true)}
          className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300"
        >
          Book Now
        </button>
      </div>

      {/* Optimized Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
            {/* Scrollable content */}
            <div className="max-h-[85vh] overflow-y-auto no-scroll">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-8 text-white sticky top-0 z-10">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-3xl font-bold">Hotel Ituze</h1>
                    <p className="text-blue-100">
                      Luxury stays in the heart of the city
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-white text-2xl font-bold hover:text-gray-200 transition"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Booking Form */}
              <form className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
                  Book Your Room
                </h2>

                {/* Guest Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Guest Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      ["fullName", "Full Name", "text"],
                      ["email", "Email", "email"],
                      ["phone", "Phone Number", "tel"],
                    ].map(([id, label, type]) => (
                      <div key={id}>
                        <label
                          htmlFor={id}
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {label}
                        </label>
                        <input
                          type={type}
                          id={id}
                          name={id}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    ))}

                    {/* Guests */}
                    <div>
                      <label
                        htmlFor="guests"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {[1, 2, 3, 4].map((n) => (
                          <option key={n} value={n}>
                            {n} Guest{n > 1 && "s"}
                          </option>
                        ))}
                        <option value="4+">More than 4</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Stay Dates */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Stay Dates
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      ["checkIn", "Check-in Date"],
                      ["checkOut", "Check-out Date"],
                    ].map(([id, label]) => (
                      <div key={id}>
                        <label
                          htmlFor={id}
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {label}
                        </label>
                        <input
                          type="date"
                          id={id}
                          name={id}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Room Type */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Room Type
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        type: "standard",
                        title: "Standard Room",
                        price: "$120/night",
                        details: [
                          "Free WiFi",
                          "Flat-screen TV",
                          "Coffee maker",
                        ],
                      },
                      {
                        type: "deluxe",
                        title: "Deluxe Room",
                        price: "$180/night",
                        details: [
                          "Free WiFi",
                          "Smart TV",
                          "Premium toiletries",
                        ],
                      },
                      {
                        type: "suite",
                        title: "Executive Suite",
                        price: "$280/night",
                        details: [
                          "High-speed WiFi",
                          "Mini bar",
                          "Bathrobes & slippers",
                        ],
                      },
                    ].map((room) => (
                      <label
                        key={room.type}
                        className="border rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition"
                      >
                        <input
                          type="radio"
                          name="roomType"
                          value={room.type}
                          className="hidden peer"
                          defaultChecked={room.type === "standard"}
                        />
                        <div className="peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:ring-2 peer-checked:ring-blue-200 border rounded-lg p-3">
                          <div className="flex justify-between">
                            <h4 className="font-medium text-gray-800">
                              {room.title}
                            </h4>
                            <span className="text-blue-600 font-bold">
                              {room.price}
                            </span>
                          </div>
                          <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            {room.details.map((d, i) => (
                              <li key={i} className="flex items-center">
                                <i className="fas fa-check-circle mr-2 text-blue-500"></i>{" "}
                                {d}
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
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="requests"
                    name="requests"
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Any special requirements or preferences..."
                  ></textarea>
                </div>

                {/* Terms + Submit */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="agreeTerms"
                      name="agreeTerms"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="agreeTerms"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      I agree to Hotel Ituze’s{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Cancellation Policy
                      </a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-bold text-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    <i className="fas fa-calendar-check mr-2"></i> Confirm
                    Booking
                  </button>
                </div>
              </form>

              {/* Footer */}
              <div className="bg-gray-50 px-8 py-4 border-t text-sm text-gray-600">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                  <div>
                    <i className="fas fa-phone-alt mr-1"></i> +250 788 123 456
                  </div>
                  <div>
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
      )}
    </>
  );
}
