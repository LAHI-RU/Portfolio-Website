import { Link } from "react-router";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <section className="wrap grid min-h-screen content-center py-32">
      <p className="meta">Error 404</p>
      <h1 className="display t-hero mt-3">This page isn't here.</h1>
      <p className="mt-4 prose-w text-slate">The link may be out of date. Head back to the homepage or browse the work.</p>
      <div className="mt-8 flex gap-3"><Link to="/" className="btn btn-solid">Go home</Link><Link to="/work" className="btn btn-line">View work</Link></div>
    </section>
  );
}
