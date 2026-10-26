import styled from 'styled-components'
import { GITHUB_URL, LINKEDIN_URL } from '../data'

const StyledFooter = styled.footer`
    .inner {
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        gap:12px;
        padding-top:32px;
        padding-bottom:40px;
        border-top:1px solid var(--line);
        font-size:15px;
        color:var(--muted);
    }

    .links {
        display:flex;
        gap:20px;
    }

    a {
        font-weight:600;
        text-decoration:none;
    }

    a:hover {
        color:var(--ink);
    }
`

export default function Footer() {
    return (
        <StyledFooter className='container'>
            <div className='inner'>
                <p>© {new Date().getFullYear()} Endry Lundy</p>
                <div className='links'>
                    <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>GitHub</a>
                    <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                </div>
            </div>
        </StyledFooter>
    )
}
