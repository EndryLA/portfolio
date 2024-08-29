import styled from "styled-components";
import {useEffect, useState} from 'react'

const StyledHeader = styled.header`

    position:fixed;
    top:0;
    left:0;
    color:white;
    font-family:'DM Sans',sans-serif;
    font-weight:500;
    width:100%;
    max-width:100vw;
    padding:10px 20px;
    box-sizing:border-box;
    animation:fadein2 4s ease-in 1;


    > nav ul {
        list-style:none;
        display:flex;
        justify-content:flex-end;
        padding:0;
        margin:15px 0;
    }

    > nav ul li{
        letter-spacing:.15rem;
        margin:0 15px;
        cursor:pointer;
        transition:.4s;
    }

    > nav ul li:hover {
        color:var(--primary);
    }

    @media screen and (max-width:768px) {
        display:none;
    }
`

export function Header() {

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {

            setViewportWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)

    },[])

    return(
    <>
    {viewportWidth > 768 && (

        <StyledHeader>
            <nav>
                <ul>
                    <li><a href='#about-me'>about</a></li>
                    <li><a href='#skills'>skills</a></li>
                    <li><a href='#projects'>projects</a></li>
                </ul>
            </nav>
        </StyledHeader>    
        
    )}

    {viewportWidth < 768 && (
        <StyledHeader>

        </StyledHeader>
    )}
    </>
    )
}