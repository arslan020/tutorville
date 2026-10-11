"use client";

import { useState } from "react";

type VideoCardProps = {
  src: string;
  label: string;
};

export default function VideoCard({ src, label }: VideoCardProps) {
  // Default to a portrait phone ratio until the real size is known.
  const [ratio, setRatio] = useState("9 / 16");

  return (
    <figure className="overflow-hidden rounded-3xl bg-white p-2 shadow-sm ring-1 ring-line">
      <div className="flex justify-center rounded-2xl bg-deep-navy">
        <video
          // "#t=0.1" makes mobile browsers (iPhone Safari) paint a real first frame
          // instead of an empty box before the video is played.
          src={`${src}#t=0.1`}
          controls
          playsInline
          preload="metadata"
          aria-label={label}
          style={{ aspectRatio: ratio }}
          onLoadedMetadata={(e) => {
            const video = e.currentTarget;
            if (video.videoWidth && video.videoHeight) setRatio(`${video.videoWidth} / ${video.videoHeight}`);
            if (video.currentTime === 0) video.currentTime = 0.1;
          }}
          className="w-full rounded-2xl bg-deep-navy object-contain"
        />
      </div>
      <figcaption className="px-3 pb-2 pt-3 text-sm font-bold text-deep-navy">{label}</figcaption>
    </figure>
  );
}
