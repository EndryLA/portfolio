import styled from "styled-components";
import GithubIcon from '@assets/icons/github.svg'
import TwitterIcon from '@assets/icons/twitter.svg'
import LinkedInIcon from '@assets/icons/linkedin.svg'

const StyledFooter = styled.footer`
    color:white;
    font-size:12px;
    font-family:'DM Sans',sans-serif;
    margin-top:40px;

    >p {
        margin:0;
        padding:10px;
        text-align:center;

        >a {
            color:var(--primary)
        }
    }
`

const StyledComponent = styled.div`
    display:flex;
    gap:20px;
    justify-content:center;
    display:none;


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
        display:flex;
    }

`

export default function Footer() {
    return(
        <StyledFooter>
            <StyledComponent>
                <a href='https://github.com/endryLA' target='_blank'> <img src={GithubIcon} alt="Lien Github d'Endry"/> </a>
                <a href='https://www.linkedin.com/in/endry-lundy-167440193/' target='_blank'> <img src={LinkedInIcon} alt="Lien LinkedIn d'Endry"/> </a>
            </StyledComponent> 
            <p>© Endry Lundy Tous droits réservés.</p>
        </StyledFooter>
    )
}