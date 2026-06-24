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
    justify-content:center;
    gap:64px;
    padding:80px 20px;
    box-sizing:border-box;

    >h2 {
        color:var(--primary);
        letter-spacing:.15rem;
        font-size:36px;
        font-family:'Bebas Neue',sans-serif;
        text-align:center;
        margin:0;
    }

    .timeline {
        position:relative;
        display:flex;
        flex-direction:column;
        gap:28px;
        width:100%;
        max-width:600px;
        padding-left:40px;
        box-sizing:border-box;
    }

    /* one continuous spine */
    .timeline::before {
        content:'';
        position:absolute;
        left:6px;
        top:10px;
        bottom:10px;
        width:2px;
        background:linear-gradient(
            to bottom,
            transparent,
            rgba(252,214,18,0.45) 12%,
            rgba(252,214,18,0.45) 88%,
            transparent
        );
    }

    @media screen and (max-width:650px) {
        gap:48px;
        .timeline {
            padding-left:34px;
        }
    }
`

export default function ProfessionalExperiences() {
    return(
        <StyledSection id='experience'>
            <h2>Expériences Professionelles</h2>

            <div className='timeline'>
                <ProfessionalExperience
                    period='École Studi — Février 2022 / Présent'
                    title='Graduate Développeur Web Full Stack'
                    description="Formation diplômante au développement web full stack : conception d'applications front-end et back-end."
                />
                <ProfessionalExperience
                    period='Agapé Company — Juillet 2024 / Présent'
                    title="Développeur Web Front End"
                    description="Création d'un site web pour l'Agapé Company pour leur spectacle Cendrillon Wesh!"
                />
                <ProfessionalExperience
                    period='Dev Entrepreneurs Formation — Juin 2024 / Août 2024'
                    title="Développeur Angular / UX-UI Designer"
                    description="Design et développement du site pour Dev Entrepreneurs Formation."
                />
            </div>
        </StyledSection>
    )
}
