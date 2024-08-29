import styled from "styled-components";

const StyledComponent = styled.div`
    display:flex;
    flex-direction:column;
    max-width:400px;
    position:relative;
    margin:0 auto 0 28px;
    padding:4px 4px 16px 4px;
    transition:.3s;
    border-radius:4px;

    .period {
        font-size:12px;
        font-family:'Fira Code',sans-serif;
        color:white;
        font-weight:bold;
        letter-spacing:0.03rem;
        margin:0;
        text-transform:uppercase;
    }

    >h3 {
        font-family:'DM Sans',sans-serif;
        color:white;
        margin:0 0 2px 0;
        font-size:20px;
    }

    .description {
        color:var(--gray);
        font-family:'DM Sans', sans-serif;
        margin:8px 0 0 0;
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
            <h3>{title}</h3>
            <p className='period'>{period}</p>
            <p className='description'>{description}</p>
        </StyledComponent>
    )
}