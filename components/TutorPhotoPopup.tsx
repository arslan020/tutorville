"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { mediaSrc } from "@/lib/blob";

export default function TutorPhotoPopup({
  name,
  photo,
  role,
  highlights,
  children,
}: {
  name: string;
  photo?: string;
  role: string;
  highlights: string[];
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const dialog = (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-deep-navy/75 p-3 sm:p-6"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={name}
        className="relative grid max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-[minmax(0,1.3fr)_minmax(16rem,0.9fr)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-deep-navy shadow-sm ring-1 ring-line transition hover:bg-sky"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className="flex max-h-[50vh] items-center justify-center bg-[#f4f1f8] p-3 md:max-h-[92vh] md:p-6">
          {photo ? (
            <img
              src={mediaSrc(photo)}
              alt={name}
              className="max-h-[46vh] w-auto max-w-full object-contain md:max-h-[84vh]"
            />
          ) : (
            <p className="text-sm text-ink/60">No photo</p>
          )}
        </div>
        <div className="overflow-y-auto p-5 sm:p-7">
          <h2 className="pr-10 text-2xl font-extrabold tracking-tight text-deep-navy sm:text-3xl">{name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink/75 sm:text-base">{role}</p>
          {highlights.length > 0 ? (
            <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink/80">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={`View ${name}`}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="h-full cursor-pointer"
      >
        {children}
      </div>
      {open ? createPortal(dialog, document.body) : null}
    </>
  );
}
