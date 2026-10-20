"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Lightweight YouTube facade: shows the thumbnail (zero-cost) and only loads
 * the iframe when the user clicks play. Swap the video host later by changing
 * only this component — the rest of the app just passes a videoId.
 */
export function YouTubeEmbed({
  videoId,
  title,
}: {
  videoId?: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (!videoId) {
    return (
      <div className="relative grid aspect-video w-full place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950">
        <div className="text-center px-6">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white/10 text-white/70">
            <Play className="ml-0.5 h-7 w-7" />
          </span>
          <p className="mt-4 font-medium text-slate-300">{title}</p>
          <p className="mt-1 text-sm text-slate-500">Lecture preview — add your YouTube link</p>
        </div>
      </div>
    );
  }

  if (playing) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play lecture: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-black"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black/25" />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-copper-600 text-white shadow-xl transition-transform group-hover:scale-110">
          <Play className="ml-0.5 h-7 w-7 fill-current" />
        </span>
      </span>
    </button>
  );
}
