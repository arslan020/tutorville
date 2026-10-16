import { mediaSrc } from "@/lib/blob";

type TutorAvatarProps = {
  name: string;
  photo?: string;
  sizeClass: string;
  textClass: string;
  colorClass: string;
};

export default function TutorAvatar({ name, photo, sizeClass, textClass, colorClass }: TutorAvatarProps) {
  if (photo) {
    return (
      <div className={`${sizeClass} flex-shrink-0 overflow-hidden rounded-2xl bg-sky ring-1 ring-line`}>
        <img src={mediaSrc(photo)} alt={name} loading="lazy" className="h-full w-full object-cover object-top" />
      </div>
    );
  }

  return (
    <div className={`${sizeClass} flex flex-shrink-0 items-center justify-center rounded-2xl font-extrabold text-white ${textClass} ${colorClass}`}>
      {name.slice(0, 1)}
    </div>
  );
}
