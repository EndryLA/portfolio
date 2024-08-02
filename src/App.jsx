import './styles.css'
import { HeroSection } from './sections/HeroSection';
import { Header } from './components/Header';
import { Socials } from './components/Socials';
import {AboutMe} from './sections/AboutMe.jsx'
import { ProfessionalExperiences } from './sections/ProfessionalExperiences.jsx';
import { Spinner } from './components/Spinner.jsx';

function App() {
  return (

    <div className='construction-site'>
      <h1>Site en construction</h1>
      <Spinner />
    </div>
    
  )
}

export default App;