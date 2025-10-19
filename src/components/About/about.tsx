import { Globe, Heart, Shield, Users } from "lucide-react"; // <-- THIS LINE IS NEEDED
import teamImage from "../../assets/Team_collaboration_workspace_photo_0213fc05.png"; // Make sure path is correct

export default function About() {
  const stats = [
    { value: "150+", label: "Destinations" },
    { value: "5,000+", label: "Partner Hotels" },
    { value: "50,000+", label: "Happy Travelers" },
    { value: "8", label: "Years of Service" },
  ];

  const values = [
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Access to breathtaking destinations across all continents, carefully curated for unforgettable experiences.",
    },
    {
      icon: Heart,
      title: "Passion for Travel",
      description:
        "We live and breathe travel, bringing you authentic experiences that create lasting memories.",
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description:
        "Your safety and satisfaction are our top priorities, backed by 24/7 customer support.",
    },
  ];

  return (
    <div className="w-full" data-testid="section-about">
      <section className="py-12 sm:py-16 md:py-24 bg-[var(--color-bg)] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4 sm:mb-6 tracking-tight"
            data-testid="text-about-title"
          >
            Your Journey Begins Here
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-subtext)] leading-relaxed max-w-3xl mx-auto">
            We believe travel is more than just visiting places—it's about
            creating connections, discovering cultures, and building memories
            that last a lifetime.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[var(--color-card)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--color-text)] mb-4 sm:mb-6">
                Our Story
              </h3>
              <p className="text-base sm:text-lg text-[var(--color-subtext)] leading-relaxed mb-4 sm:mb-6">
                Founded by passionate travelers who wanted to share the world's
                wonders, we've grown from a small startup to a trusted travel
                platform serving thousands of adventurers worldwide.
              </p>
              <p className="text-base sm:text-lg text-[var(--color-subtext)] leading-relaxed">
                Every destination we feature, every hotel we partner with, and
                every experience we recommend is personally vetted by our team
                of travel experts who have been there.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-bg)] rounded-2xl p-4 sm:p-6 text-center border border-[var(--color-border)] hover:shadow-md transition-all duration-300"
                  data-testid={`card-stat-${index}`}
                >
                  <div
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-2"
                    data-testid={`text-stat-value-${index}`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs sm:text-sm text-[var(--color-subtext)] font-medium"
                    data-testid={`text-stat-label-${index}`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[var(--color-bg)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3 sm:mb-4">
              What Drives Us
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-[var(--color-subtext)] max-w-2xl mx-auto">
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon; // Use the imported icon component
              return (
                <div
                  key={index}
                  className="bg-[var(--color-card)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border)] hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  data-testid={`card-value-${index}`}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent // Render the component here
                      className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--color-primary)]"
                      data-testid={`icon-value-${index}`}
                    />
                  </div>
                  <h4
                    className="text-lg sm:text-xl font-semibold text-[var(--color-text)] mb-2 sm:mb-3"
                    data-testid={`text-value-title-${index}`}
                  >
                    {value.title}
                  </h4>
                  <p
                    className="text-sm sm:text-base text-[var(--color-subtext)] leading-relaxed"
                    data-testid={`text-value-description-${index}`}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[var(--color-card)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={teamImage} // Ensure teamImage is imported correctly
                alt="Our team collaborating"
                className="rounded-2xl shadow-lg w-full h-auto"
                data-testid="img-team"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-primary)]" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--color-text)]">
                  Join Our Community
                </h3>
              </div>
              <p className="text-base sm:text-lg text-[var(--color-subtext)] leading-relaxed mb-4 sm:mb-6">
                We're more than just a platform—we're a community of explorers,
                dreamers, and adventure seekers who believe in the
                transformative power of travel.
              </p>
              <p className="text-base sm:text-lg text-[var(--color-subtext)] leading-relaxed mb-6 sm:mb-8">
                Whether you're planning your first trip or your hundredth, our
                team is here to help you discover destinations that speak to
                your soul.
              </p>
              <button
                className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--color-primary-hover)] transition-all duration-300"
                onClick={() => console.log("Contact us clicked")}
                data-testid="button-contact"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
