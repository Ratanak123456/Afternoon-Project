import React, { useState, type JSX } from "react";
import membersData from "../data/members.json";
import Members from "../components/memberCard/Members";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const members = membersData;

type FormData = {
  name: string;
  email: string;
  message: string;
};
export default function Contact(): JSX.Element {
  const [showAll] = useState("All");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // simulate submit
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-[var(--color-subtext)] max-w-2xl mx-auto">
            Get in touch with our travel experts. We're here to help you plan
            your perfect journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-[var(--color-card)] rounded-lg shadow-md p-8 border border-[var(--color-border)]">
              <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text)]">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-card)] text-[var(--color-text)]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-card)] text-[var(--color-text)]"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-card)] text-[var(--color-text)]"
                    placeholder="Tell us about your travel plans or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-primary)] text-white py-3 px-6 rounded-lg hover:bg-[var(--color-primary-hover)] disabled:bg-opacity-60 transition duration-300 font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaLocationDot />,
                  title: "Visit Us",
                  desc: "123 Travel Street, Adventure City, AC 12345",
                },
                {
                  icon: <FaPhone />,
                  title: "Call Us",
                  desc: "+1 (555) 123-4567",
                },
                {
                  icon: <IoMdMail />,
                  title: "Email Us",
                  desc: "hello@travelbook.com",
                },
              ].map((info, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-card)] rounded-lg shadow-md p-6 text-center border border-[var(--color-border)]"
                >
                  <div className="w-12 h-12 bg-[var(--color-primary)] text-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-[var(--color-text)] mb-2">
                    {info.title}
                  </h3>
                  <p className="text-[var(--color-subtext)] text-sm">
                    {info.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-[var(--color-card)] rounded-lg shadow-md p-8 border border-[var(--color-border)] h-[600px] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-6 text-[var(--color-text)]">
              Meet Our Team
            </h2>
            <p className="text-[var(--color-subtext)] mb-8">
              Our dedicated team of travel experts and developers work together
              to bring you the best travel experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(showAll === "All" || showAll === "Members") && (
                <>
                  {members.map((member, idx) => (
                    <div
                      key={member.id ?? member.github ?? idx}
                      className="w-full"
                    >
                      <Members {...member} />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          {/* Company Info */}
          <div>
            {/* Company Info */}
            <div className=" bg-[var(--color-card)] rounded-lg shadow-md p-8 border border-[var(--color-border)]">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text)]">
                About TravelBook
              </h2>
              <p className="text-[var(--color-subtext)] mb-4">
                We are passionate about creating unforgettable travel
                experiences. Our platform connects travelers with the world's
                most amazing destinations and accommodations.
              </p>
              <p className="text-[var(--color-subtext)]">
                With years of experience in the travel industry, we understand
                what makes a journey special. From luxury resorts to hidden
                gems, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
