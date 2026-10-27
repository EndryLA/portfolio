import styled from 'styled-components'
import { motion } from 'framer-motion'
import profile from '@assets/images/profile.png'
import { experiences, CV_URL } from '../data'

const Block = styled(motion.div)`
    display:grid;
    grid-template-columns:minmax(0, 5fr) minmax(0, 7fr);
    gap:clamp(32px, 5vw, 72px);
    padding:clamp(32px, 6vw, 72px);
    border-radius:32px;
    background-color:var(--navy);
    /* a hairline edge in dark mode, where the block sits on a dark page */
    box-shadow:inset 0 0 0 1px var(--navy-edge);
    color:#fff;
    overflow:hidden;
    position:relative;


    .intro {
        position:relative;
        align-self:start;
    }


    h2 {
        font-size:clamp(34px, 4.6vw, 52px);
        font-weight:800;
        line-height:1.08;
        letter-spacing:-0.035em;
    }

    .intro p {
        margin-top:16px;
        color:rgba(255,255,255,.68);
        max-width:28em;
    }

    .portrait {
        display:flex;
        align-items:center;
        gap:14px;
        margin-top:32px;
    }

    .portrait img {
        width:64px;
        height:64px;
        border-radius:50%;
        object-fit:cover;
        background-color:var(--yellow);
        box-shadow:0 0 0 4px rgba(255,255,255,.08);
    }

    .portrait strong {
        display:block;
    }

    .portrait small {
        font-size:14px;
        color:rgba(255,255,255,.6);
    }

    ol {
        position:relative;
        display:flex;
        flex-direction:column;
        gap:14px;
        list-style:none;
        margin:0;
        padding:0;
    }

    li {
        display:block;
        padding:22px;
        border-radius:20px;
        background-color:rgba(255,255,255,.05);
        box-shadow:inset 0 0 0 1px rgba(255,255,255,.08);
        transition:background-color .2s ease;
    }

    li:hover {
        background-color:rgba(255,255,255,.08);
    }


    .period {
        font-size:14px;
        font-weight:600;
        color:var(--yellow);
    }

    h3 {
        margin-top:2px;
        font-size:19px;
        font-weight:700;
        letter-spacing:-0.015em;
        line-height:1.3;
    }

    .company {
        font-size:15px;
        color:rgba(255,255,255,.75);
    }

    .badge {
        margin-left:8px;
        padding:1px 8px;
        border-radius:6px;
        background-color:rgba(255,255,255,.1);
        font-size:12px;
        font-weight:600;
    }

    /* CV download, across the bottom of the block */
    .cv-row {
        grid-column:1 / -1;
        display:flex;
        justify-content:center;
    }

    .cv-row svg {
        width:18px;
        height:18px;
    }

    @media (max-width:560px) {
        .cv-row .button {
            width:100%;
        }
    }

    .skills {
        display:flex;
        flex-wrap:wrap;
        gap:6px;
        list-style:none;
        margin:12px 0 0 0;
        padding:0;
    }

    .skills li {
        padding:3px 9px;
        border-radius:8px;
        background-color:rgba(255,255,255,.08);
        box-shadow:none;
        font-family:'JetBrains Mono', ui-monospace, Consolas, monospace;
        font-size:12.5px;
        color:rgba(255,255,255,.85);
    }

    .description {
        margin-top:8px;
        font-size:15px;
        line-height:1.55;
        color:rgba(255,255,255,.6);
    }

    @media (max-width:900px) {
        grid-template-columns:minmax(0, 1fr);
    }

    @media (max-width:480px) {
        border-radius:24px;
    }
`

export default function ProfessionalExperiences() {
    return (
        <section id='parcours' className='section container'>
            <Block
                initial={{ opacity:0, y:40, scale:0.98 }}
                whileInView={{ opacity:1, y:0, scale:1 }}
                viewport={{ once:true, margin:'-80px' }}
                transition={{ duration:0.7, ease:[0.2, 0.7, 0.2, 1] }}
            >
                <div className='intro'>
                    <span className='kicker'>Parcours</span>
                    <h2>Ce que j’ai fait jusqu’ici</h2>
                    <p>
                        Deux ans de projets professionnels en Java, Angular et React, en entreprise
                        et en milieu associatif, après une formation full-stack.
                    </p>
                    <div className='portrait'>
                        <img src={profile} alt=''/>
                        <div>
                            <strong>Endry Lundy</strong>
                            <small>Software engineer full-stack, Java et Angular</small>
                        </div>
                    </div>
                </div>

                <motion.ol
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once:true, margin:'-80px' }}
                    variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.12 } } }}
                >
                    {experiences.map((xp) => (
                        <motion.li
                            key={`${xp.company}-${xp.period}`}
                            variants={{
                                hidden:{ opacity:0, x:32 },
                                show:{ opacity:1, x:0, transition:{ duration:0.55, ease:[0.2, 0.7, 0.2, 1] } },
                            }}
                        >
                            <div>
                                <p className='period'>{xp.period}</p>
                                <h3>{xp.title}</h3>
                                <p className='company'>
                                    {xp.company}
                                    {xp.type && <span className='badge'>{xp.type}</span>}
                                </p>
                                <p className='description'>{xp.description}</p>
                                {xp.skills && (
                                    <ul className='skills' aria-label='Compétences clés'>
                                        {xp.skills.map((skill) => <li key={skill}>{skill}</li>)}
                                    </ul>
                                )}
                            </div>
                        </motion.li>
                    ))}
                </motion.ol>

                <div className='cv-row'>
                    <a className='button button-yellow' href={CV_URL} download>
                        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
                            <path d='M12 3v12M7 10l5 5 5-5M5 21h14'/>
                        </svg>
                        Télécharger CV
                    </a>
                </div>
            </Block>
        </section>
    )
}
