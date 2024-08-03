import styled from 'styled-components'

const StyledSection = styled.section`

    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    max-width:1000px;
    width:100vw;
    min-height:100vh;
    margin:0 auto;
    color:#B3B3B3;
    font-family:'DM Sans',sans-serif;
    
    >h2 {
        color:var(--primary);
        letter-spacing:.15rem;
        font-size:36px;
        font-family:'Bebas Neue',sans-serif;
    }

    .content {
        gap:85px;
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

    <StyledSection>
        <h2>About me</h2>
        <div className='content'>

        <img src={'https://placehold.co/400x400'}/>
        <div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </h3>
        <p>
            Velit voluptatibus officiis magnam ut iste, libero dolor <span className='colored'>consectetur</span> minima vel quam fugiat magni ullam ex id, voluptas fuga cumque odit doloribus quis natus nam corporis voluptate.
        </p>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor  ut labore <span className='colored'>incididunt</span> et dolore magna aliqua.
        </p>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing.
        </p>
        </div>

        </div>
    </StyledSection>   

    )
}