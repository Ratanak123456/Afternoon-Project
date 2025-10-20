import React, { useEffect, useRef, useState } from "react";
import { useBookings } from "../components/auth/middleware/BookingContext";
import BookingCard from "../components/BookingCard/BookingCard";
import { useWishlist } from "../components/auth/middleware/WishlistContext";
import HotelCard from "../components/HotelCard/HotelCard";

type Profile = {
  name: string;
  email: string;
  mobile: string;
  location: string;
  avatar?: string;
  notif?: string;
};

const STORAGE_KEYS = {
  name: "profile:name",
  email: "profile:email",
  mobile: "profile:mobile",
  location: "profile:location",
  avatar: "profile:avatar",
  notif: "profile:notif",
  theme: "profile:theme",
};

const defaultAvatar = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'><rect width='100%' height='100%' fill='%23F3F4F6'/><g transform='translate(64,48)'><circle cx='64' cy='56' r='40' fill='%23E5E7EB'/><rect x='0' y='120' width='128' height='20' rx='10' fill='%23E5E7EB'/></g></svg>`
)}`;

export default function Profile() {
  const [profile, setProfile] = useState<Profile>({
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    mobile: "+1 (555) 123-4567",
    location: "USA",
    avatar: defaultAvatar,
    notif: "Allow",
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { bookings } = useBookings();
  const { wishlist } = useWishlist();
  const [currentView, setCurrentView] = useState("Profile Overview");

  useEffect(() => {
    try {
      const loaded = Object.entries(STORAGE_KEYS).reduce((acc, [k, v]) => {
        const val = localStorage.getItem(v);
        if (val) acc[k as keyof Profile] = val;
        return acc;
      }, {} as any);
      setProfile((p) => ({ ...p, ...loaded }));
      const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
      if (savedTheme === "dark") document.documentElement.classList.add("dark");
    } catch {
      //empty
    }
  }, []);

  const onAvatarClick = () => fileInputRef.current?.click();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setProfile((p) => ({ ...p, avatar: dataUrl }));
      localStorage.setItem(STORAGE_KEYS.avatar, dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const navItems = [
    { label: "Profile Overview", count: 0 },
    { label: "My Booking", count: bookings.length },
    { label: "Wishlist", count: wishlist.length },
    { label: "History", count: 2 },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col p-8">
      <h1 className="text-2xl font-bold mb-1">My Account</h1>
      <p className="text-[var(--color-subtext)] mb-8">
        Manage your profile, orders, and preferences
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-80 bg-[var(--color-card)] dark:bg-[var(--color-card)] rounded-2xl shadow-lg border border-[var(--color-border)] p-6 flex flex-col transition-all">
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <img
                src={profile.avatar}
                alt="avatar"
                onClick={onAvatarClick}
                className="w-24 h-24 rounded-full ring-2 ring-[var(--color-primary)] cursor-pointer hover:scale-105 transition-all"
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onFileChange}
              />
              <span className="absolute bottom-0 right-0 bg-[var(--color-primary)] text-white p-1 rounded-full text-xs cursor-pointer">
                ✎
              </span>
            </div>
            <h2 className="mt-4 font-semibold text-lg">{profile.name}</h2>
            <p className="text-[var(--color-subtext)] text-sm">
              {profile.email}
            </p>
            <span className="mt-2 bg-[var(--color-primary)] text-white text-xs px-3 py-1 rounded-full">
              Premium Member
            </span>
          </div>

          <div className="flex justify-between text-sm text-[var(--color-subtext)] mb-4">
            <div>
              <p className="font-semibold">Member Since</p>
              <p>Jun 2022</p>
            </div>
            <div>
              <p className="font-semibold">Loyalty Points</p>
              <p>1,240 pts</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2 mt-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setCurrentView(item.label)}
                className={`flex items-center justify-between px-4 py-2 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all ${
                  currentView === item.label
                    ? "bg-[var(--color-primary)] text-white"
                    : ""
                }`}
              >
                <span>{item.label}</span>
                {item.count > 0 && (
                  <span className="bg-[var(--color-primary)] text-white text-xs px-2 py-0.5 rounded-full">
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <button className="mt-auto text-red-500 font-semibold text-left">
            Sign Out
          </button>
        </aside>

        {/* Profile Content */}
        <section className="flex-1 flex flex-col gap-6">
          {currentView === "Profile Overview" && (
            <div className="bg-[var(--color-card)] dark:bg-[var(--color-card)] rounded-2xl shadow-lg border border-[var(--color-border)] p-6">
              <h3 className="font-semibold text-lg mb-1">
                Profile Overview
              </h3>
              <p className="text-[var(--color-subtext)] mb-4">
                Manage your personal and payment information
              </p>

              {/* Basic Information */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-[var(--color-text)]">
                    Basic Information
                  </h4>
                  <button className="text-[var(--color-primary)] text-sm">
                    ✎ Edit All
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", value: profile.name },
                    { label: "Email Address", value: profile.email },
                    { label: "Phone Number", value: profile.mobile },
                    { label: "Date of Birth", value: "January 15, 1990" },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg p-4"
                    >
                      <p className="text-[var(--color-subtext)] text-xs">
                        {f.label}
                      </p>
                      <p className="text-[var(--color-text)] font-medium">
                        {f.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Account Details */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-[var(--color-text)]">
                    Account Details
                  </h4>
                  <button className="text-[var(--color-primary)] text-sm">
                    ✎ Edit All
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Username", value: "alex_morgan" },
                    { label: "Member Since", value: "June 12, 2022" },
                    { label: "Loyalty Points", value: "1,240 pts" },
                    {
                      label: "Membership Tier",
                      value: "Gold Member",
                    },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg p-4"
                    >
                      <p className="text-[var(--color-subtext)] text-xs">
                        {f.label}
                      </p>
                      <p className="text-[var(--color-text)] font-medium">
                        {f.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security */}
              <div>
                <h4 className="font-semibold text-[var(--color-text)] mb-2">
                  Security
                </h4>
                <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg p-4 text-[var(--color-subtext)]">
                  Password, Two-Factor Authentication, etc.
                </div>
              </div>
            </div>
          )}
          {currentView === "My Booking" && (
            <div className="bg-[var(--color-card)] dark:bg-[var(--color-card)] rounded-2xl shadow-lg border border-[var(--color-border)] p-6">
              <h3 className="font-semibold text-lg mb-1">My Bookings</h3>
              <p className="text-[var(--color-subtext)] mb-4">
                View and manage your hotel bookings
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {bookings.map((booking) => (
                  <BookingCard key={booking.hotel.id} booking={booking} />
                ))}
              </div>
            </div>
          )}
          {currentView === "Wishlist" && (
            <div className="bg-[var(--color-card)] dark:bg-[var(--color-card)] rounded-2xl shadow-lg border border-[var(--color-border)] p-6">
              <h3 className="font-semibold text-lg mb-1">My Wishlist</h3>
              <p className="text-[var(--color-subtext)] mb-4">
                Your favorite hotels and destinations.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {wishlist.length > 0 ? (
                  wishlist.map((hotel) => (
                    <HotelCard key={hotel.id} {...hotel} />
                  ))
                ) : (
                  <p>Your wishlist is empty.</p>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
