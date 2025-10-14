interface DetailHeaderProps {
  image: string;
  name: string;
  type: string;
  country?: string;
  location?: string;
}

export default function DetailHeader({ image, name, type, country, location }: DetailHeaderProps) {
  return (
    <div className="bg-[var(--color-card)] dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden mb-8 border border-[var(--color-border)] transition-all duration-300">
      <div className="relative h-80 md:h-96">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-6 left-6 text-white drop-shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {name}
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            {type === "destination" ? country : location}
          </p>
        </div>
        <button className="absolute top-6 right-6 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-[var(--color-primary-hover)] hover:text-white transition duration-300">
          <svg
            className="w-6 h-6 text-gray-400 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
