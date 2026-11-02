import { Link, useParams } from "react-router";
import { usePageTitle } from "../hooks/usePageTitle";
import { projects } from "../data/projects";
import { ContactCTA, Img, Reveal, StatusTag, VideoSlot, Mask } from "../components/shared";
import NotFound from "./NotFound";

export default function ProjectPage() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];
  usePageTitle(p?.title);
  if (!p) return <NotFound />;
  const next = projects[(i + 1) % projects.length];
  return (
    <>
      <article>
        <header className="wrap pt-32">
          <p className="meta">{p.categoryLabel}, {p.year}</p>
          <h1 className="display t-page mt-3 max-w-4xl"><Mask>{p.title}</Mask></h1>
          <p className="mt-6 prose-w text-lg">{p.summary}</p>
          {p.recognition && <p className="mt-4 prose-w text-teal">{p.recognition}</p>}
        </header>
        <div className="wrap mt-12"><Img asset={p.image} eager className="aspect-[16/8] max-h-[80vh] w-full" /></div>

        <section className="wrap section" aria-labelledby="details">
          <h2 id="details" className="display t-section">Project details</h2>
          <dl className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
            {p.details.map((d) => (
              <Reveal key={d.label} className="grid gap-2 py-5 md:grid-cols-12">
                <dt className="font-medium md:col-span-4">{d.label}</dt>
                <dd className="md:col-span-8 text-slate">{d.text ?? <>Details to be confirmed and added. <StatusTag status={d.status} /></>}</dd>
              </Reveal>
            ))}
          </dl>
        </section>

        <section className="wrap pb-16" aria-labelledby="media">
          <h2 id="media" className="display t-section mb-8">{p.category === "Research" ? "Supporting material" : "Film"}</h2>
          {p.category === "Research"
            ? <p className="text-slate prose-w">Dissertation abstract and any shareable documents will appear here once approved.</p>
            : <VideoSlot url={p.videoUrl} title={p.title} />}
        </section>
      </article>
      <nav aria-label="Next project" className="wrap pb-20">
        <Link to={next.path} className="group flex items-end justify-between border-t border-ink/20 pt-6">
          <span><span className="meta block">Next project</span><span className="display text-4xl group-hover:text-teal transition-colors">{next.title}</span></span>
          <span aria-hidden>→</span>
        </Link>
      </nav>
      <ContactCTA />
    </>
  );
}
