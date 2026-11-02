import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePageTitle } from "../hooks/usePageTitle";
import { projects, type Project } from "../data/projects";
import { ContactCTA, Mask, ProjectCard, ease } from "../components/shared";
import { WritingSamples } from "../components/WritingSamples";

const filters = ["All", "Film", "Documentary", "Research"] as const;

export default function Work() {
  usePageTitle("Selected work");
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list: Project[] = projects.filter((p) => f === "All" || p.category === f);
  return (
    <>
      <section className="wrap pt-32 pb-8">
        <h1 className="display t-page"><Mask>Selected work</Mask></h1>
        <p className="mt-4 prose-w text-slate">Films, a documentary and a research project exploring social issues and the ways we talk about them.</p>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((x) => (
            <motion.button key={x} aria-pressed={f === x} onClick={() => setF(x)} whileTap={{ scale: 0.95 }}
              className={`btn !min-h-10 !py-1.5 ${f === x ? "btn-solid" : "btn-line"}`}>{x}</motion.button>
          ))}
        </div>
      </section>
      <section className="wrap section pt-8">
        <ul className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.li layout key={p.slug} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}>
                <ProjectCard p={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </section>
      <WritingSamples />
      <ContactCTA />
    </>
  );
}
