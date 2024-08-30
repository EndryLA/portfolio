import './styles.css'
import { HeroSection } from './sections/HeroSection';
import { Header } from './components/Header';
import { Socials } from './components/Socials';
import {AboutMe} from './sections/AboutMe.jsx'
import TechStackSection from './sections/TechStackSection.jsx';
import Footer from './components/Footer.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import ContactSection from './sections/ContactSection.jsx';




function App() {
  return (
    <>
    {/* <div className='construction-site'>
      <h1>Site en construction</h1>
      <Spinner />
    </div> */}

    <Header/>
    <HeroSection/>
    <AboutMe/>
    <Socials/>
    <TechStackSection/>
    <ProjectsSection/>
    <ContactSection/>
    <Footer/>
    </>

    
  )
}

export default App;