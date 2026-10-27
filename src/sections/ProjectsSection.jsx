import styled from 'styled-components'
import { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import GithubIcon from '@assets/icons/github.svg'
import { projects } from '../data'
import { logoClass } from '../theme'

const filters = ['Tous', 'Full-Stack', 'Frontend', 'Backend']

// how many cards show before "Voir plus"
const LIMIT = 3

const More = styled.div`
    display:flex;
    justify-content:center;
    margin-top:40px;

    svg {
        width:18px;
        height:18px;
    }

    @media (max-width:560px) {
        .button {
            width:100%;
        }
    }
`

const Tabs = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:40px;

    div {
        display:flex;
        gap:4px;
        padding:5px;
        max-width:100%;
        overflow-x:auto;
        scrollbar-width:none;
        border-radius:16px;
        background-color:var(--bg-soft);
        box-shadow:inset 0 0 0 1px var(--line);
    }

    button {
        position:relative;
        padding:9px 18px;
        border:none;
        border-radius:12px;
        background:none;
        font-family:var(--font);
        font-size:15px;
        font-weight:600;
        color:var(--muted);
        white-space:nowrap;
        cursor:pointer;
        transition:color .2s ease;
    }

    button:hover {
        color:var(--ink);
    }

    button[aria-pressed='true'],
    button[aria-pressed='true'] .count {
        color:var(--on-yellow);
    }

    button span {
        position:relative;
        z-index:1;
    }

    .count {
        margin-left:6px;
        font-size:13px;
        color:var(--muted);
    }

    /* phones: one full-width row, tighter tabs and no counts, so all four fit */
    @media (max-width:560px) {
        div {
            width:100%;
        }

        button {
            flex:1 1 auto;
            padding:9px 6px;
            /* 13px on the narrowest phones (320px) */
            font-size:clamp(13px, 3.8vw, 14px);
        }

        .count {
            display:none;
        }
    }

    /* yellow pill that slides to the active tab */
    .pill {
        position:absolute;
        inset:0;
        border-radius:12px;
        background-color:var(--yellow);
        box-shadow:var(--shadow-sm);
    }
`

const Grid = styled(motion.div)`
    display:grid;
    grid-template-columns:repeat(3, minmax(0, 1fr));
    gap:28px 24px;

    .card {
        display:flex;
        flex-direction:column;
        gap:18px;
        text-decoration:none;
    }

    .frame {
        perspective:900px;
    }

    .browser {
        box-shadow:var(--shadow-md), 0 0 0 1px var(--line);
        transition:box-shadow .3s ease;
    }

    a.card:hover .browser {
        box-shadow:var(--shadow-lg), 0 0 0 1px var(--line);
    }

    .info {
        display:flex;
        flex-direction:column;
        flex:1;
        padding:0 4px;
    }

    .title-row {
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:12px;
    }

    h3 {
        font-size:20px;
        font-weight:700;
        letter-spacing:-0.02em;
        line-height:1.3;
    }

    .type {
        flex-shrink:0;
        padding:3px 10px;
        border-radius:999px;
        background-color:var(--bg-soft);
        box-shadow:inset 0 0 0 1px var(--line);
        font-size:12.5px;
        font-weight:700;
    }

    .type.soon {
        background-color:var(--yellow-soft);
        box-shadow:none;
    }

    .description {
        margin-top:4px;
        font-size:15.5px;
        line-height:1.55;
        color:var(--muted);
    }

    ul {
        display:flex;
        flex-wrap:wrap;
        gap:6px;
        list-style:none;
        margin:12px 0 0 0;
        padding:0;
    }

    /* monospace tags, dark enough to read */
    li {
        padding:4px 10px;
        border-radius:8px;
        background-color:var(--bg-soft);
        box-shadow:inset 0 0 0 1px var(--line);
        font-family:'JetBrains Mono', ui-monospace, Consolas, monospace;
        font-size:13px;
        font-weight:500;
        color:var(--ink);
    }

    /* call to action at the bottom of each card */
    .cta {
        display:inline-flex;
        align-items:center;
        gap:8px;
        align-self:flex-start;
        /* pinned to the bottom so the links line up across a row */
        margin-top:auto;
        padding-top:16px;
        font-size:15px;
        font-weight:700;
        color:var(--ink);
        text-decoration:underline;
        text-decoration-thickness:2px;
        text-decoration-color:var(--yellow);
        text-underline-offset:5px;
        transition:text-decoration-color .2s ease;
    }

    a.card:hover .cta {
        text-decoration-color:var(--ink);
    }

    .cta img {
        width:18px;
        height:18px;
    }

    @media (max-width:960px) {
        grid-template-columns:repeat(2, minmax(0, 1fr));
    }

    @media (max-width:620px) {
        grid-template-columns:minmax(0, 1fr);
    }
`

// the screenshot leans toward the cursor while hovering
function TiltFrame({ children }) {
    const x = useMotionValue(0.5)
    const y = useMotionValue(0.5)
    const spring = { stiffness:200, damping:20 }
    const rotateY = useSpring(useTransform(x, [0, 1], [-7, 7]), spring)
    const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), spring)
    const lift = useSpring(0, spring)

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width)
        y.set((e.clientY - rect.top) / rect.height)
    }

    const handleLeave = () => {
        x.set(0.5)
        y.set(0.5)
        lift.set(0)
    }

    return (
        <div className='frame' onMouseMove={handleMove} onMouseEnter={() => lift.set(-6)} onMouseLeave={handleLeave}>
            <motion.div className='browser' style={{ rotateX, rotateY, y:lift }}>
                {children}
            </motion.div>
        </div>
    )
}

function ProjectCard({ project, index }) {
    const { title, type, description, stack, href, image, cta } = project
    const isCode = href?.startsWith('https://github.com')
    const Tag = href ? motion.a : motion.div
    const linkProps = href ? { href, target:'_blank', rel:'noopener noreferrer' } : {}
    // no link: either a private app (shown as such) or not online yet
    const url = href ? href.replace('https://', '').replace(/\/$/, '') : project.private ? 'accès privé' : 'bientôt en ligne'

    return (
        // each card reveals itself when it scrolls in, so cards added by "Voir plus" or a filter animate too
        <Tag
            className='card'
            {...linkProps}
            initial={{ opacity:0, y:28, scale:0.97 }}
            whileInView={{ opacity:1, y:0, scale:1 }}
            viewport={{ once:true, margin:'0px 0px -40px 0px' }}
            transition={{ duration:0.5, ease:[0.2, 0.7, 0.2, 1], delay:(index % 3) * 0.07 }}
        >
            <TiltFrame>
                <div className='browser-bar'><span>{url}</span></div>
                <img src={image} alt='' loading='lazy'/>
            </TiltFrame>
            <div className='info'>
                <div className='title-row'>
                    <h3>{title}</h3>
                    <span className={href || project.private ? 'type' : 'type soon'}>{href ? type : project.private ? 'Privé' : 'Bientôt'}</span>
                </div>
                <p className='description'>{description}</p>
                <ul aria-label='Technologies'>
                    {stack.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
                {href && (
                    <span className='cta'>
                        {isCode && <img src={GithubIcon} alt='' className={logoClass(GithubIcon)}/>}
                        {cta ?? 'Voir le site'}
                    </span>
                )}
            </div>
        </Tag>
    )
}

export default function ProjectsSection() {
    const [active, setActive] = useState('Tous')
    const [expanded, setExpanded] = useState(false)

    const selectFilter = (filter) => {
        setActive(filter)
        setExpanded(false)
    }
    const shown = projects.filter((p) => active === 'Tous' || p.type === active)
    const visible = expanded ? shown : shown.slice(0, LIMIT)
    const hidden = shown.length - LIMIT

    const toggle = () => {
        // when collapsing, bring the section back into view
        if (expanded) document.getElementById('projets')?.scrollIntoView({ behavior:'smooth' })
        setExpanded(!expanded)
    }
    const countFor = (filter) => filter === 'Tous' ? projects.length : projects.filter((p) => p.type === filter).length

    return (
        <section id='projets' className='section container'>
            <div className='section-head'>
                <span className='kicker'>Projets</span>
                <h2>Des logiciels conçus de bout en bout</h2>
                <p>Architecture, back-end, front-end et mise en ligne : voici ce que j’ai construit récemment.</p>
            </div>

            <Tabs>
                <div role='group' aria-label='Filtrer les projets par type'>
                    {filters.map((filter) => (
                        <button key={filter} aria-pressed={active === filter} onClick={() => selectFilter(filter)}>
                            {active === filter && (
                                <motion.span className='pill' layoutId='project-filter' transition={{ type:'spring', stiffness:400, damping:32 }}/>
                            )}
                            <span>{filter}<span className='count'>{countFor(filter)}</span></span>
                        </button>
                    ))}
                </div>
            </Tabs>

            {/* re-keyed on each filter so the cards play their entrance again */}
            <Grid key={active}>
                {visible.map((project, index) => <ProjectCard key={project.title} project={project} index={index}/>)}
            </Grid>

            {hidden > 0 && (
                <More>
                    <button className='button' onClick={toggle} aria-expanded={expanded}>
                        {expanded ? 'Voir moins' : `Voir plus de projets (${hidden})`}
                        <motion.svg
                            viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'
                            aria-hidden='true'
                            animate={{ rotate:expanded ? 180 : 0 }}
                            transition={{ duration:0.25 }}
                        >
                            <path d='M6 9l6 6 6-6'/>
                        </motion.svg>
                    </button>
                </More>
            )}
        </section>
    )
}
