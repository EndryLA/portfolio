import styled from "styled-components";
import { ProfessionalExperience } from "../components/ProfessionalExperience";

const StyledSection = styled.section`
    display:flex;
    flex-direction:column;
    width:100vw;
    max-width:1000px;
    margin:0 auto;
    min-height:100vh;
    align-items:center;
    justify-content:space-around;

    .container {
        display:flex;
        flex-direction:column;
        align-items:flex-end;
    }

    >h2 {
         color:var(--primary);
        letter-spacing:.15rem;
        font-size:36px;
        font-family:'Bebas Neue',sans-serif;
        text-align:center;
    }

    @media screen and (max-width:650px) {
        .container {
            width:80vw;
            max-width:400px;
        }
    }

    @
`

export function ProfessionalExperiences() {
    return(
        <StyledSection>
            <h2>Expériences Professionelles</h2>

            <div className='container'>

            <ProfessionalExperience
                period='février 2022 - présent'
                title='Graduate Développeur Web Full Stack'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                />
            <ProfessionalExperience
                period='juillet 2024 - présent'
                title="Développeur Web Front-end"
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                />
            <ProfessionalExperience
                period='avril 2022 - Juin 2024'
                title="Hôte d'Accueil Polyvalent"
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                />
            </div>
        </StyledSection>
    )
}