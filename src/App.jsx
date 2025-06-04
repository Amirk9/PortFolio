import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-[#0f172a] text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
       <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
