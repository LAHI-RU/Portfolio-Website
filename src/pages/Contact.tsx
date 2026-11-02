import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import { site } from "../data/site";
import { AvailabilityLine, Mask, Reveal, SocialLinks } from "../components/shared";

export default function Contact() {
  usePageTitle("Contact");
  const [copied, setCopied] = useState<"idle" | "yes" | "no">("idle");
  const [sent, setSent] = useState(false);

  async function copy() {
    try { await navigator.clipboard.writeText(site.email); setCopied("yes"); } catch { setCopied("no"); }
    setTimeout(() => setCopied("idle"), 2500);
  }
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `${d.get("message")}\n\nFrom: ${d.get("name")} (${d.get("email")})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(String(d.get("subject") || "Hello from your portfolio"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  const field = "mt-1 w-full border border-ink/30 bg-white px-3 py-2.5 rounded";
  return (
    <div className="wrap grid gap-14 pt-32 pb-24 lg:grid-cols-2">
      <div>
        <h1 className="display t-page"><Mask>Have a story, idea, or opportunity? Let's talk.</Mask></h1>
        <AvailabilityLine className="mt-6" />
        <p className="mt-8"><a className="link-u text-lg sm:text-xl break-all" href={`mailto:${site.email}`}>{site.email}</a></p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button className="btn btn-line" onClick={copy}><AnimatePresence mode="wait" initial={false}><motion.span key={copied === "yes" ? "y" : "n"} className="inline-flex" initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.4, opacity: 0 }} transition={{ duration: 0.15 }}>{copied === "yes" ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}</motion.span></AnimatePresence> Copy email</button>
          <SocialLinks />
        </div>
        <p role="status" className="meta mt-3 min-h-5">{copied === "yes" ? "Email address copied." : copied === "no" ? "Couldn't copy. Please select the address above." : ""}</p>
        <p className="meta mt-4">{site.location}</p>
        <a className="link-u text-sm inline-block mt-3" href={site.approvedCvUrl ?? `mailto:${site.email}?subject=CV%20request`}
          {...(site.approvedCvUrl ? { download: true } : {})}>{site.approvedCvUrl ? "Download CV" : "Request a CV by email"}</a>
      </div>
      <form onSubmit={submit} className="space-y-4" aria-describedby="note">
        <p id="note" className="meta">Sending opens your email app with this message ready to send. Nothing is sent from this page.</p>
        <Reveal delay={0.00}><label className="block">Your name<input name="name" required autoComplete="name" className={field} /></label></Reveal>
        <Reveal delay={0.08}><label className="block">Your email<input name="email" type="email" required autoComplete="email" className={field} /></label></Reveal>
        <Reveal delay={0.16}><label className="block">Subject<input name="subject" className={field} /></label></Reveal>
        <Reveal delay={0.24}><label className="block">Message<textarea name="message" required rows={6} className={field} /></label></Reveal>
        <Reveal delay={0.32}><motion.button className="btn btn-solid" type="submit" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>Open in email app</motion.button></Reveal>
        <p role="status" className="meta">{sent ? "If your email app didn't open, write to the address on the left instead." : ""}</p>
      </form>
    </div>
  );
}
