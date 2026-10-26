import styled from 'styled-components'
import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import angular from '@assets/stack-logos/angular.svg'
import typescript from '@assets/stack-logos/typescript.svg'
import rxjs from '@assets/stack-logos/rxjs.svg'
import html from '@assets/stack-logos/html.svg'
import css from '@assets/stack-logos/css.svg'
import javascript from '@assets/stack-logos/javascript.svg'
import java from '@assets/stack-logos/java.svg'
import springboot from '@assets/stack-logos/springboot.svg'
import nodejs from '@assets/stack-logos/nodejs.svg'
import nestjs from '@assets/stack-logos/nestjs.svg'
import express from '@assets/stack-logos/express.svg'
import postgresql from '@assets/stack-logos/postgresql.svg'
import mysql from '@assets/stack-logos/mysql.svg'
import mongodb from '@assets/stack-logos/mongodb.svg'
import git from '@assets/stack-logos/git.svg'
import github from '@assets/stack-logos/github.svg'
import docker from '@assets/stack-logos/docker.svg'
import postman from '@assets/stack-logos/postman.svg'
import jira from '@assets/stack-logos/jira.svg'
import figma from '@assets/stack-logos/figma.svg'
import claude from '@assets/stack-logos/claude.svg'
import ngrx from '@assets/stack-logos/ngrx.svg'
import primeng from '@assets/stack-logos/primeng.svg'
import angularmaterial from '@assets/stack-logos/angularmaterial.svg'
import tailwindcss from '@assets/stack-logos/tailwindcss.svg'
import react from '@assets/stack-logos/react.svg'
import spring from '@assets/stack-logos/spring.svg'
import jwt from '@assets/stack-logos/jwt.svg'
import swagger from '@assets/stack-logos/swagger.svg'
import redis from '@assets/stack-logos/redis.svg'
import maven from '@assets/stack-logos/maven.svg'
import npm from '@assets/stack-logos/npm.svg'
// concepts without an official logo get a drawn icon
import signals from '@assets/skill-icons/signals.svg'
import oauth2 from '@assets/skill-icons/oauth2.svg'
import apiRest from '@assets/skill-icons/api-rest.svg'
import microservices from '@assets/skill-icons/microservices.svg'
import cleanArchitecture from '@assets/skill-icons/clean-architecture.svg'
import solid from '@assets/skill-icons/solid.svg'
import dry from '@assets/skill-icons/dry.svg'
import kiss from '@assets/skill-icons/kiss.svg'
import yagni from '@assets/skill-icons/yagni.svg'

// full skill list, from the CV's "Compétences" section plus tools shown elsewhere on the site
const groups = [
    {
        title:'Front-end',
        items:[
            ['Angular (v18 à v21)', angular], ['TypeScript', typescript], ['RxJS', rxjs], ['NgRx', ngrx], ['Signals', signals],
            ['PrimeNG', primeng], ['Angular Material', angularmaterial], ['Tailwind CSS', tailwindcss], ['HTML5', html], ['CSS', css],
            ['JavaScript (ES6+)', javascript], ['React', react],
        ],
    },
    {
        title:'Back-end',
        items:[
            ['Java', java], ['Spring Boot', springboot], ['Spring MVC', spring], ['Spring Data JPA', spring], ['Spring Security', spring],
            ['JWT', jwt], ['OAuth2', oauth2], ['OpenAPI / Swagger', swagger], ['Node.js', nodejs], ['NestJS', nestjs], ['Express', express],
        ],
    },
    {
        title:'Bases de données',
        items:[['PostgreSQL', postgresql], ['MySQL', mysql], ['MongoDB', mongodb], ['Redis', redis]],
    },
    {
        title:'Outils',
        items:[
            ['Git', git], ['GitHub', github], ['Docker', docker], ['Maven', maven], ['npm', npm],
            ['Postman', postman], ['Jira', jira], ['Figma', figma], ['Claude Code', claude],
        ],
    },
    {
        title:'Architecture et bonnes pratiques',
        items:[
            ['API REST', apiRest], ['Microservices', microservices], ['Clean Architecture', cleanArchitecture],
            ['SOLID', solid], ['DRY', dry], ['KISS', kiss], ['YAGNI', yagni],
        ],
        wide:true,
    },
]

const Backdrop = styled(motion.div)`
    position:fixed;
    inset:0;
    z-index:50;
    display:grid;
    /* one track the height of the backdrop, so the dialog's max-height:100% is the visible area */
    grid-template-rows:minmax(0, 1fr);
    grid-template-columns:minmax(0, 1fr);
    place-items:center;
    padding:24px;
    background-color:rgba(18,19,31,.6);
    backdrop-filter:blur(6px);

    /* phones: a sheet from the bottom, leaving a strip of backdrop on top */
    @media (max-width:560px) {
        padding:24px 0 0 0;
        align-items:end;
    }
`

