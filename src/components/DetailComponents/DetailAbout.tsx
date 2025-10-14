interface DetailAboutProps {
  description: string;
}

export default function DetailAbout({ description }: DetailAboutProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
        About
      </h3>
      <p className="text-[var(--color-subtext)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
