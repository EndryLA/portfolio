import styled from 'styled-components'

const StyledButton = styled.button`

    color:var(--primary);
    background-color:transparent;
    outline:none;
    border:1px solid var(--primary);
    width:180px;
    height:60px;
    font-family:'ocr';
    cursor:pointer;
    transition: box-shadow 0.3s ease;
    transition:.33s;

    
    &:hover {
        box-shadow:0px 2px 25px rgba(252, 214, 18, .3);
    }

    @media (max-width:768px) {
        width:120px;
        font-size:12px
    }
    `;

export function ButtonMedium({content}){
    return (
        <StyledButton>
            {content}
        </StyledButton>
    )
}