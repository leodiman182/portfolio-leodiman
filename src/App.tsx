import Header from './sections/Header';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="max-w-[1024px] mx-auto">
      <Header />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

export default App;