const Dialog = styled(motion.div)`
    position:relative;
    width:100%;
    max-width:880px;
    /* sized from the fixed backdrop rather than vh/svh/dvh: the backdrop always
       matches the visible area, with or without the mobile browser bars */
    max-height:100%;
    overflow-y:auto;
    overscroll-behavior:contain;
    border-radius:32px;
    background-color:var(--bg);
    box-shadow:0 30px 80px rgba(18,19,31,.35);

    /* title and close stay pinned while the list scrolls */
    header {
        position:sticky;
        top:0;
        z-index:2;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:16px;
        padding:clamp(18px, 3vw, 24px) clamp(20px, 4vw, 40px);
        border-bottom:1px solid var(--line);
        background-color:rgba(255,255,255,.92);
        backdrop-filter:blur(10px);
    }

    h2 {
        font-size:clamp(22px, 3.2vw, 32px);
        font-weight:800;
        letter-spacing:-0.03em;
        line-height:1.1;
    }

    .close {
        flex-shrink:0;
        display:grid;
        place-items:center;
        width:44px;
        height:44px;
        border:none;
        border-radius:14px;
        background-color:var(--ink);
        color:#fff;
        cursor:pointer;
        transition:transform .2s ease;
    }

    .close:hover {
        transform:rotate(90deg);
    }

    .close svg {
        width:20px;
        height:20px;
    }

    /* intro scrolls away under the pinned bar */
    .intro {
        padding:18px clamp(20px, 4vw, 40px) 0;
        max-width:40em;
        color:var(--muted);
    }

    .groups {
        display:grid;
        grid-template-columns:repeat(2, minmax(0, 1fr));
        gap:14px;
        padding:clamp(18px, 3vw, 28px);
    }

    .group {
        padding:20px;
        border-radius:22px;
        background-color:var(--bg-soft);
        box-shadow:inset 0 0 0 1px var(--line);
    }

    .group.wide {
        grid-column:1 / -1;
    }

    h3 {
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:14px;
        font-size:17px;
        font-weight:800;
        letter-spacing:-0.01em;
    }

    h3 span {
        display:grid;
        place-items:center;
        min-width:28px;
        height:28px;
        padding:0 8px;
        border-radius:999px;
        background-color:var(--yellow);
        font-size:13px;
        font-weight:800;
    }

    ul {
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        list-style:none;
        margin:0;
        padding:0;
    }

    li {
        display:flex;
        align-items:center;
        gap:8px;
        padding:7px 12px;
        border-radius:12px;
        background-color:var(--bg);
        box-shadow:var(--shadow-sm), inset 0 0 0 1px var(--line);
        font-size:14px;
        font-weight:700;
    }

    li img {
        width:18px;
        height:18px;
        object-fit:contain;
    }

    @media (max-width:700px) {
        .groups {
            grid-template-columns:minmax(0, 1fr);
        }
    }

    @media (max-width:560px) {
        border-radius:28px 28px 0 0;
    }
`

const cascade = {
    hidden:{},
    show:{ transition:{ staggerChildren:0.06, delayChildren:0.1 } },
}

const groupIn = {
    hidden:{ opacity:0, y:16 },
    show:{ opacity:1, y:0, transition:{ duration:0.35, ease:[0.2, 0.7, 0.2, 1], staggerChildren:0.02 } },
}

const chipIn = {
    hidden:{ opacity:0, scale:0.85 },
    show:{ opacity:1, scale:1, transition:{ duration:0.2 } },
}

export function SkillsModal({ open, onClose }) {
    const closeRef = useRef(null)

    // focus the close button, lock the page behind, close on Escape, then give focus back
    useEffect(() => {
        if (!open) return
        const previous = document.activeElement
        const onKey = (e) => e.key === 'Escape' && onClose()
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKey)
        closeRef.current?.focus()
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKey)
            previous?.focus?.()
        }
    }, [open, onClose])

    return (
        <AnimatePresence>
            {open && (
                <Backdrop
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    exit={{ opacity:0 }}
                    transition={{ duration:0.2 }}
                    onClick={onClose}
                >
                    <Dialog
                        role='dialog'
                        aria-modal='true'
                        aria-labelledby='skills-title'
                        initial={{ opacity:0, y:40, scale:0.97 }}
                        animate={{ opacity:1, y:0, scale:1 }}
                        exit={{ opacity:0, y:30, scale:0.98 }}
                        transition={{ type:'spring', stiffness:260, damping:26 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <header>
                            <h2 id='skills-title'>Toutes mes compétences</h2>
                            <button ref={closeRef} className='close' onClick={onClose} aria-label='Fermer'>
                                <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' aria-hidden='true'>
                                    <path d='M6 6l12 12M18 6L6 18'/>
                                </svg>
                            </button>
                        </header>
                        <p className='intro'>Les technologies avec lesquelles j’ai travaillé, en entreprise et sur mes projets.</p>

                        <motion.div className='groups' variants={cascade} initial='hidden' animate='show'>
                            {groups.map((group) => (
                                <motion.section key={group.title} className={group.wide ? 'group wide' : 'group'} variants={groupIn}>
                                    <h3>{group.title}<span>{group.items.length}</span></h3>
                                    <ul>
                                        {group.items.map(([name, logo]) => (
                                            <motion.li key={name} variants={chipIn}>
                                                {logo && <img src={logo} alt=''/>}
                                                {name}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.section>
                            ))}
                        </motion.div>
                    </Dialog>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

export default SkillsModal
