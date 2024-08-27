import styled from "styled-components";

import Project from "../components/Project"

import ArcadiaZoo from '@assets/projects/arcadia-zoo.png'
import ZxwlPhotography from '@assets/projects/zxwl-photography.png'
import WeatherApp from '@assets/projects/weather-app.png'
import CendrillonWesh from '@assets/projects/cendrillon-wesh.webp'
import GaragePoirot from '@assets/projects/garage-poirot.webp'


const Section = styled.section`
    min-height:100vh;
    max-width:1000px;
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
const cendrillonWeshStack = ['angular 18']
const garagePoirotStack = ['angular 18','mysql','nodejs','express']

console.log(arcadiaStack)

export default function ProjectsSection() {
    return (
        <Section>
            <h2>Projets</h2>
            <Container>
                <Project
                href='https://arcadia-ecf.vercel.app/'
                stackArray={arcadiaStack}
                src={ArcadiaZoo}
                title = 'Zoo Arcadia'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                />

                <Project 
                href=''
                stackArray={garagePoirotStack}
                src={GaragePoirot}
                title="Garage V. Poirot"
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                />

                <Project 
                href=''
                stackArray={cendrillonWeshStack}
                src={CendrillonWesh}
                title = {'Cendrillon Wesh!'}
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                />

                <Project
                href='https://zxwl.vercel.app/'
                stackArray={zxwlStack}
                src={ZxwlPhotography}
                title = 'Zxwl Photography'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                />

                <Project
                href='https://weather-app-nine-neon-48.vercel.app/'
                stackArray={weatherAppStack}
                src={WeatherApp}
                title = 'Weather App'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                />

                

            </Container>
        </Section>
    )

}