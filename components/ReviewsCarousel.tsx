"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { WrittenReview } from "@/lib/content";

const AUTO_MS = 8000;

export default function ReviewsCarousel({ reviews }: { reviews: WrittenReview[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = reviews.length;

  const go = useCallback((next: number) => setIndex(((next % total) + total) % total), [total]);

  // Move to the next review on its own every 8 seconds. The timer restarts after any manual change
  // and while the visitor is hovering over / focused on the reviews.
  useEffect(() => {
    if (paused || total < 2) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % total), AUTO_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, total]);

  return (
    <div
      className="mx-auto max-w-3xl"
      role="region"
      aria-roledescription="carousel"
      aria-label="Written reviews from parents"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(delta) > 50) go(index + (delta < 0 ? 1 : -1));
      }}
    >
      <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_18px_50px_rgba(52,49,95,0.1)] ring-1 ring-line">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map((review, i) => (
            <figure
              key={i}
              aria-hidden={i !== index}
              aria-roledescription="slide"
              className="flex w-full flex-shrink-0 flex-col justify-between px-6 py-8 sm:px-12 sm:py-12"
            >
              <blockquote className="text-base leading-relaxed text-ink/85 sm:text-lg sm:leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky text-sm font-extrabold text-navy">
                  {review.author.slice(0, 1)}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-deep-navy">{review.author}</span>
                  {review.note ? <span className="block text-xs text-ink/60">{review.note}</span> : null}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* 8 second progress bar, restarts for each review */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-sky">
          <div
            key={`${index}-${paused}`}
            className="h-full origin-left bg-gradient-to-r from-navy to-accent"
            style={{
              animation: paused ? "none" : `review-progress ${AUTO_MS}ms linear forwards`,
              transform: paused ? "scaleX(0)" : undefined,
            }}
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => go(index - 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-deep-navy ring-1 ring-line transition hover:bg-sky hover:ring-navy/40"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-accent" : "w-2 bg-navy/25 hover:bg-navy/50"}`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next review"
          onClick={() => go(index + 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-deep-navy ring-1 ring-line transition hover:bg-sky hover:ring-navy/40"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
