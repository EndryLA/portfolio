import styled from "styled-components";
import spinner from '@assets/icons/spinner.svg'

const StyledSpinner = styled.div`
    width: fit-content;
    height:fit-content;
    filter: invert(63%) sepia(99%) saturate(362%) hue-rotate(7deg) brightness(105%) contrast(112%); 
    animation: spin 1.75s linear infinite ;   
    

    > img {
        width:40px;
        height:40px;
    }
`

export function Spinner() {
    return(
        <StyledSpinner>
            <img src={spinner}/>
        </StyledSpinner>
    )
}