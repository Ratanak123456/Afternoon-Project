import React from "react";

export default function Booking() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-8 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold">Hotel Ituze</h1>
                  <p className="text-blue-100">
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
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
                Book Your Room
              </h2>

              {/* Guest Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  Guest Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
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
                <h3 className="text-lg font-semibold text-gray-700">
                  Stay Dates
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="checkIn"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkOut"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Room Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  Room Type
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Standard Room */}
                  <label className="border rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 cursor-pointer">
                    <input
                      type="radio"
                      name="roomType"
                      value="standard"
                      className="hidden peer"
                      defaultChecked
                    />
                    <div className="peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:ring-2 peer-checked:ring-blue-200 border rounded-lg p-3">
                      <div className="flex justify-between">
                        <h4 className="font-medium text-gray-800">
                          Standard Room
                        </h4>
                        <span className="text-blue-600 font-bold">
                          $120/night
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        1 King Bed, 2 Guests
                      </p>
                      <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <i className="fas fa-wifi mr-2 text-blue-500"></i>{" "}
                          Free WiFi
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-tv mr-2 text-blue-500"></i>{" "}
                          Flat-screen TV
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-coffee mr-2 text-blue-500"></i>{" "}
                          Coffee maker
                        </li>
                      </ul>
                    </div>
                  </label>

                  {/* Deluxe Room */}
                  <label className="border rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 cursor-pointer">
                    <input
                      type="radio"
                      name="roomType"
                      value="deluxe"
                      className="hidden peer"
                    />
                    <div className="peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:ring-2 peer-checked:ring-blue-200 border rounded-lg p-3">
                      <div className="flex justify-between">
                        <h4 className="font-medium text-gray-800">
                          Deluxe Room
                        </h4>
                        <span className="text-blue-600 font-bold">
                          $180/night
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        1 King Bed or 2 Queens, 4 Guests
                      </p>
                      <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <i className="fas fa-wifi mr-2 text-blue-500"></i>{" "}
                          Free WiFi
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-tv mr-2 text-blue-500"></i> Smart
                          TV
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-bath mr-2 text-blue-500"></i>{" "}
                          Premium toiletries
                        </li>
                      </ul>
                    </div>
                  </label>

                  {/* Suite */}
                  <label className="border rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 cursor-pointer">
                    <input
                      type="radio"
                      name="roomType"
                      value="suite"
                      className="hidden peer"
                    />
                    <div className="peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:ring-2 peer-checked:ring-blue-200 border rounded-lg p-3">
                      <div className="flex justify-between">
                        <h4 className="font-medium text-gray-800">
                          Executive Suite
                        </h4>
                        <span className="text-blue-600 font-bold">
                          $280/night
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Separate living area, 4 Guests
                      </p>
                      <ul className="mt-2 text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <i className="fas fa-wifi mr-2 text-blue-500"></i>{" "}
                          High-speed WiFi
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-utensils mr-2 text-blue-500"></i>{" "}
                          Mini bar
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-spa mr-2 text-blue-500"></i>{" "}
                          Bathrobes & slippers
                        </li>
                      </ul>
                    </div>
                  </label>
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

              {/* Payment and Submit */}
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
                    I agree to Hotel Ituze's{" "}
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
                  <i className="fas fa-calendar-check mr-2"></i> Confirm Booking
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 border-t">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm text-gray-600 mb-2 md:mb-0">
                  <i className="fas fa-phone-alt mr-1"></i> +250 788 123 456
                </div>
                <div className="text-sm text-gray-600 mb-2 md:mb-0">
                  <i className="fas fa-envelope mr-1"></i>{" "}
                  reservations@ituzehotel.com
                </div>
                <div className="text-sm text-gray-600">
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
