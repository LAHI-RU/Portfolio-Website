import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowUpRight, Award } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import { projects } from "../data/projects";
import { ContactCTA, Img, Reveal, VideoSlot, Mask } from "../components/shared";
import { WritingSamples } from "../components/WritingSamples";
import NotFound from "./NotFound";

export default function ProjectPage() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];
  usePageTitle(p?.title);
  if (!p) return <NotFound />;
  const next = projects[(i + 1) % projects.length];
  const publishedDetails = p.details.filter((detail) => detail.status === "confirmed" && detail.text?.trim());
  return (
    <>
      <article>
        <header className="wrap pt-32">
          <Link to={p.category === "Research" ? "/research" : "/work"} className="inline-flex items-center gap-2 text-sm text-slate hover:text-teal mb-8"><ArrowLeft size={16} aria-hidden />{p.category === "Research" ? "Back to research" : "Back to selected work"}</Link>
          <p className="eyebrow">{p.categoryLabel} / {p.year}</p>
          <h1 className="display t-page mt-3 max-w-4xl"><Mask>{p.title}</Mask></h1>
          <p className="mt-6 prose-w text-lg">{p.summary}</p>
          {p.recognition && <p className="mt-5 prose-w text-teal text-sm flex items-start gap-2"><Award size={18} className="shrink-0 mt-0.5" aria-hidden />{p.recognition}</p>}
        </header>
        <div className="wrap mt-12"><Img asset={p.image} eager className="aspect-[16/8] max-h-[80vh] w-full" /></div>

        {publishedDetails.length > 0 && <section className="wrap section grid gap-10 lg:grid-cols-12" aria-labelledby="details">
          <Reveal className="lg:col-span-4"><p className="eyebrow mb-3">{p.category === "Research" ? "The inquiry" : "Behind the story"}</p><h2 id="details" className="display t-section">{p.category === "Research" ? "About the research" : "About the project"}</h2></Reveal>
          <dl className="lg:col-span-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {publishedDetails.map((d, index) => (
              <Reveal key={d.label} delay={index * 0.06} className="border-t border-ink/15 pt-5">
                <dt className="display text-3xl">{d.label}</dt>
                <dd className="mt-3 text-slate">{d.text}</dd>
              </Reveal>
            ))}
          </dl>
        </section>}

        {p.category === "Research" ? <WritingSamples researchOnly /> : (
          <section className="wrap pb-16" aria-labelledby="media">
            <h2 id="media" className="display text-4xl mb-6">A glimpse of the story</h2>
            <VideoSlot url={p.videoUrl} title={p.title} />
          </section>
        )}
      </article>
      <nav aria-label="Next project" className="wrap pb-20">
        <Link to={next.path} className="group flex items-end justify-between gap-5 border-t border-ink/20 pt-6">
          <span><span className="meta block">Next project</span><span className="display text-4xl group-hover:text-teal transition-colors">{next.title}</span></span>
          <ArrowUpRight className="shrink-0 mb-1" aria-hidden />
        </Link>
      </nav>
      <ContactCTA />
    </>
  );
}
