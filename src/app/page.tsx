import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import SkillsSection from './components/SkillsSection';
import PortofolioSection from './components/PortofolioSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import PortoDetailsSection from './components/PortoDetailsSection';

export default function Home() {
  
  return (
    <div className="font-mono">
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <PortofolioSection />
      <ExperienceSection />
      <TestimonialSection />
      <ContactSection />
      <PortoDetailsSection />
    </div>
  );
}
