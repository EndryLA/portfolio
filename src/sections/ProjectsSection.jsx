import styled from "styled-components";

import Project from "../components/Project"

import ArcadiaZoo from '@assets/projects/arcadia-zoo.png'
import ZxwlPhotography from '@assets/projects/zxwl-photography.png'
import WeatherApp from '@assets/projects/weather-app.png'
import CendrillonWesh from '@assets/projects/cendrillon-wesh.webp'
import GaragePoirot from '@assets/projects/garage-poirot.webp'
import RimberioCoffe from '@assets/projects/rimberio.png'


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
const arcadiaStack = ['react 18','mongodb','express','nodejs']
const zxwlStack = ['html','css','javascript']
const weatherAppStack = ['html','css','javascript','Fetch API']
const cendrillonWeshStack = ['angular 18','node js', 'typescript','sass']
const garagePoirotStack = ['angular 18','typescript','mysql','nodejs','express']
const rimberioStack = ['figma','webflow']


export default function ProjectsSection() {
    return (
        <Section id='projects'>
            <h2>Projets</h2>
            <Container>
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
                href='https://zxwl.vercel.app/'
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