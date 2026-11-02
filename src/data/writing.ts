import type { Status } from "./site";

export interface WritingSample {
  title: string;
  kind: "Script excerpt" | "Campaign copy" | "Research abstract";
  description: string;
  href: string;
  status: Status;
}

// Add only Kanchana's approved writing and an actual public file or URL.
// Drafts and missing files are never presented as published samples.
export const writingSamples: WritingSample[] = [];
