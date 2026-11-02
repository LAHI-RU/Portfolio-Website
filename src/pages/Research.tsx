import { Link } from "react-router";
import { usePageTitle } from "../hooks/usePageTitle";
import { projects } from "../data/projects";
import { ContactCTA, Img, Mask } from "../components/shared";

const r = projects[3];

export default function Research() {
  usePageTitle("Research");
  return (
    <>
      <section className="wrap pt-32">
        <h1 className="display t-page"><Mask>Research</Mask></h1>
        <p className="mt-4 prose-w text-slate">Academic context: BA (Hons) in Communication Studies, Trincomalee Campus, Eastern University, Sri Lanka.</p>
      </section>
      <section className="wrap section grid items-start gap-10 lg:grid-cols-2">
        <Img asset={r.image} className="aspect-[3/2] w-full" />
        <div>
          <p className="meta">{r.categoryLabel}, {r.year}</p>
          <h2 className="display t-section mt-2">{r.title}</h2>
          <p className="mt-5 prose-w">{r.summary}</p>
          <p className="mt-4 prose-w text-slate">Methods, findings and supporting documents will be added once approved for public sharing.</p>
          <Link to={r.path} className="btn btn-solid mt-8">Read the case study</Link>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
