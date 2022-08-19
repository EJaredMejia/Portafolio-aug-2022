import "./App.css";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import ScrollMotion from "./Components/ScrollMotion";
import Skills from "./Components/Skills";

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
