"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { mediaSrc } from "@/lib/blob";

export default function TutorPhotoPopup({
  name,
  photo,
  children,
}: {
  name: string;
  photo?: string;
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

  if (!photo) return <>{children}</>;

  const dialog = (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-deep-navy/75 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={name}
        className="relative w-full max-w-lg rounded-3xl bg-white p-4 shadow-2xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-mist text-deep-navy transition hover:bg-sky"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <img
          src={mediaSrc(photo)}
          alt={name}
          className="mx-auto max-h-[75vh] w-auto max-w-full rounded-2xl object-contain"
        />
        <p className="mt-4 text-center text-lg font-extrabold tracking-tight text-deep-navy">{name}</p>
      </div>
    </div>
  );

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={`View ${name} photo`}
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
