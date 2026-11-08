import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import ScrollMotion from "@/components/scroll-motion";
import { Skills } from "@/features/skills/components/skills.component";

import { createFileRoute } from "@tanstack/react-router";
import { Hydrate } from "@tanstack/react-start";
import { idle, visible } from "@tanstack/react-start/hydration";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  // A sheet pins once its bottom reaches the viewport, so sheets taller than the screen still scroll fully
  useEffect(() => {
    const sheets = [...document.querySelectorAll<HTMLElement>(".sheet")];
    const fit = () =>
      sheets.forEach((sheet) =>
        sheet.style.setProperty(
          "--sheet-top",
          `${Math.min(0, window.innerHeight - sheet.offsetHeight)}px`,
        ),
      );
    const observer = new ResizeObserver(fit);
    sheets.forEach((sheet) => observer.observe(sheet));
    window.addEventListener("resize", fit);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <>
      <Navbar />
      <ScrollMotion />
      <main>
        {/* Sheets hydrate immediately: a Hydrate wrapper div would stop them pinning past it */}
        <Home />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />

        {/* Last sheet never needs to pin, so the form libraries can still load lazily */}
        <Hydrate when={visible()} prefetch={idle()}>
          <Contact />
        </Hydrate>
      </main>
      <Footer />
    </>
  );
}
