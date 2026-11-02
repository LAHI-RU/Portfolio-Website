export type Status = "confirmed" | "needs-review" | "awaiting-media" | "not-public";

export const site = {
  name: "Kanchana Karunanayaka",
  monogram: "KK.",
  positioning: "Communication | Media Production | Visual Storytelling | Research",
  philosophy: "Thoughtful stories. Meaningful communication.",
  email: "kaanchikarunanayake@gmail.com",
  linkedin: "https://www.linkedin.com/in/k-karunanayaka",
  // Set to e.g. "/files/Kanchana-Karunanayaka-Public-CV.pdf" once an approved public CV is added to public/files/.
  approvedCvUrl: null as string | null,
  // Shows small "To be added / Needs review" tags where content is pending. Set to false for launch.
  showStatusMarkers: true,
};

export const statusLabel: Record<Status, string> = {
  confirmed: "Confirmed",
  "needs-review": "Needs review",
  "awaiting-media": "To be added",
  "not-public": "Not public",
};
