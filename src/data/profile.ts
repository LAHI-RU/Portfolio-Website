import type { Status } from "./site";

export const experience = [
  {
    role: "Creative Assistant (Intern)",
    org: "SOS Children's Villages Sri Lanka",
    place: "Fund Development & Communication Department",
    period: "July 2026 – Present",
    // CV lists programme coordination / production planning duties here. Kept private until verified (see CONTENT_TO_UPDATE.md).
    summary: null as string | null,
    status: "needs-review" as Status,
  },
  {
    role: "Production Trainee",
    org: "Sirasa TV, Stein Studios",
    place: "Ratmalana",
    period: "February 2026 – May 2026",
    // CV lists content development / campaign duties here, which look swapped with the entry above. Verify.
    summary: null as string | null,
    status: "needs-review" as Status,
  },
];

export const education = [
  { title: "BA (Hons) in Communication Studies", org: "Trincomalee Campus, Eastern University, Sri Lanka", period: "2022 – 2026", note: "GPA 3.3. Degree status to be confirmed.", status: "needs-review" as Status },
  { title: "G.C.E. Advanced Level (Arts Stream)", org: "Mo/Dutugemunu Central College, Buttala", period: "2020", note: "Sinhala (A), Geography (B), Logic and Scientific Method (B)", status: "confirmed" as Status },
  { title: "G.C.E. Ordinary Level", org: "Royal College, Monaragala", period: "2017", note: "", status: "confirmed" as Status },
];

export const qualifications = [
  { title: "Diploma in English Language", org: "British Way English Academy, Kandy", period: "2022" },
  { title: "English Language Course", org: "DynED International", period: "2019" },
  { title: "Certificate in Computer Applications", org: "Rainbow Informatics of Sri Lanka", period: "2013" },
];

export const toolGroups = [
  { title: "Creative applications", tools: [
    { name: "Adobe Premiere Pro", icon: "adobepremierepro", color: "#5750BD", use: "Video editing" },
    { name: "Adobe After Effects", icon: "adobeaftereffects", color: "#5750BD", use: "Motion graphics" },
    { name: "Adobe Photoshop", icon: "adobephotoshop", color: "#1268A4", use: "Image editing" },
    { name: "Canva", icon: "canva", color: "#087E8B", use: "Visual design" },
    { name: "CapCut", icon: "capcut", color: "#19292D", use: "Video editing" },
  ] },
  { title: "Office applications", tools: [
    { name: "Microsoft Word", icon: "microsoftword", color: "#185ABD", use: "Writing & documents" },
    { name: "Microsoft Excel", icon: "microsoftexcel", color: "#107C41", use: "Spreadsheets" },
    { name: "Microsoft PowerPoint", icon: "microsoftpowerpoint", color: "#C43E1C", use: "Presentations" },
  ] },
];

export const professionalSkills = ["Communication", "Collaboration", "Analytical thinking", "Time management", "Adaptability", "Leadership"];

export const languages = [{ name: "Sinhala", level: "Native" }, { name: "English", level: "Fluent" }];

export const activities = [
  { title: "School Prefect Board member", detail: "Royal College, Monaragala (2012 – 2016) and Dutugemunu Central College, Buttala (2019 – 2020)" },
  { title: "University Badminton Team member", detail: "Trincomalee Campus (2023 – 2025)" },
];

export const recognition = {
  title: "SANROOPANA 2025",
  award: "Merit certificate for Shadowed Truth",
  detail: "Awarded at the SANROOPANA 2025 competition organized by the University of Ruhuna. Shadowed Truth was recognized as an “Outstanding” entry.",
};
