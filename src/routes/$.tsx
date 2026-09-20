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

export const Route = createFileRoute("/$")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />
      <ScrollMotion />
      <main>
        {/* Above-the-fold: immediate hydration */}
        <Home />

        <Hydrate when={visible()}>
          <AboutMe />
        </Hydrate>

        <Hydrate when={visible()}>
          <Experience />
        </Hydrate>

        <Hydrate when={visible()}>
          <Skills />
        </Hydrate>

        <Hydrate when={visible()}>
          <Projects />
        </Hydrate>

        <Hydrate when={visible()} prefetch={idle()}>
          <Contact />
        </Hydrate>
      </main>
      <Footer />
    </>
  );
}
