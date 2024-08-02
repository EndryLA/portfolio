import styled from "styled-components";

const StyledComponent = styled.div`
    display:flex;
    flex-direction:column;
    gap:4px;
    max-width:400px;
    position:relative;
    margin:auto;
    padding:4px 4px 16px 4px;

    .period {
        font-size:12px;
        font-family:'Fira Code',sans-serif;
        color:var(--gray);
        margin:0;
        text-transform:uppercase;
    }

    >h3 {
        font-family:'DM Sans',sans-serif;
        color:white;
        margin:0;
        font-size:20px;
    }

    .description {
        color:var(--gray);
        font-family:'DM Sans', sans-serif;
        margin:0;
    }

    ::after {
        content: '';
        position: absolute;
        left: -20px;
        top: 2px;
        bottom: -2px;
        width: 4px;
        background: var(--primary);
    }

    ::before {
        content:'';
        position:absolute;
        left:-28px;
        top:2px;
        width:20px;
        height:20px;
        border-radius:50%;
        background:var(--primary)
    }

    
`

export function ProfessionalExperience({period, title, description}) {
    return(
        <StyledComponent>
            <p className='period'>{period}</p>
            <h3>{title}</h3>
            <p className='description'>{description}</p>
        </StyledComponent>
    )
}