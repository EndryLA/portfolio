import styled from 'styled-components'
import avatar from '@assets/icons/avatar.svg'

const StyledSection = styled.section`

    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    max-width:1000px;
    width:100vw;
    min-height:100svh;
    margin:0 auto 100px auto;
    color:#B3B3B3;
    font-family:'DM Sans',sans-serif;
    
    >h2 {
        color:var(--primary);
        letter-spacing:.15rem;
        font-size:36px;
        font-family:'Bebas Neue',sans-serif;
    }

    .content {
        gap:40px;
        display:flex;
    }

    .content > div {
        margin:auto;
        display:flex;
        flex-direction:column;
    }

    >div h3 {
        color:white;
        font-size:22px;
        
    }

    .colored {
        color:var(--primary);
        font-weight:500;
    }

    @media (max-width:1000px) {
        .content {
            width:9Ovw;
            max-width:600px;
            margin:auto;
            flex-direction:column;
            align-items:center;
            text-align:center;
        }

        .content {
            margin:0 auto;
            max-width:90%
        }
        .content img {
            max-width:400px;
        }
    }

    @media (max-width:440px) {
        .content img {
            max-width:90vw;
        }
    }
`

export function AboutMe() {
    return(

    <StyledSection id='about-me'>
        <h2>About me</h2>
        <div className='content'>

        <img src={avatar} alt='photo de Endry Lundy'/>
        <div>
        <h3>Je suis un Développeur Web spécialisé en Angular 18 et Nodejs </h3>
        <p>
            Plus qu'un de développeur, j'ai une passion pour <span className='colored'>l'esthétique</span>, j'aime créer des designs qui allient fonctionnalité et beauté.
        </p>

        <p>
            La satisfaction du client est ma plus grande priorité, je m'engage à fournir un travail soigné, de qualité et qui <span className='colored'>satisfait</span> parfaitement à votre besoin
        </p>

        <p>
            Plus que coder pour coder je vois le code comme une <span className='colored' >aventure</span>.  Chaque projet est une exploration où je découvre de nouvelles idées, surmonte des défis, et trouve des solutions créatives. 
        </p>
        </div>

        </div>
    </StyledSection>   

    )
}