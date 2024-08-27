import styled from 'styled-components'

const Paragraph = styled.p`
    background-color:var(--dark-gray);
    padding: 4px 16px;
    margin:0;
    border-radius:12px;
    color:white !important;
    font-family:'DM Sans',sans-serif;
    font-size:12px;
    width:fit-content;
`

export function TechBullet({title}) {
    return <Paragraph>{title}</Paragraph>
}


const Container = styled.div`

    border-radius:8px;
    transition:.3s;
    gap:10px;
    
    > a {

        display:flex;
        flex-direction:column;
        max-width:300px;
        min-height:350px;
        width:80vw;
        gap:10px;
        border-radius:8px;
        transition:.3s;
        padding:8px 8px 28px 8px;
        background-color:rgba(15,15,15,1);
        cursor:pointer;
    }

    >a img {
        width:100%;
        border-radius:4px;
        height:170px;
        object-fit:cover;
        transition:.3s;
    }

    >a h4 {
        color:white;
        font-size:20px;
        font-family:'DM Sans', sans-serif;
        margin:0;
    }

    >a p {
        color:var(--gray);
        font-family:'DM Sans', sans-serif;
        margin:0;
    }

    > a div {
        width:100%;
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        padding:0;
        margin-top:10px;
    }

    > a:hover {
        background-color:rgba(20,20,20,1);
    }
`


export function Project({src,title,description,stackArray, href}) {
    return(
        <Container>
            <a href={href} target='_blank'>

            <img src={src}/>
            <h4>{ title}</h4>
            <p>{description}</p>
            <div>
                {stackArray && stackArray.map((techno, index) => (
                    <TechBullet key={index} title={stackArray[index]}/>
                ))}
            </div>
            </a>
        </Container>
    )
}

export default Project
