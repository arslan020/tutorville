"use client";

import { mediaSrc } from "@/lib/blob";

export const inputClass =
  "w-full rounded-xl border border-line px-3 py-2.5 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-sky";
export const labelClass = "text-sm font-medium text-ink";
export const addButtonClass =
  "rounded-full bg-navy px-4 py-2 text-sm font-bold text-white transition hover:bg-deep-navy";

export function RemoveButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-ink/50 transition hover:bg-red-50 hover:text-red-600"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>
  );
}

export function ImageUpload({
  imageUrl,
  uploading,
  onUpload,
  onClear,
  clearLabel,
}: {
  imageUrl: string;
  uploading: boolean;
  onUpload: (file: File) => void;
  onClear?: () => void;
  clearLabel?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      {imageUrl ? (
        <img src={mediaSrc(imageUrl)} alt="" className="h-16 w-16 flex-shrink-0 rounded-xl object-cover ring-1 ring-line" />
      ) : (
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-mist text-[10px] text-ink/40">
          No photo
        </div>
      )}
      <div className="flex flex-col items-start gap-1">
        <label className="cursor-pointer rounded-full border border-navy px-3 py-1.5 text-xs font-bold text-navy transition hover:bg-navy hover:text-white">
          {uploading ? "Uploading…" : "Upload photo"}
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp,image/avif,image/gif"
            className="hidden"
            disabled={uploading}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onUpload(file);
              e.target.value = "";
            }}
          />
        </label>
        {onClear && imageUrl && (
          <button type="button" onClick={onClear} className="text-xs text-ink/60 underline hover:text-ink">
            {clearLabel || "Remove photo"}
          </button>
        )}
      </div>
    </div>
  );
}

export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-line sm:p-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-deep-navy">{title}</h2>
      {description && <p className="mt-1 text-sm text-ink/70">{description}</p>}
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

export function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <input className={`mt-1 ${inputClass}`} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export function Area({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <textarea rows={rows} className={`mt-1 ${inputClass}`} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export function StringList({
  label,
  values,
  onChange,
  addLabel,
}: {
  label: string;
  values: string[];
  onChange: (next: string[]) => void;
  addLabel: string;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <div className="mt-1 space-y-2">
        {values.map((value, i) => (
          <div key={i} className="flex gap-2">
            <input
              className={inputClass}
              value={value}
              onChange={(e) => {
                const next = [...values];
                next[i] = e.target.value;
                onChange(next);
              }}
            />
            <RemoveButton label={`Remove ${label}`} onClick={() => onChange(values.filter((_, idx) => idx !== i))} />
          </div>
        ))}
      </div>
      <button type="button" className={`mt-3 ${addButtonClass}`} onClick={() => onChange([...values, ""])}>
        {addLabel}
      </button>
    </div>
  );
}
