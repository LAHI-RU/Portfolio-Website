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
    details: [
      { label: "Story focus", text: "Child protection and communication within families form the focus of this awareness film.", status: "confirmed" },
      { label: "Purpose", text: "To raise awareness of child protection and the importance of healthy communication at home.", status: "confirmed" },
      pending("My contribution"), pending("Creative process"), pending("Production credits"), pending("Personal reflection"),
    ],
  },
  {
    slug: "no-more-silence", path: "/work/no-more-silence", title: "No More Silence", year: "2025",
    category: "Documentary", categoryLabel: "Documentary",
    summary: "A documentary created to raise awareness about menstrual hygiene challenges faced by Sri Lankan teenagers and the importance of better support.",
    image: assets.noMoreSilence, videoUrl: null,
    details: [
      { label: "Story focus", text: "Menstrual hygiene challenges faced by Sri Lankan teenagers, explored through documentary storytelling.", status: "confirmed" },
      { label: "Purpose", text: "To bring attention to these challenges and the importance of better support for young people.", status: "confirmed" },
      pending("My contribution"), pending("Creative process"), pending("Production credits"), pending("Personal reflection"),
    ],
  },
  {
    slug: "shadowed-truth", path: "/work/shadowed-truth", title: "Shadowed Truth", year: "2024",
    category: "Film", categoryLabel: "Collaborative Film",
    summary: "A collaboratively produced film focusing on creative visual storytelling and effective communication.",
    image: assets.shadowedTruth, videoUrl: null,
    recognition: "Merit recognition · SANROOPANA 2025 · University of Ruhuna",
    details: [
      { label: "The project", text: "A collaborative film centred on creative visual storytelling and effective communication.", status: "confirmed" },
      { label: "Recognition", text: "Recognized as an “Outstanding” entry with a Merit certificate at SANROOPANA 2025, organized by the University of Ruhuna.", status: "confirmed" },
      pending("My contribution"), pending("Creative process"), pending("Team credits"), pending("Personal reflection"),
    ],
  },
  {
    slug: "tv-advertising-ethics", path: "/research/tv-advertising-ethics", title: "Ethical Standards of Television Advertisements in Sri Lanka", year: "2025 – 2026",
    category: "Research", categoryLabel: "Undergraduate Research",
    summary: "Undergraduate dissertation examining ethical standards in Sri Lankan television advertisements, identifying potential ethical issues and exploring how well industry standards are followed.",
    image: assets.research, videoUrl: null,
    details: [
      { label: "Research focus", text: "An examination of ethical standards in television advertising in Sri Lanka, with attention to potential ethical issues and adherence to industry standards.", status: "confirmed" },
      { label: "Academic context", text: "Undergraduate dissertation in Communication Studies at Trincomalee Campus, Eastern University, Sri Lanka.", status: "confirmed" },
      pending("Research questions"), pending("Methodology"), pending("Data collection"), pending("Analysis"), pending("Findings"), pending("Recommendations"), pending("Supervisor", "not-public"), pending("Dissertation abstract"),
    ],
  },
];
