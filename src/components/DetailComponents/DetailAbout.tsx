type DetailAboutProps = {
  longDes: string;
}

export default function DetailAbout({ longDes }: DetailAboutProps) {
  return (
    <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
      <h3 className="text-2xl font-semibold text-[var(--color-text)] mb-3">
        About
      </h3>
      <p className="text-[var(--color-text)] leading-relaxed text-base md:text-lg">
        {longDes}
      </p>
    </div>
  );
}
