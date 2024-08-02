import styled from 'styled-components'

const StyledSection = styled.section`

    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    max-width:1000px;
    width:100vw;
    height:100vh;
    margin:0 auto;
    color:#B3B3B3;
    font-family:'DM Sans',sans-serif;
    
    >h1 {
        color:var(--primary);
        letter-spacing:.15rem;
        font-size:42px;
        font-family:'Bebas Neue',sans-serif;
    }

    .content {
        gap:85px;
        display:flex;
    }

    .content > div {
        margin:auto;
    }

`

export function AboutMe() {
    return(

    <StyledSection>
        <h1>About me</h1>
        <div className='content'>

        <img src={'https://placehold.co/400x400'}/>
        <div>
        <p>
            Velit voluptatibus officiis magnam ut iste, libero dolor consectetur minima vel quam fugiat magni ullam ex id, voluptas fuga cumque odit doloribus quis natus nam corporis voluptate.
        </p>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing.
        </p>
        </div>

        </div>
    </StyledSection>   

    )
}