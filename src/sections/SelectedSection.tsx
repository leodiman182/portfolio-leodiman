import { useContext } from 'react';
import { PageContext } from '../context/PageContext/Context';

import AboutSection from "./AboutSection";
import HomeSection from "./HomeSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";


const SelectedSection = () => {
  const { page } = useContext(PageContext);

  console.log(page);
  

  return (
    <section className="px-[20px]">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </section>
  )
}

export default SelectedSection;