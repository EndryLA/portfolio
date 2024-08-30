import styled from "styled-components";
import GithubIcon from '@assets/icons/github.svg'
import LinkedInIcon from '@assets/icons/linkedin.svg'

const StyledComponent = styled.div`
    position:fixed;
    bottom:8%;
    left:4%;
    display:flex;
    flex-direction:column;
    gap:20px;
    animation:fadein2 4s ease-in 1;


    >a img {
        width:32px;
        height:32px;
        filter: invert(87%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(84%) contrast(84%);    
        cursor:pointer;
    }

    > a img:hover {
        filter: invert(79%) sepia(95%) saturate(619%) hue-rotate(340deg) brightness(97%) contrast(104%);
        
    }

    @media (max-width:768px) {
        display:none;
    }

`
    

export function Socials() {
    return (
    <>
        <StyledComponent>
            <a href='https://github.com/endryLA' target='_blank'> <img src={GithubIcon} alt="Lien Github d'Endry"/> </a>
            <a href='https://www.linkedin.com/in/endry-lundy-167440193/' target='_blank'> <img src={LinkedInIcon} alt="Lien LinkedIn d'Endry"/> </a>
        </StyledComponent>    
    </>
    )
}