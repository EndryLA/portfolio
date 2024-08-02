import { ButtonMedium } from "../components/buttons/ButtonMedium";
import styled from "styled-components";

const StyledSection = styled.section`
    height:100vh;
    max-width:100vw;
    color:white;
    color:var(--primary);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:32px;
`

const StyledTtile = styled.h1`
    font-size:80px;
    text-transform:uppercase;
    margin:0;
    line-height:60px;
    letter-spacing:.15rem;
    font-family:'Bebas Neue',sans-serif;
`

const StyledParagraph = styled.p`
    font-family:'ocr';
    font-size:20px;
    margin:0;
    color:white;

`

export function HeroSection() {
    return (
        <>
        <StyledSection>
            <StyledTtile>Endry LUNDY</StyledTtile>
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