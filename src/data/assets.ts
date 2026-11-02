// Every image used by the site. Replace `src` (and set `isSample: false`) when real media is supplied.
export interface Asset { src: string; alt: string; isSample: boolean; source: string; objectPosition?: string; sampleLabel?: string }

export const assets = {
  portrait: { src: "/images/hero/hero_photo.jpeg", alt: "Kanchana Karunanayaka in a white blouse beside a sunlit corridor", isSample: false, source: "User-provided portrait", objectPosition: "50% 65%" },
  about: { src: "/images/about/sample-about.svg", alt: "Sample illustration of a camera lens on a workspace", isSample: true, source: "Original SVG graphic generated for this project" },
  brokenVoice: { src: "/images/projects/the-broken-voice-sample-v2.jpg", alt: "AI-generated concept artwork: an adult chair and a child's chair beside a table with a paper bird in a sunlit home", isSample: true, source: "OpenAI built-in image generation, 2026-11-02; conceptual sample, not a film still", objectPosition: "50% 65%", sampleLabel: "AI-generated sample" },
  noMoreSilence: { src: "/images/projects/no-more-silence-sample-v2.jpg", alt: "AI-generated concept artwork: a notebook, folded terracotta cloth and clean sanitary pad in soft daylight", isSample: true, source: "OpenAI built-in image generation, 2026-11-02; conceptual sample, not documentary footage", objectPosition: "55% 65%", sampleLabel: "AI-generated sample" },
  shadowedTruth: { src: "/images/projects/shadowed-truth-sample-v2.jpg", alt: "AI-generated concept artwork: sunlight passing through ribbed glass and casting layered shadows across a dark teal room", isSample: true, source: "OpenAI built-in image generation, 2026-11-02; conceptual sample, not a film still", objectPosition: "50% 50%", sampleLabel: "AI-generated sample" },
  research: { src: "/images/research/tv-advertising-ethics-sample-v2.jpg", alt: "AI-generated concept artwork: a vintage television displaying abstract colour shapes beside an open notebook and pencil", isSample: true, source: "OpenAI built-in image generation, 2026-11-02; conceptual sample, not research evidence", objectPosition: "50% 65%", sampleLabel: "AI-generated sample" },
  certificate: null as Asset | null, // e.g. { src: "/images/projects/sanroopana-certificate.jpg", alt: "...", isSample: false, source: "Provided by Kanchana" }
} satisfies Record<string, Asset | null>;
