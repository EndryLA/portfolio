import styled from "styled-components";
import {Link} from 'react-router-dom'

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
`

export function Header() {
    return(
    <>
        <StyledHeader>
            <nav>
                <ul>
                    <li>about</li>
                    <li>skills</li>
                    <li>projects</li>
                    <li>contact</li>
                </ul>
            </nav>
        </StyledHeader>    
    </>
    )
}