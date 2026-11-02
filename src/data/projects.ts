import { assets, type Asset } from "./assets";
import type { Status } from "./site";

export interface Detail { label: string; text?: string; status: Status }
export interface Project {
  slug: string; path: string; title: string; year: string;
  category: "Film" | "Documentary" | "Research"; categoryLabel: string;
  summary: string; image: Asset; videoUrl: string | null; recognition?: string; details: Detail[];
}

const pending = (label: string, status: Status = "needs-review"): Detail => ({ label, status });

export const projects: Project[] = [
  {
    slug: "the-broken-voice", path: "/work/the-broken-voice", title: "The Broken Voice", year: "2025",
    category: "Film", categoryLabel: "Awareness Film",
    summary: "A film created to raise awareness about child protection and the importance of healthy communication within families.",
    image: assets.brokenVoice, videoUrl: null,
    details: [pending("Background"), pending("Purpose"), pending("Kanchana's individual role"), pending("Creative process"), pending("Production credits"), pending("Film poster", "awaiting-media"), pending("Personal reflection")],
  },
  {
    slug: "no-more-silence", path: "/work/no-more-silence", title: "No More Silence", year: "2025",
    category: "Documentary", categoryLabel: "Documentary",
    summary: "A documentary created to raise awareness about menstrual hygiene challenges faced by Sri Lankan teenagers and the importance of better support.",
    image: assets.noMoreSilence, videoUrl: null,
    details: [pending("Background"), pending("Kanchana's individual role"), pending("Creative process"), pending("Production credits"), pending("Documentary stills (use only with permission from anyone shown)", "awaiting-media"), pending("Trailer", "awaiting-media")],
  },
  {
    slug: "shadowed-truth", path: "/work/shadowed-truth", title: "Shadowed Truth", year: "2024",
    category: "Film", categoryLabel: "Collaborative Film",
    summary: "A collaboratively produced film focusing on creative visual storytelling and effective communication.",
    image: assets.shadowedTruth, videoUrl: null,
    recognition: "Associated with a SANROOPANA 2025 Merit certificate, from a competition organized by the University of Ruhuna.",
    details: [pending("Film overview"), pending("Kanchana's creative contribution"), pending("Team credits"), pending("Certificate image", "awaiting-media"), pending("Gallery", "awaiting-media")],
  },
  {
    slug: "tv-advertising-ethics", path: "/research/tv-advertising-ethics", title: "Ethical Standards of Television Advertisements in Sri Lanka", year: "2025 – 2026",
    category: "Research", categoryLabel: "Undergraduate Research",
    summary: "Undergraduate dissertation examining ethical standards in Sri Lankan television advertisements, identifying potential ethical issues and exploring how well industry standards are followed.",
    image: assets.research, videoUrl: null,
    details: [pending("Research problem"), pending("Research questions"), pending("Methodology"), pending("Data collection"), pending("Analysis"), pending("Findings"), pending("Recommendations"), pending("Supervisor (only if approved)", "not-public"), pending("Dissertation abstract"), pending("Downloadable research material (only if approved)", "not-public")],
  },
];
