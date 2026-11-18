import { useEffect, useState } from "react";

/**
 * The résumé PDF lives in `public/`. Drop it there with one of these names and
 * the download buttons appear automatically — no code change needed.
 */
export const RESUME_CANDIDATES = [
  "/Smit-Ranjan-Singh-Resume.pdf",
  "/smit-ranjan-singh-resume.pdf",
  "/resume.pdf",
];

export function useResumeUrl() {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    const probe = async () => {
      for (const candidate of RESUME_CANDIDATES) {
        try {
          const response = await fetch(candidate, { method: "HEAD" });
          const type = (response.headers.get("content-type") ?? "").toLowerCase();
          const isPdf = type.includes("pdf") || type.includes("octet-stream");
          // Single-page hosts answer 200 with index.html for missing files, so
          // the content type is what proves the PDF is really there.
          if (response.ok && isPdf) {
            if (alive) setUrl(candidate);
            return;
          }
        } catch {
          // Keep probing the next candidate.
        }
      }
    };

    void probe();
    return () => {
      alive = false;
    };
  }, []);

  return url;
}
