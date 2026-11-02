import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { site } from "../data/site";
import { BackToTop, MLink, SocialLinks, ease } from "./shared";

const nav = [["Work", "/work"], ["About", "/about"], ["Research", "/research"], ["Resume", "/resume"], ["Contact", "/contact"]] as const;
const mobileNav = [["Home", "/"], ...nav] as const;

export function Layout() {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); setOpen(false); }, [pathname]);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded">Skip to content</a>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "bg-paper/95 backdrop-blur border-b border-ink/10" : "bg-transparent"}`}>
        <div className="wrap flex h-16 items-center justify-between">
          <Link to="/" className="display whitespace-nowrap text-xl sm:text-2xl" aria-label={`${site.name}, home`}>{site.name}</Link>
          <nav aria-label="Main" className="hidden lg:flex items-center gap-8">
            {nav.map(([l, to]) => (
              <NavLink key={to} to={to} className="relative py-2 text-sm transition-colors hover:text-teal">
                {({ isActive }) => (
                  <>
                    {l}
                    {isActive && <motion.span layoutId="nav-underline" className="absolute inset-x-0 -bottom-px h-px bg-teal" transition={{ type: "spring", stiffness: 380, damping: 34 }} />}
                  </>
                )}
              </NavLink>
            ))}
            <MLink to="/contact" className="btn btn-line !min-h-10 !py-1.5" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>Let's connect</MLink>
          </nav>
          <button className="lg:hidden grid size-11 place-items-center -mr-2" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {!reduce && <motion.div aria-hidden style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-teal" />}
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile" className="fixed inset-0 z-40 bg-forest text-paper on-dark pt-24 px-6 flex flex-col gap-2 lg:hidden"
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease }}>
            {mobileNav.map(([l, to], i) => (
              <motion.div key={to} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease }}>
                <NavLink to={to} end={to === "/"} className={({ isActive }) => `display block text-5xl py-2 ${isActive ? "text-sage" : ""}`}>{l}</NavLink>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
      <motion.main id="main" tabIndex={-1} key={pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }} className="outline-none">
        <Outlet />
      </motion.main>
      <footer className="bg-paper border-t border-ink/10">
        <div className="wrap py-12 grid gap-10 md:grid-cols-3">
          <div>
            <p className="display text-3xl">{site.name}</p>
            <p className="meta mt-2 max-w-xs">{site.positioning}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 content-start">
            {nav.map(([l, to]) => <Link key={to} to={to} className="link-u text-sm">{l}</Link>)}
          </nav>
          <SocialLinks className="md:justify-end" />
        </div>
        <p className="wrap meta pb-8">© {new Date().getFullYear()} {site.name}</p>
      </footer>
      <BackToTop />
    </>
  );
}
