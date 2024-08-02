import styled from "styled-components";
import GithubIcon from '@assets/icons/github.svg'
import TwitterIcon from '@assets/icons/twitter.svg'
import LinkedInIcon from '@assets/icons/linkedin.svg'

const StyledComponent = styled.div`
    position:fixed;
    bottom:8%;
    left:4%;
    display:flex;
    flex-direction:column;
    gap:20px;

    &::after {
        height:40px;
        width:2px;
    }

    >img {
        width:32px;
        height:32px;
        filter: invert(87%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(84%) contrast(84%);
        cursor:pointer;
    }

    > img:hover {
        filter: invert(79%) sepia(95%) saturate(619%) hue-rotate(340deg) brightness(97%) contrast(104%);
    }

`
    

export function Socials() {
    return (
    <>
        <StyledComponent>
            <img src={GithubIcon}/>
            <img src={TwitterIcon}/>
            <img src={LinkedInIcon}/>
        </StyledComponent>    
    </>
    )
}