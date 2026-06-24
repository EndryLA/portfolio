import styled from "styled-components";

const StyledComponent = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    margin:0;
    padding:18px 22px;
    transition:transform .25s ease, background .25s ease, border-color .25s ease;
    border-radius:12px;
    border:1px solid rgba(255,255,255,0.08);
    background:#0d0f1a;

    .period {
        font-size:11px;
        font-family:'Fira Code',sans-serif;
        color:var(--primary);
        font-weight:bold;
        letter-spacing:0.06rem;
        margin:0 0 8px 0;
        text-transform:uppercase;
    }

    >h3 {
        font-family:'DM Sans',sans-serif;
        color:white;
        margin:0 0 2px 0;
        font-size:19px;
        line-height:1.25;
    }

    .description {
        color:var(--gray);
        font-family:'DM Sans', sans-serif;
        font-size:14.5px;
        line-height:1.55;
        margin:8px 0 0 0;
    }

    /* timeline dot sitting on the spine */
    ::before {
        content:'';
        position:absolute;
        left:-40px;
        top:22px;
        width:13px;
        height:13px;
        border-radius:50%;
        background:var(--primary);
        border:3px solid black;
        box-shadow:0 0 0 1px rgba(252,214,18,0.4);
        transition:box-shadow .25s ease, transform .25s ease;
        z-index:1;
    }

    /* little connector from spine to card */
    ::after {
        content:'';
        position:absolute;
        left:-30px;
        top:28px;
        width:18px;
        height:2px;
        background:rgba(252,214,18,0.35);
    }

    &:hover {
        transform:translateY(-3px);
        background:#11131f;
        border-color:rgba(252,214,18,0.35);
    }

    &:hover::before {
        box-shadow:0 0 0 4px rgba(252,214,18,0.18), 0 0 14px rgba(252,214,18,0.55);
        transform:scale(1.12);
    }

    @media screen and (max-width:650px) {
        ::before { left:-34px; }
        ::after { left:-24px; width:12px; }
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
