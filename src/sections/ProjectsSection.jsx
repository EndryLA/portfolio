import styled from "styled-components";

import Project from "../components/Project"

import ArcadiaZoo from '@assets/projects/arcadia-zoo.png'
import ZxwlPhotography from '@assets/projects/zxwl-photography.png'
import WeatherApp from '@assets/projects/weather-app.png'
import CendrillonWesh from '@assets/projects/cendrillon-wesh.webp'
import GaragePoirot from '@assets/projects/garage-poirot.webp'


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
const arcadiaStack = ['react','mongodb','express','nodejs']
const zxwlStack = ['html','css','javascript']
const weatherAppStack = ['html','css','javascript','Fetch API']
const cendrillonWeshStack = ['angular 18','node js', 'typescript']
const garagePoirotStack = ['angular 18','mysql','nodejs','express']


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
                href='https://cendrillonwesh.vercel.app/'
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

                

            </Container>
        </Section>
    )

}