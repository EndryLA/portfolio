import styled from 'styled-components'
import html from '@assets/stack-logos/html.svg'
import css from '@assets/stack-logos/css.svg'
import javascript from '@assets/stack-logos/javascript.svg'
import react from '@assets/stack-logos/react.svg'
import angular from '@assets/stack-logos/angular.svg'
import bootstrap from '@assets/stack-logos/bootstrap.svg'
 
const StyledIconDiv = styled.div`
    color:white;
    font-family:'ocr',sans-serif;
    font-size:12px;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:76px;

    >img {
        background-color:var(--dark-gray);
        border-radius:16px;
        width:56px;
    }
`
const StyledContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:24px;
`

const StyledTechStack = styled.div`
    color:var(--gray);
    font-family:'DM Sans',sans-serif;
    font-size:26px;
    letter-spacing:-6%;
    max-width:300px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;

    >h3 {
        font-weight:500;
        vertical-align:top;
        margin-top:0;
    }

`


export function TechImage({src,name}){
    return (
        <StyledIconDiv>
            <img src = {src} alt={name}/>
            <p>{name}</p>
        </StyledIconDiv>
    )
}


export function TechStack({title,array}) {
    return(
        <StyledTechStack>
            <h3>{title}</h3>
            <StyledContainer>
            {array.map((techno,index) => (
                    <TechImage key={array[index].name} src={array[index].icon} name={array[index].name}/>
                ))}
            </StyledContainer>
        </StyledTechStack>
    )
}

export default TechStack