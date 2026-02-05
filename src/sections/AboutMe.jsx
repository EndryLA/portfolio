import styled from 'styled-components'
import profile from '@assets/images/profile.png'

const StyledSection = styled.section`

    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    max-width:1000px;
    width:100vw;
    min-height:120svh;
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

    .content img {
        width:400px;
        height:400px;
        object-fit:cover;
        border-radius:50%;
        flex-shrink:0;
    }

    .content > div {
        margin:auto;
        display:flex;
        flex-direction:column;
        max-width:550px;
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
            width:300px;
            height:300px;
        }
    }

    @media (max-width:440px) {
        .content img {
            width:90vw;
            height:90vw;
        }
    }
`

export function AboutMe() {
    return(

    <StyledSection id='about-me'>
        <h2>About me</h2>
        <div className='content'>

        <img src={profile} alt='photo de Endry Lundy'/>
        <div>
        <h3>Développeur full-stack spécialisé en Java & Angular </h3>
        <p>
            Au niveau du front, je me spécialise également dans <span className='colored'>le design</span>, je développe des interfaces performantes avec des parcours utilisateurs optimisés pour vos besoins.
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