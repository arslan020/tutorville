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
    const src = mediaSrc(photo);
    return (
      <div className={`group relative ${sizeClass} flex-shrink-0`}>
        <div className="h-full w-full cursor-zoom-in overflow-hidden rounded-2xl bg-sky ring-1 ring-line">
          <img src={src} alt={name} loading="lazy" className="h-full w-full object-cover object-top" />
        </div>
        <div className="pointer-events-none invisible absolute left-1/2 top-[calc(100%+0.5rem)] z-50 w-56 -translate-x-1/2 rounded-2xl bg-white p-1.5 opacity-0 shadow-[0_18px_50px_rgba(52,49,95,0.2)] ring-1 ring-line transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 sm:w-72">
          <img src={src} alt="" className="max-h-[22rem] w-full rounded-xl object-contain" />
        </div>
      </div>
    );
  }

  return (
    <div className={`${sizeClass} flex flex-shrink-0 items-center justify-center rounded-2xl font-extrabold text-white ${textClass} ${colorClass}`}>
      {name.slice(0, 1)}
    </div>
  );
}
