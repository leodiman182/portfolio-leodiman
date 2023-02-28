import { useContext, useEffect } from "react";
import { PageContext } from "../context/PageContext/Context";


import PortfolioSection from "./InnerSections/PortfolioSection";
import ResumeSection from "./InnerSections/ResumeSection";
import AboutSection from "./InnerSections/AboutSection";
import ContactSection from "./InnerSections/ContactSection";
import HomeSection from "./InnerSections/HomeSection";

const SelectedSection = () => {
  const { page } = useContext(PageContext);

  useEffect(() => {
    console.log(page);
    
  }, [page])

  return (
    <section className="px-[20px]">
      {
        page === 'portfolio'
        ? (
          <PortfolioSection />
        ) :
        page === 'resume'
        ? (
          <ResumeSection />
        ) :
        page === 'about'
        ? (
          <AboutSection />
        ) :
        page === 'contact'
        ? (        
          <ContactSection />
        ) : (
          <HomeSection />
        )
      }
    </section>
  )
}

export default SelectedSection;