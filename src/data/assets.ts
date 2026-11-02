// Every image used by the site. Replace `src` (and set `isSample: false`) when real media is supplied.
export interface Asset { src: string; alt: string; isSample: boolean; source: string }

export const assets = {
  portrait: { src: "/images/hero/sample-portrait.svg", alt: "Sample portrait placeholder, not a photograph of Kanchana", isSample: true, source: "Original SVG graphic generated for this project" },
  about: { src: "/images/about/sample-about.svg", alt: "Sample illustration of a camera lens on a workspace", isSample: true, source: "Original SVG graphic generated for this project" },
  brokenVoice: { src: "/images/projects/the-broken-voice.svg", alt: "Sample illustration of two overlapping circles, not a still from the film", isSample: true, source: "Original SVG graphic generated for this project" },
  noMoreSilence: { src: "/images/projects/no-more-silence.svg", alt: "Sample illustration of flowing lines, not a still from the documentary", isSample: true, source: "Original SVG graphic generated for this project" },
  shadowedTruth: { src: "/images/projects/shadowed-truth.svg", alt: "Sample illustration of light and shadow, not a still from the film", isSample: true, source: "Original SVG graphic generated for this project" },
  research: { src: "/images/research/tv-advertising-ethics.svg", alt: "Sample illustration of a television screen", isSample: true, source: "Original SVG graphic generated for this project" },
  certificate: null as Asset | null, // e.g. { src: "/images/projects/sanroopana-certificate.jpg", alt: "...", isSample: false, source: "Provided by Kanchana" }
} satisfies Record<string, Asset | null>;
