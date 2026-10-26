import './styles.css'
import { MotionConfig } from 'framer-motion'
import { Header } from './components/Header'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import KpiSection from './sections/KpiSection'
import AboutSection from './sections/AboutSection'
import StackSection from './sections/StackSection'
import ProjectsSection from './sections/ProjectsSection'
import ProfessionalExperiences from './sections/ProfessionalExperiences'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    // honours the visitor's "reduce motion" system setting
    <MotionConfig reducedMotion='user'>
      <Header/>
      <main>
        <HeroSection/>
        <KpiSection/>
        <AboutSection/>
        <StackSection/>
        <ProjectsSection/>
        <ProfessionalExperiences/>
        <ContactSection/>
      </main>
      <Footer/>
    </MotionConfig>
  )
}

export default App;
