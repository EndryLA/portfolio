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
        box-shadow:0px 2px 50px rgba(252, 214, 18, .3);

        button:hover {
            box-shadow:0 2 50px rgba(255,255,255,1);
        }
    `;

export function ButtonMedium({content}){
    return (
        <StyledButton>
            {content}
        </StyledButton>
    )
}