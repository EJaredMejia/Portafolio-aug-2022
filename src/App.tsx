import "./App.css";
import AboutMe from "./Components/about-me";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import Home from "./Components/home";
import Navbar from "./Components/navbar";
import Projects from "./Components/projects";
import ScrollMotion from "./Components/scroll-motion";
import Skills from "./Components/skills";

function App() {
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

export default App;
