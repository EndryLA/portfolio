import styled from "styled-components";
import {useEffect, useState} from 'react'
import GithubIcon from '@assets/icons/github.svg'
import LinkedInIcon from '@assets/icons/linkedin.svg'


const StyledHeader = styled.header`

    position:fixed;
    top:0;
    left:0;
    color:white;
    font-family:'Bebas Neue',sans-serif;
    font-size:24px;
    font-weight:500;
    width:100%;
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
`

const MobileHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 10;
  box-sizing: border-box;
  animation:fadein2 4s ease-in 1;

`;

// Styled burger button
const BurgerButton = styled.div`
 position:fixed;
  top:24px;
  right:24px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  span {
    width: 100%;
    height: 2px;
    background-color: var(--primary);
    transition: all 0.3s ease;
  }
`;

const CloseButton = styled.div`
  position:fixed;
  top:24px;
  right:24px;  
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 28px;
    height: 3px;
    background-color: black;
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

// Styled sidebar
const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left:0;
  bottom:0;
  width: 100vw;
  height:100svh;
  background-color: var(--primary);
  color: black;
  box-sizing: border-box;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  font-family:'Bebas Neue',sans-serif;


    nav ul {
    list-style:none;
    padding: 0;
    margin:0;
    width:100%;
    height:100svh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:16px;
    
        li {
        list-style: none;
        cursor: pointer;
        transition: 0.4s;
        font-size:28px;
        }

        li:hover {
        text-decoration:underline;
        }
    }  

    div.socials {
    position: fixed;
    bottom: 32px;
    left:50%;
    transform:translate(-50%,0);
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items:center;

    a {
        width:32px;


        img {
            width:100%
            height:100%;

        }
    }

  }
`;

export function Header() {

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {

            setViewportWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)

    },[])

    const handleNavClick = (e, sectionId) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

    return(
    <>
    {viewportWidth > 768 && (

        <StyledHeader>
            <nav>
                <ul>
                    <li><a href='#about-me' onClick={(e) => handleNavClick(e, '#about-me')}>about</a></li>
                    <li><a href='#skills' onClick={(e) => handleNavClick(e, '#skills')}>skills</a></li>
                    <li><a href='#projects' onClick={(e) => handleNavClick(e, '#projects')}>projects</a></li>
                    <li><a href='#contact' onClick={(e) => handleNavClick(e, '#contact')}>contact</a></li>
                </ul>
            </nav>
        </StyledHeader>    
        
    )}

    {viewportWidth < 768 && (
        <MobileHeader>
          <BurgerButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <span />
            <span />
            <span />
          </BurgerButton>
          <Sidebar isOpen={isSidebarOpen}>
          <CloseButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}/>
            <div className='socials'>
                <a href='https://github.com/endryLA' target='_blank'> <img src={GithubIcon} alt="Lien Github d'Endry"/></a>
                <a href='https://www.linkedin.com/in/endry-lundy-167440193/' target='_blank'> <img src={LinkedInIcon} alt="Lien LinkedIn d'Endry"/> </a>
            </div>
            <nav>
                <ul>
                    <li><a href='#about-me' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>about</a></li>
                    <li><a href='#skills' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>skills</a></li>
                    <li><a href='#projects' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>projects</a></li>
                    <li><a href='#contact' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>contact</a></li>
                </ul>
            </nav>
          </Sidebar>
             
        </MobileHeader> 
    )}
    </>
    )
}