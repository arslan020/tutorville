import { mediaSrc } from "@/lib/blob";

type TutorAvatarProps = {
  name: string;
  /** Square, already-cropped headshot */
  photo?: string;
  /** Tailwind size classes, e.g. "h-12 w-12" */
  sizeClass: string;
  /** Tailwind classes for the initial letter, used when there is no photo */
  textClass: string;
  /** Background colour class for the initial-letter fallback */
  colorClass: string;
};

export default function TutorAvatar({ name, photo, sizeClass, textClass, colorClass }: TutorAvatarProps) {
  if (photo) {
    return (
      <div className={`${sizeClass} flex-shrink-0 overflow-hidden rounded-2xl bg-sky ring-1 ring-line`}>
        <img src={mediaSrc(photo)} alt={name} loading="lazy" className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`${sizeClass} flex flex-shrink-0 items-center justify-center rounded-2xl font-extrabold text-white ${textClass} ${colorClass}`}>
      {name.slice(0, 1)}
    </div>
  );
}
