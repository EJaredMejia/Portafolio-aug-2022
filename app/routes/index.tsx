import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import ScrollMotion from "@/components/scroll-motion";
import Skills from "@/components/skills";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />
      <ScrollMotion />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
