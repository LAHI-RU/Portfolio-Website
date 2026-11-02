import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { MotionConfig } from "motion/react";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Work = lazy(() => import("./pages/Work"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const Research = lazy(() => import("./pages/Research"));
const About = lazy(() => import("./pages/About"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="work/:slug" element={<ProjectPage />} />
            <Route path="research" element={<Research />} />
            <Route path="research/:slug" element={<ProjectPage />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </MotionConfig>
  );
}
