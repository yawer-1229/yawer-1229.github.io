import { Header } from './components/Header';
import { About } from './components/About'; 
import { Education } from './components/Education'; 
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates'; // <-- Import new component
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <About /> 
        <Education />
        <Skills />
        <Projects />
        <Certificates /> {/* <-- Placed below Projects! */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;