import { Link } from "react-router";
import { usePageTitle } from "../hooks/usePageTitle";
import { assets } from "../data/assets";
import { activities, education, experience, languages, skills } from "../data/profile";
import { ContactCTA, Img, Reveal, Mask } from "../components/shared";

export default function About() {
  usePageTitle("About");
  return (
    <>
      <section className="wrap grid items-start gap-12 pt-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="display t-page"><Mask>Hello, I'm Kanchana.</Mask></h1>
          <div className="mt-8 space-y-4 prose-w">
            <p>I'm an emerging communication and media professional from Sri Lanka. My background combines communication studies, visual storytelling, creative production and research.</p>
            <p>I've gained practical exposure to professional communication environments through a production traineeship at Sirasa TV and an internship in the Fund Development & Communication Department at SOS Children's Villages Sri Lanka.</p>
            <p>I'm drawn to developing meaningful content, supporting organizational communication and contributing to creative initiatives. I enjoy working in team-oriented, fast-paced settings.</p>
          </div>
          <Link to="/contact" className="btn btn-solid mt-8">Get in touch</Link>
        </div>
        <div className="lg:col-span-5"><Img asset={assets.about} eager className="aspect-[4/5] w-full" /></div>
      </section>

      <section className="wrap section grid gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="display text-4xl">Experience and education</h2>
          <ul className="mt-6 space-y-5">
            {[...experience.map((e) => [e.role, `${e.org}, ${e.period}`]), ...education.slice(0, 1).map((e) => [e.title, `${e.org}, ${e.period}`])].map(([a, b]) => (
              <li key={a}><p className="font-medium">{a}</p><p className="text-slate">{b}</p></li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display text-4xl">Skills and tools</h2>
          {Object.entries(skills).map(([g, items]) => (
            <div key={g} className="mt-5"><h3 className="meta">{g}</h3><p>{items.join(", ")}</p></div>
          ))}
          <h3 className="meta mt-5">Languages</h3>
          <p>{languages.map((l) => `${l.name} (${l.level})`).join(", ")}</p>
        </Reveal>
      </section>

      <section className="section bg-sage/60">
        <div className="wrap">
          <h2 className="display text-4xl">Beyond work</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {activities.map((a) => <li key={a.title}><p className="font-medium">{a.title}</p><p className="text-slate">{a.detail}</p></li>)}
          </ul>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
