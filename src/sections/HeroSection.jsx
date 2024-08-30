import { ButtonMedium } from "../components/buttons/ButtonMedium";
import styled from "styled-components";

const StyledSection = styled.section`
    min-height:100svh;
    box-sizing:border-box;
    margin:0;
    color:white;
    color:var(--primary);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:32px;

    @media (max-width:768px) {
        width:100vw;
    }
`

const StyledTitle = styled.h1`
    position:relative;
    font-size:80px;
    text-transform:uppercase;
    margin:0;
    line-height:60px;
    letter-spacing:.15rem;
    font-family:'Bebas Neue',sans-serif;
    animation:fadein 2.25s ease-in 1;

    @media (max-width:768px) {
        font-size:60px;
    }

`

const StyledParagraph = styled.p`
    font-family:'ocr';
    font-size:20px;
    margin:0;
    color:white;
    animation:fadein2 3s ease-in 1;


    @media (max-width:768px) {
        font-size:14px;
    }

    

`

export function HeroSection() {
    return (
        <>
        <StyledSection>
            <StyledTitle>Endry LUNDY</StyledTitle>
            <StyledParagraph>
            Développeur Web + UX/UI Designer
            </StyledParagraph>
            <div className='buttons'>
                 <ButtonMedium content={'voir projets'}/> 
                 <ButtonMedium content={'contactez-moi'}/> 
            </div>
        </StyledSection>
        </>
    )
}