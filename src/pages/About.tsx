import { Link } from "react-router";
import { ArrowUpRight, ChevronDown, GraduationCap, Languages, Users } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import { assets } from "../data/assets";
import { activities, education, experience, languages, professionalSkills, qualifications } from "../data/profile";
import { ContactCTA, Img, Reveal, Mask, AvailabilityLine } from "../components/shared";
import { Toolkit } from "../components/Toolkit";

export default function About() {
  usePageTitle("About");
  return (
    <>
      <section className="wrap grid items-start gap-12 pt-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-4">The person behind the stories</p>
          <h1 className="display t-page"><Mask>Hello, I'm Kanchana.</Mask></h1>
          <div className="mt-8 space-y-4 prose-w">
            <p>I'm an emerging communication and media professional from Sri Lanka. My background combines communication studies, visual storytelling, creative production and research.</p>
            <p>I've gained practical exposure to professional communication environments through a production traineeship at Sirasa TV and an internship in the Fund Development & Communication Department at SOS Children's Villages Sri Lanka.</p>
            <p>I'm drawn to developing meaningful content, supporting organizational communication and contributing to creative initiatives. I enjoy working in team-oriented, fast-paced settings.</p>
          </div>
          <AvailabilityLine className="mt-6" />
          <Link to="/contact" className="btn btn-solid mt-6">Get in touch <ArrowUpRight size={18} aria-hidden /></Link>
        </div>
        <div className="lg:col-span-5"><Img asset={assets.about} eager className="aspect-[4/5] w-full" /></div>
      </section>

      <section id="background" className="wrap section grid gap-14 lg:grid-cols-12 scroll-mt-24" aria-labelledby="background-title">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow mb-3">Experience & perspective</p>
          <h2 id="background-title" className="display text-4xl">Where my perspective takes shape.</h2>
          <p className="mt-4 text-slate prose-w">From television production to non-profit communication, my experience brings together different ways of reaching people.</p>
          <ul className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
            {experience.map((e, i) => (
              <li key={e.role} className="py-6 flex gap-5">
                <span className="meta pt-1" aria-hidden>0{i + 1}</span>
                <div>
                  <p className="meta">{e.period}</p>
                  <h3 className="display text-3xl mt-1">{e.org}</h3>
                  <p className="mt-2 font-medium text-sm">{e.role}</p>
                  <p className="meta mt-1">{e.place}</p>
                  {e.summary && e.status === "confirmed" && <p className="mt-3 text-slate prose-w">{e.summary}</p>}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-start gap-4">
            <GraduationCap className="text-teal shrink-0 mt-1" size={26} strokeWidth={1.4} aria-hidden />
            <div><p className="meta">Academic foundation · {education[0].period}</p>
              <h3 className="display text-3xl mt-2">{education[0].title}</h3>
              <p className="mt-2 text-slate">{education[0].org}</p>
              <Link to="/research" className="link-u inline-flex items-center gap-2 mt-4 text-sm">Explore my research <ArrowUpRight size={16} aria-hidden /></Link>
            </div>
          </div>
          <details className="learning-details mt-8 border-t border-ink/15 pt-5">
            <summary className="flex items-center justify-between gap-4 text-sm font-medium">Further learning & earlier education <ChevronDown size={18} className="details-chevron shrink-0 transition-transform" aria-hidden /></summary>
            <div className="mt-5 grid gap-8 sm:grid-cols-2">
              <div><h3 className="meta mb-4">Additional qualifications</h3><ul className="space-y-4">
                {qualifications.map((q) => <li key={q.title}><h4 className="text-sm font-medium">{q.title}</h4><p className="meta mt-1">{q.org} · {q.period}</p></li>)}
              </ul></div>
              <div><h3 className="meta mb-4">Earlier education</h3><ul className="space-y-4">
                {education.slice(1).map((e) => <li key={e.title}><h4 className="text-sm font-medium">{e.title}</h4><p className="meta mt-1">{e.org} · {e.period}</p>{e.note && e.status === "confirmed" && <p className="meta mt-1">{e.note}</p>}</li>)}
              </ul></div>
            </div>
          </details>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5 lg:pl-8">
          <p className="eyebrow mb-3">The creative toolkit</p>
          <h2 className="display text-4xl">Tools behind the stories.</h2>
          <p className="mt-4 mb-7 text-slate">From the first draft to the final frame.</p>
          <Toolkit />
          <div className="mt-9 border-t border-ink/15 pt-6">
            <h3 className="flex items-center gap-2 text-sm font-medium"><Users size={18} strokeWidth={1.5} className="text-teal" aria-hidden /> Working style</h3>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate">
              {professionalSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
          <div className="mt-6 border-t border-ink/15 pt-6">
            <h3 className="flex items-center gap-2 text-sm font-medium"><Languages size={18} strokeWidth={1.5} className="text-teal" aria-hidden /> Languages</h3>
            <ul className="mt-3 flex flex-wrap gap-6">{languages.map((l) => <li key={l.name} className="text-sm">{l.name} <span className="text-slate ml-1">/ {l.level}</span></li>)}</ul>
          </div>
        </Reveal>
      </section>

      <section className="section bg-sage/60">
        <div className="wrap">
          <p className="eyebrow mb-3">Away from the screen</p>
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
