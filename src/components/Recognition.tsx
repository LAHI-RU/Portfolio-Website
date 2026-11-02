import { ArrowUpRight, Award } from "lucide-react";
import { Link } from "react-router";
import { assets } from "../data/assets";
import { recognition } from "../data/profile";
import { Img, Reveal } from "./shared";

export function Recognition() {
  return (
    <section className="section bg-sage/60" aria-labelledby="recognition">
      <div className="wrap grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">A story, recognized</p>
          <h2 id="recognition" className="display t-section">{recognition.title}</h2>
          <p className="display mt-3 text-3xl text-teal">{recognition.award}</p>
          <p className="mt-4 prose-w">{recognition.detail}</p>
          <Link to="/work/shadowed-truth" className="inline-flex items-center gap-2 link-u mt-6">Explore the film <ArrowUpRight size={18} aria-hidden /></Link>
        </Reveal>
        <Reveal delay={0.15}>
          {assets.certificate ? <Img asset={assets.certificate} className="aspect-[4/3] w-full [&_img]:object-contain" /> : (
            <div className="recognition-card text-center px-6 py-12 sm:py-16">
              <Award className="mx-auto text-teal" size={42} strokeWidth={1.2} aria-hidden />
              <p className="eyebrow mt-6">SANROOPANA · 2025</p>
              <p className="display text-4xl sm:text-5xl mt-3">Shadowed Truth</p>
              <p className="mt-3 text-teal">Merit recognition</p>
              <p className="meta mt-6">University of Ruhuna</p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
