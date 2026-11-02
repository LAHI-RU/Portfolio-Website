import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import type { Asset } from "../data/assets";
import { site, statusLabel, type Status } from "../data/site";
import type { Project } from "../data/projects";

/** Shared easing curve: quick start, soft landing. */
export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Router link with motion props (hover lift, tap press). */
export const MLink = motion.create(Link);

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay, ease }}>
      {children}
    </motion.div>
  );
}

/** Headline text that slides up from behind a mask on load. Use inside a heading element. */
export function Mask({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
      <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.75, delay, ease }}>{children}</motion.span>
    </span>
  );
}

export function StatusTag({ status, dark }: { status: Status; dark?: boolean }) {
  if (!site.showStatusMarkers || status === "confirmed") return null;
  return <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs ${dark ? "border-sage/50 text-sage" : "border-clay text-ink"}`}>{statusLabel[status]}</span>;
}

/** Image that fades and settles into place once loaded. */
export function Img({ asset, className = "", eager }: { asset: Asset; className?: string; eager?: boolean }) {
  const ref = useRef<HTMLImageElement>(null);
  const [ok, setOk] = useState(false);
  useEffect(() => { if (ref.current?.complete) setOk(true); }, []);
  return (
    <figure className={`relative overflow-hidden bg-sage ${className}`}>
      <motion.img ref={ref} src={asset.src} alt={asset.alt} loading={eager ? "eager" : "lazy"} decoding="async"
        className="size-full object-cover" onLoad={() => setOk(true)} onError={() => setOk(true)}
        initial={false} animate={{ opacity: ok ? 1 : 0, scale: ok ? 1 : 1.06 }} transition={{ duration: 0.8, ease }} />
      {asset.isSample && site.showStatusMarkers && (
        <figcaption className="absolute left-3 top-3 rounded-full bg-forest/80 px-2.5 py-0.5 text-xs text-paper">Sample image</figcaption>
      )}
    </figure>
  );
}

export function ProjectCard({ p, aspect = "aspect-[4/3]", className = "" }: { p: Project; aspect?: string; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <Link to={p.path} className={`group block ${className}`}>
      <div className={`overflow-hidden ${aspect}`}>
        <div className="size-full transition-transform duration-500 ease-out group-hover:scale-[1.05]">
          <motion.div className="size-full" initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, ease }}>
            <Img asset={p.image} className="size-full" />
          </motion.div>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="meta">{p.categoryLabel}, {p.year}</p>
          <h3 className="display mt-1 text-3xl bg-gradient-to-r from-teal to-teal bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">{p.title}</h3>
        </div>
        <ArrowUpRight aria-hidden className="mt-2 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <p className="mt-2 text-slate prose-w line-clamp-3">{p.summary}</p>
    </Link>
  );
}

export function VideoSlot({ url, title }: { url: string | null; title: string }) {
  if (!url) {
    return (
      <div className="grid aspect-video place-items-center bg-forest text-paper on-dark p-6 text-center" role="group" aria-label={`${title} video`}>
        <div><p className="display text-3xl">Video to be added</p><p className="mt-2 text-sage text-sm">A trailer or the full film will appear here once a link is supplied.</p></div>
      </div>
    );
  }
  return <iframe className="aspect-video w-full" src={url} title={`${title} video`} loading="lazy" allowFullScreen />;
}

export function ContactCTA() {
  return (
    <section className="section bg-forest text-paper on-dark">
      <div className="wrap">
        <Reveal><h2 className="display t-page max-w-3xl">Let's create something meaningful.</h2></Reveal>
        <Reveal delay={0.1}><p className="mt-6 max-w-xl text-sage">Open to conversations and opportunities in media, communication, and creative storytelling.</p></Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-4">
          <MLink to="/contact" className="btn btn-light" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>Get in touch</MLink>
          <SocialLinks dark />
        </Reveal>
      </div>
    </section>
  );
}

export function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function SocialLinks({ dark, className = "" }: { dark?: boolean; className?: string }) {
  const cls = `grid size-11 place-items-center rounded-full border transition-colors ${
    dark ? "on-dark border-sage/60 text-paper hover:bg-paper/10" : "border-ink/30 text-ink hover:bg-ink hover:text-paper"
  }`;
  const hover = { whileHover: { y: -3 }, whileTap: { scale: 0.93 } };
  return (
    <div className={`flex gap-3 ${className}`}>
      <motion.a className={cls} href={`mailto:${site.email}`} aria-label={`Email ${site.name}`} {...hover}><Mail size={20} aria-hidden /></motion.a>
      <motion.a className={cls} href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)" {...hover}><LinkedInIcon /></motion.a>
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 400);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button type="button" aria-label="Back to top"
          className="fixed bottom-5 right-5 z-30 grid size-12 place-items-center rounded-full bg-ink text-paper shadow-lg ring-2 ring-paper transition-colors hover:bg-teal focus-visible:bg-paper focus-visible:text-ink focus-visible:ring-ink"
          initial={{ opacity: 0, y: 14, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14, scale: 0.8 }}
          whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} transition={{ duration: 0.25, ease }}
          onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}>
          <ArrowUp aria-hidden size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
