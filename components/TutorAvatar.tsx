type TutorAvatarProps = {
  name: string;
  photo?: string;
  /** Where the face sits in the photo (CSS position), so the crop centres on it. */
  focus?: string;
  /** Tailwind size classes, e.g. "h-12 w-12" */
  sizeClass: string;
  /** Tailwind classes for the initial letter, used when there is no photo */
  textClass: string;
  /** Background colour class for the initial-letter fallback */
  colorClass: string;
};

export default function TutorAvatar({ name, photo, focus = "50% 30%", sizeClass, textClass, colorClass }: TutorAvatarProps) {
  if (photo) {
    return (
      <div className={`${sizeClass} flex-shrink-0 overflow-hidden rounded-2xl bg-sky ring-1 ring-line`}>
        <img
          src={photo}
          alt={name}
          loading="lazy"
          className="h-full w-full scale-[1.5] object-cover"
          style={{ objectPosition: focus, transformOrigin: focus }}
        />
      </div>
    );
  }

  return (
    <div className={`${sizeClass} flex flex-shrink-0 items-center justify-center rounded-2xl font-extrabold text-white ${textClass} ${colorClass}`}>
      {name.slice(0, 1)}
    </div>
  );
}
