import type { ReactNode } from "react";
import { Link } from "react-router";
import { usePageTitle } from "../hooks/usePageTitle";
import { education, experience, languages, qualifications, skills } from "../data/profile";
import { site } from "../data/site";
import { motion } from "motion/react";
import { Mask, StatusTag } from "../components/shared";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.5 } };

function Row({ title, org, period, note, tag }: { title: string; org: string; period: string; note?: string; tag?: ReactNode }) {
  return (
    <li className="grid gap-1 border-t border-ink/15 py-5 md:grid-cols-12">
      <p className="meta md:col-span-3">{period}</p>
      <div className="md:col-span-9">
        <h3 className="font-medium">{title} {tag}</h3>
        <p className="text-slate">{org}</p>
        {note && <p className="meta mt-1">{note}</p>}
      </div>
    </li>
  );
}

export default function Resume() {
  usePageTitle("Resume");
  return (
    <div className="wrap pt-32 pb-24">
      <h1 className="display t-page"><Mask>Resume</Mask></h1>
      <motion.section {...fade} className="mt-12" aria-labelledby="exp"><h2 id="exp" className="display text-4xl">Experience</h2>
        <ul className="mt-4">{experience.map((e) => <Row key={e.role} title={e.role} org={`${e.org}, ${e.place}`} period={e.period} tag={<StatusTag status={e.status} />} note={e.summary ?? undefined} />)}</ul></motion.section>
      <motion.section {...fade} className="mt-12" aria-labelledby="edu"><h2 id="edu" className="display text-4xl">Education</h2>
        <ul className="mt-4">{education.map((e) => <Row key={e.title} title={e.title} org={e.org} period={e.period} note={e.note} tag={<StatusTag status={e.status} />} />)}</ul></motion.section>
      <motion.section {...fade} className="mt-12" aria-labelledby="qual"><h2 id="qual" className="display text-4xl">Additional qualifications</h2>
        <ul className="mt-4">{qualifications.map((q) => <Row key={q.title} {...q} />)}</ul></motion.section>
      <motion.section {...fade} className="mt-12 grid gap-8 md:grid-cols-3" aria-labelledby="sk">
        <h2 id="sk" className="display text-4xl md:col-span-3">Skills</h2>
        {Object.entries(skills).map(([g, items]) => (
          <div key={g}><h3 className="meta">{g}</h3><ul className="mt-2">{items.map((s) => <li key={s}>{s}</li>)}</ul></div>
        ))}
      </motion.section>
      <motion.section {...fade} className="mt-12" aria-labelledby="lang"><h2 id="lang" className="display text-4xl">Languages</h2>
        <ul className="mt-4">{languages.map((l) => <li key={l.name}>{l.name}: {l.level}</li>)}</ul></motion.section>
      <motion.section {...fade} className="mt-16 bg-sage/60 p-8" aria-labelledby="cv">
        <h2 id="cv" className="display text-4xl">Curriculum vitae</h2>
        {site.approvedCvUrl
          ? <a className="btn btn-solid mt-4" href={site.approvedCvUrl} download>Download CV (PDF)</a>
          : <><p className="mt-2 prose-w">CV available on request.</p><Link to="/contact" className="btn btn-solid mt-4">Request the CV</Link></>}
      </motion.section>
    </div>
  );
}
