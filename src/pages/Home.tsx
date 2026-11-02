import { Link } from "react-router";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Clapperboard, PenLine, Search } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import { assets } from "../data/assets";
import { experience, education } from "../data/profile";
import { site } from "../data/site";
import { projects } from "../data/projects";
import { AvailabilityLine, ContactCTA, Img, MLink, ProjectCard, Reveal, ease } from "../components/shared";
import { Recognition } from "../components/Recognition";

const expertise = [
  { n: "01", Icon: Clapperboard, t: "Visual Storytelling & Media", d: "Film and documentary projects on child protection and menstrual hygiene awareness, made with tools including Adobe Premiere Pro and After Effects." },
  { n: "02", Icon: PenLine, t: "Communication & Creative Content", d: "A Communication Studies degree in progress, a traineeship at Sirasa TV and an internship with SOS Children's Villages Sri Lanka." },
  { n: "03", Icon: Search, t: "Research & Critical Thinking", d: "An undergraduate dissertation on the ethical standards of television advertisements in Sri Lanka." },
];
const journey = [
  { role: experience[0].role, when: experience[0].period, line: experience[0].org },
  { role: experience[1].role, when: experience[1].period, line: `${experience[1].org}, ${experience[1].place}` },
  { role: education[0].title, when: education[0].period, line: education[0].org },
];

const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const fadeUp: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };
const lineUp: Variants = { hidden: { y: "105%" }, show: { y: 0, transition: { duration: 0.85, ease } } };
const arch: Variants = { hidden: { clipPath: "inset(100% 0% 0% 0%)" }, show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.1, ease, delay: 0.15 } } };
const lineBox = "block overflow-hidden pb-[0.12em] -mb-[0.12em]";

function Hero() {
  const reduce = useReducedMotion();
  return (
    <motion.section variants={stagger} initial={reduce ? false : "hidden"} animate="show"
      className="wrap relative grid items-center gap-10 pt-28 pb-16 lg:min-h-[100svh] lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:pt-24 lg:pb-12">
      <motion.div variants={stagger}>
        <motion.p variants={fadeUp} className="eyebrow">Communication / Media / Storytelling</motion.p>
        <h1 className="display t-hero mt-5">
          <span className={lineBox}><motion.span variants={lineUp} className="block">Stories worth telling.</motion.span></span>
          <span className={lineBox}><motion.em variants={lineUp} className="block text-teal">Messages worth remembering.</motion.em></span>
        </h1>
        <motion.p variants={fadeUp} className="display mt-8 text-3xl">Kanchana Karunanayaka</motion.p>
        <motion.p variants={fadeUp} className="mt-3 prose-w text-slate">Exploring meaningful human stories through visual storytelling, creative communication, and research.</motion.p>
        <motion.div variants={fadeUp}><AvailabilityLine className="mt-5" /></motion.div>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          <MLink to="/work" className="btn btn-solid" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>Explore my work</MLink>
          <MLink to="/about" className="btn btn-line" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>About me</MLink>
        </motion.div>
      </motion.div>
      <motion.div variants={arch} className="mx-auto w-full max-w-sm lg:mx-0 lg:w-auto lg:max-w-none">
        <Img asset={assets.portrait} eager className="aspect-[4/5] w-full rounded-t-[999px] lg:h-[min(72svh,42rem)] lg:w-[calc(min(72svh,42rem)*0.8)]" />
        <p className="meta mt-3 lg:w-0 lg:min-w-full">{site.location} · Communication & visual storytelling</p>
      </motion.div>
      <motion.div variants={fadeUp} aria-hidden className="scroll-cue meta absolute bottom-6 left-0 items-center gap-3">
        <span className="relative h-10 w-px overflow-hidden bg-ink/20">
          <motion.span className="absolute inset-x-0 top-0 h-4 bg-teal" animate={{ y: [-16, 40] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
        </span>
        Scroll
      </motion.div>
    </motion.section>
  );
}

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />

      <section className="section" aria-labelledby="featured">
        <div className="wrap">
          <Reveal><h2 id="featured" className="display t-section">Selected Stories & Projects</h2>
            <p className="mt-3 text-slate prose-w">An exploration of ideas, people, communication, and visual storytelling.</p></Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-12">
            <Reveal className="md:col-span-7"><ProjectCard p={projects[0]} aspect="aspect-[4/3]" /></Reveal>
            <Reveal delay={0.12} className="md:col-span-5 md:mt-24"><ProjectCard p={projects[1]} aspect="aspect-[3/4]" /></Reveal>
            <Reveal className="md:col-span-5"><ProjectCard p={projects[2]} aspect="aspect-[1/1]" /></Reveal>
            <Reveal delay={0.12} className="md:col-span-7 md:mt-16"><ProjectCard p={projects[3]} aspect="aspect-[3/2]" /></Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-paper border-y border-line" aria-labelledby="beyond">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5"><h2 id="beyond" className="display t-section">Beyond the Frame</h2></Reveal>
          <Reveal delay={0.12} className="md:col-span-7">
            <p className="prose-w">Kanchana is completing a degree in Communication Studies in Sri Lanka and has already spent time inside a television production environment and a non-profit communication team.</p>
            <p className="prose-w mt-4">Her work so far centres on films, a documentary and research about social issues, shaped by a belief that clear communication starts with listening.</p>
            <MLink to="/about" className="btn btn-line mt-8" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>Discover more</MLink>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="expertise">
        <div className="wrap">
          <Reveal><h2 id="expertise" className="display t-section">Areas of focus</h2></Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {expertise.map(({ n, Icon, t, d }, i) => (
              <Reveal key={n} delay={i * 0.12} className="relative pt-6">
                <motion.span aria-hidden className="absolute left-0 top-0 h-px w-full origin-left bg-ink/30" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.12, ease }} />
                <div className="flex items-center justify-between"><span className="meta">{n}</span>
                  <motion.span whileHover={{ rotate: -8, scale: 1.12 }} transition={{ type: "spring", stiffness: 300, damping: 14 }}><Icon aria-hidden className="text-teal" strokeWidth={1.5} /></motion.span></div>
                <h3 className="display mt-6 text-3xl">{t}</h3>
                <p className="mt-3 text-slate">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0" aria-labelledby="journey">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4"><h2 id="journey" className="display t-section">Professional journey</h2></Reveal>
          <div className="relative pl-8 md:col-span-8">
            <motion.span aria-hidden className="absolute bottom-2 left-0 top-2 w-px origin-top bg-teal/50" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1.2, ease }} />
            <ol className="space-y-10">
              {journey.map((j, i) => (
                <motion.li key={j.role} className="relative" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: i * 0.15, ease }}>
                  <motion.span aria-hidden className="absolute -left-[2.4rem] top-2 size-3 rounded-full bg-teal" initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                    viewport={{ once: true }} transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.2 + i * 0.15 }} />
                  <p className="meta">{j.when}</p>
                  <h3 className="display text-3xl">{j.role}</h3>
                  <p className="text-slate">{j.line}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
        <div className="wrap mt-8"><Link to="/about" className="link-u">More about my background</Link></div>
      </section>

      <Recognition />

      <ContactCTA />
    </>
  );
}
