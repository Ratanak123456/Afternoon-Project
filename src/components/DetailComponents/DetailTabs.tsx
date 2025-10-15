export default function DetailTabs() {
  return (
    <div className="border-b border-[var(--color-border) bg-[var(--color-card)] rounded-t-2xl">
      <nav className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 px-6">
        <button className="py-4 px-1 border-b-2 font-medium text-sm capitalize border-[var(--color-primary)] text-[var(--color-primary)]">
          Overview
        </button>
        <button className="py-4 px-1 border-b-2 font-medium text-sm capitalize border-transparent text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:border-[var(--color-border)]">
          Reviews
        </button>
        <button className="py-4 px-1 border-b-2 font-medium text-sm capitalize border-transparent text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:border-[var(--color-border)]">
          Location
        </button>
      </nav>
    </div>
  );
}
