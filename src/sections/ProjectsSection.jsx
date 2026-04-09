import styled from "styled-components";

import Project from "../components/Project"

import ArcadiaZoo from '@assets/projects/arcadia-zoo.png'
import ZxwlPhotography from '@assets/projects/zxwl-photography.webp'
import WeatherApp from '@assets/projects/weather-app.png'
import CendrillonWesh from '@assets/projects/cendrillon-wesh.webp'
import GaragePoirot from '@assets/projects/garage-poirot.webp'
import RimberioCoffe from '@assets/projects/rimberio.png'
import GithubReadmeGenerator from '@assets/projects/github-readme-generator.png'


const Section = styled.section`
    height:100%;
    max-width:1200px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

    >h2 {
    text-align:center;
    font-size:32px;
    }
    
`
const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    gap:20px;
    justify-content:center;

    
`
const arcadiaStack = ['React','MongoDB','ExpressJs','NodeJs']
const zxwlStack = ['HTML','CSS','Javascript','BEM Convention']
const weatherAppStack = ['HTML','CSS','Javascript','Fetch API']
const cendrillonWeshStack = ['Angular','NodeJs', 'Typescript','SCSS']
const garagePoirotStack = ['Angular','Typescript','MySQL','NodeJs','ExpressJs']
const rimberioStack = ['Figma','Webflow']
const readMeGeneratorStack = ['Angular', 'i18n','Design System']

export default function ProjectsSection() {
    return (
        <Section id='projects'>
            <h2>Projects</h2>
            <Container>

                <Project
                    href='https://github-generator-nine.vercel.app/'
                    stackArray={readMeGeneratorStack}
                    src={GithubReadmeGenerator}
                    title="Github ReadMe Generator"
                    description='En Ligne'

                />

                <Project
                href='https://arcadia-ecf.vercel.app/'
                stackArray={arcadiaStack}
                src={ArcadiaZoo}
                title = 'Zoo Arcadia'
                description='En Ligne '
                />

                <Project 
                href='https://garagepoirot.vercel.app/'
                stackArray={garagePoirotStack}
                src={GaragePoirot}
                title="Garage V. Poirot"
                description='En Ligne'
                />

                <Project 
                href='https://cendrillonwesh.fr/'
                stackArray={cendrillonWeshStack}
                src={CendrillonWesh}
                title = {'Cendrillon Wesh!'}
                description='En Ligne'
                />

                <Project
                href='https://zxwl-photography.vercel.app/'
                stackArray={zxwlStack}
                src={ZxwlPhotography}
                title = 'Zxwl Photography'
                description='En Ligne' 
                />

                <Project
                href='https://weather-app-nine-neon-48.vercel.app/'
                stackArray={weatherAppStack}
                src={WeatherApp}
                title = 'Weather App'
                description='En Ligne'
                />

                <Project
                href=''
                stackArray={rimberioStack}
                src={RimberioCoffe}
                title = 'Rimberio Coffee'
                description='Bientôt Disponible !' 
                />

                

            </Container>
        </Section>
    )

}