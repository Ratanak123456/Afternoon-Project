import type {feedback} from "../../types/feedback.ts"


export default function FeedbackCard({name,feedback,profile}:feedback) {
  return (
<div className="flex justify-center items-center p-6">
  <div className="w-96 h-96 p-8 rounded-2xl bg-[var(--color-card)] shadow-2xl border border-[var(--color-border)] flex flex-col">
    
    {/* Header with fixed height */}
    <div className="flex gap-4 items-center mb-6 flex-shrink-0">
      <div className="relative">
        <img 
          className="h-16 w-16 rounded-2xl object-cover border-2 border-[var(--color-card)] shadow-md"
          src={profile}
          alt={`${name}'s profile`}
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[var(--color-accent)] rounded-full flex items-center justify-center border border-[var(--color-card)]">
          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-xl font-bold text-[var(--color-text)] truncate">
          {name}
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mt-1"></div>
      </div>
    </div>

    {/* Feedback content with fixed height and scroll */}
    <div className="flex-1 min-h-0 overflow-hidden">
      <div className="relative h-full">
        <svg className="absolute -left-1 -top-1 w-5 h-5 text-[var(--color-primary)]/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
        </svg>
        <p className="text-[var(--color-text)] leading-relaxed h-full overflow-y-auto pr-2 pl-4 text-sm custom-scrollbar">
          "{feedback}"
        </p>
      </div>
    </div>

    {/* Fixed height footer */}
    <div className="flex justify-between items-center mt-4 pt-4 border-t border-[var(--color-border)] flex-shrink-0">
      <div className="flex items-center gap-1 text-[var(--color-subtext)] text-xs">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        Verified
      </div>
      <div className="text-[var(--color-accent)] text-xs font-medium">
        ⭐ Recommended
      </div>
    </div>
  </div>
</div>
  );
}