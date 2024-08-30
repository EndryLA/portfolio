import styled from "styled-components";
import { ProfessionalExperience } from "../components/ProfessionalExperience";

const StyledSection = styled.section`
    display:flex;
    flex-direction:column;
    width:100%;
    max-width:1000px;
    margin:0 auto 80px auto;
    min-height:100svh;
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
                period='école Studi - février 2022 / présent'
                title='Graduate Développeur Web Full Stack'
                description="Création d'un site web pour l'Agapé Company pour leur spectacle Cendrillon Wesh!"
                />
            <ProfessionalExperience
                period='Agape Company - juillet 2024 / présent'
                title="Développeur Web Front End"
                description="Création d'un site web pour l'Agapé Company pour leur spectacle Cendrillon Wesh!"
                />
            <ProfessionalExperience
                period='Dev Entrepreneurs Formation - Juin 2024 - Août 2024'
                title="Développeur Angular / UX/UI Designer"
                description="Design et Développment du site pour Dev Entrepreneurs Formation."
                />
            </div>
        </StyledSection>
    )
}