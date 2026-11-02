import { ArrowUpRight, FileText } from "lucide-react";
import { writingSamples } from "../data/writing";
import { Reveal } from "./shared";

export function WritingSamples({ researchOnly = false }: { researchOnly?: boolean }) {
  const samples = writingSamples.filter((sample) => sample.status === "confirmed" && sample.href.trim() && (!researchOnly || sample.kind === "Research abstract"));
  return (
    <section className="wrap pb-20" aria-labelledby="writing-title">
      <Reveal className="grid gap-8 border-t border-ink/15 pt-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow mb-3">{researchOnly ? "Research writing" : "Writing & ideas"}</p>
          <h2 id="writing-title" className="display text-4xl">{researchOnly ? "A closer reading." : "Words behind the work."}</h2>
        </div>
        <div className="md:col-span-7">
          {samples.length ? <ul className="divide-y divide-ink/15">
            {samples.map((sample) => (
              <li key={sample.href}>
                <a href={sample.href} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-4 py-5 first:pt-0">
                  <div><p className="meta">{sample.kind}</p><h3 className="display text-3xl mt-2 group-hover:text-teal">{sample.title}</h3><p className="text-slate mt-2">{sample.description}</p><span className="sr-only"> (opens in a new tab)</span></div>
                  <ArrowUpRight size={22} className="shrink-0 mt-2" aria-hidden />
                </a>
              </li>
            ))}
          </ul> : <div className="flex items-start gap-5 py-2">
            <FileText size={28} strokeWidth={1.3} className="text-teal shrink-0 mt-1" aria-hidden />
            <div><p className="font-medium">{researchOnly ? "Dissertation abstract forthcoming" : "Selected writing forthcoming"}</p>
              <p className="mt-2 text-slate prose-w">{researchOnly ? "The abstract and supporting research material will be shared here when available." : "A space for script excerpts, communication pieces and research writing. Samples will be shared as they become available."}</p>
            </div>
          </div>}
        </div>
      </Reveal>
    </section>
  );
}
