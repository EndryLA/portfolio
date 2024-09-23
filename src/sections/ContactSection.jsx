import styled from "styled-components"


    const Section = styled.section`

    width:100%;
    margin:0 auto;
    min-height:100svh;

    

    h2 {
        text-align:center;
    }

    form {
        width:80%;
        margin:0 auto;
        max-width:480px;
        display:flex;
        flex-direction:column;
        gap:18px;
        margin:0 auto;
    }

    div {
    
        display:flex;
        flex-direction:column;
        gap:4px;
        width:100%;
    }

    label {
        color:var(--primary);
        font-size:clamp(16px,4vw,18px);
        font-family:'DM Sans',sans-serif;
        font-weight:bold;
        text-transform:uppercase;
        padding-left:4px;
    }

    input {
        width:100%;
        max-width:480px;
        padding:12px 8px;
        background-color:var(--dark-gray);
        outline:none;
        border:none;
        color:white;
        font-family:'DM Sans',sans-serif;
        font-size:16px;
        border-radius:4px;
        box-sizing:border-box;
    }
    
    textarea {
        min-height:220px;
        max-width:480px;
        width:100%;
        padding:8px;
        background-color:var(--dark-gray);
        outline:none;
        border:none;
        color:white;
        font-family:'DM Sans',sans-serif;
        font-size:16px;
        border-radius:8px;
        box-sizing:border-box;
        resize:none;
    }

    .submit-btn {
        background-color:var(--dark-gray);
        color:var(--primary);
        font-weight:bold;
        width:unset;
        font-size:18px;
        text-transform:uppercase;
        padding:15px 36px;
        cursor:pointer;
        transition:.2s;
        align-self:flex-start;
    }

    .submit-btn:hover {
        color:black;
        background-color:var(--primary)
    }

    @media screen and (max-width:)
`





export function ContactSection(){

    return (
        <Section id="contact">
            <h2>Contact</h2>
            <form method='post'>
                <div>
                    <label htmlFor='fullname'>Nom Complet</label>
                    <input type='text' name='fullname' />
                </div>
                <div>
                    <label htmlFor='email'>Adresse email</label>
                    <input type='email' name='email' />
                </div>
                <div>
                    <label htmlFor='message'>Décrivez votre projet</label>
                    <textarea type='text' name='message' ></textarea>
                </div>
                <input type='submit' className="submit-btn"/>
            </form>
        </Section>
    )

}

export default ContactSection