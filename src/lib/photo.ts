import { useState } from "react";

/**
 * Drop the headshot into `public/` as smit.jpg (or .jpeg/.png/.webp) and every
 * photo surface on the site picks it up — no code change needed.
 */
export const PHOTO_CANDIDATES = [
  "/smit.jpg",
  "/smit.jpeg",
  "/smit.png",
  "/smit.webp",
];

export function usePhotoUrl() {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const src = failed ? null : PHOTO_CANDIDATES[index];

  const onError = () => {
    if (index < PHOTO_CANDIDATES.length - 1) setIndex(index + 1);
    else setFailed(true);
  };

  return { src, onError };
}
