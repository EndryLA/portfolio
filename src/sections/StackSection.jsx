import styled, { keyframes } from 'styled-components'
import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import mysqlLogo from '@assets/stack-logos/mysql.svg'
import expressLogo from '@assets/stack-logos/express.svg'
import { stack } from '../data'
import { SkillsModal } from '../components/SkillsModal'
import { logoClass } from '../theme'

const iconOf = (name) => ({ MySQL:mysqlLogo, Express:expressLogo }[name] ?? stack.find((tech) => tech.name === name)?.icon)

// the main stack, shown in full
const main = [
    {
        title:'Java & Spring Boot',
        logos:['Java', 'Spring Boot', 'PostgreSQL'],
        text:'Le cœur de mes back-ends.',
        points:[
            'APIs sécurisées et conformes au RGPD',
            'Application des principes SOLID, DRY, YAGNI, etc.',
            'Des données protégées : mots de passe chiffrés, accès par rôle',
        ],
        tags:['API REST', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'Microservices', 'Docker', 'SQL'],
        featured:true,
    },
    {
        title:'Angular & TypeScript',
        logos:['Angular', 'TypeScript', 'RxJS'],
        text:'Mon framework front de prédilection.',
        points:[
            'Des interfaces qui restent rapides quand l’app grandit',
            'Des écrans connectés à l’API de façon sécurisée',
            'Des composants réutilisables, faciles à reprendre',
        ],
        tags:['TypeScript', 'RxJS', 'Signals', 'Angular Material', 'SCSS'],
    },
]

// everything else, on two scrolling rows
const rows = [
    ['Node.js', 'NestJS', 'Express', 'MySQL', 'MongoDB', 'Docker', 'Git', 'GitHub'],
    ['JavaScript', 'HTML', 'CSS / SCSS', 'Postman', 'Jira', 'Figma', 'Claude', 'Webflow'],
]

const Main = styled.div`
    display:grid;
    grid-template-columns:repeat(2, minmax(0, 1fr));
    gap:20px;

    .card {
        display:flex;
        flex-direction:column;
        padding:clamp(24px, 3.4vw, 40px);
        border-radius:32px;
        background-color:var(--bg);
        box-shadow:var(--shadow-md), inset 0 0 0 1px var(--line);
    }

    .card.featured {
        background-color:var(--yellow);
        color:var(--on-yellow);
        box-shadow:var(--shadow-md);
    }

    .logos {
        display:flex;
        gap:12px;
        list-style:none;
        margin:0 0 28px 0;
        padding:0;
    }

    /* official logos sit centred on a white tile, in both themes */
    .logos li {
        display:grid;
        place-items:center;
        width:64px;
        height:64px;
        border-radius:18px;
        background-color:#fff;
        box-shadow:var(--shadow-md), inset 0 0 0 1px var(--line);
    }

    .logos img {
        width:60%;
        height:60%;
    }

    h3 {
        font-size:clamp(26px, 3vw, 34px);
        font-weight:800;
        letter-spacing:-0.025em;
        line-height:1.15;
    }

    .text {
        margin-top:6px;
        font-size:17px;
        color:var(--muted);
    }

    .featured .text {
        color:rgba(18,19,31,.75);
    }

    .points {
        display:flex;
        flex-direction:column;
        gap:10px;
        list-style:none;
        margin:24px 0 0 0;
        padding:0;
    }

    .points li {
        display:flex;
        gap:10px;
        font-weight:600;
        line-height:1.45;
    }

    .points li::before {
        content:'';
        flex-shrink:0;
        width:8px;
        height:8px;
        margin-top:8px;
        border-radius:50%;
        background-color:currentColor;
    }

    /* framework modules and tools, as tags */
    .tags {
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        list-style:none;
        margin:auto 0 0 0;
        padding:24px 0 0 0;
    }

    .tags li {
        padding:6px 12px;
        border-radius:10px;
        background-color:var(--bg-soft);
        box-shadow:inset 0 0 0 1px var(--line);
        font-size:14px;
        font-weight:700;
    }

    .featured .tags li {
        background-color:rgba(255,255,255,.55);
        box-shadow:inset 0 0 0 1px rgba(18,19,31,.08);
    }

    @media (max-width:760px) {
        grid-template-columns:minmax(0, 1fr);
    }

    @media (max-width:480px) {
        .logos li {
            width:52px;
            height:52px;
            border-radius:15px;
        }
    }
`

// copies of a row in each half of the loop: one set is ~1100px wide, so
// three keep the row filled on screens up to ~3000px
const SETS = 3

const slide = keyframes`
    from { transform:translateX(0); }
    to { transform:translateX(-50%); }
`

const Also = styled.div`
    margin-top:clamp(48px, 6vw, 72px);

    .all {
        display:flex;
        justify-content:center;
        margin-top:28px;
    }

    .all svg {
        width:18px;
        height:18px;
    }

    @media (max-width:560px) {
        .all .button {
            width:100%;
        }
    }

    > p {
        margin-bottom:20px;
        text-align:center;
        font-size:15px;
        font-weight:700;
        color:var(--muted);
    }

    /* full-bleed rows that fade out at both edges */
    .rows {
        display:flex;
        flex-direction:column;
        gap:12px;
        margin:0 calc(50% - 50vw);
        overflow:hidden;
        mask-image:linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
    }

    ul {
        display:flex;
        gap:12px;
        width:max-content;
        list-style:none;
        margin:0;
        padding:4px 0;
        /* 40s per set of logos, so the speed stays the same whatever SETS is */
        animation:${slide} ${40 * SETS}s linear infinite;
    }

    ul.reverse {
        animation-direction:reverse;
    }

    .rows:hover ul {
        animation-play-state:paused;
    }

    li {
        display:flex;
        align-items:center;
        gap:12px;
        padding:10px 20px 10px 14px;
        border-radius:16px;
        background-color:var(--bg);
        box-shadow:var(--shadow-sm), inset 0 0 0 1px var(--line);
        font-size:15px;
        font-weight:700;
        white-space:nowrap;
    }

    li img {
        width:26px;
        height:26px;
        object-fit:contain;
    }
`

const cardIn = {
    hidden:{ opacity:0, y:32 },
    show:{ opacity:1, y:0, transition:{ duration:0.6, ease:[0.2, 0.7, 0.2, 1], staggerChildren:0.08, delayChildren:0.2 } },
}

const logoIn = {
    hidden:{ opacity:0, scale:0.5, rotate:-10 },
    show:{ opacity:1, scale:1, rotate:0, transition:{ type:'spring', stiffness:300, damping:16 } },
}

export default function StackSection() {
    const [showAll, setShowAll] = useState(false)
    const closeAll = useCallback(() => setShowAll(false), [])

    return (
        <section id='stack' className='section container'>
            <div className='section-head'>
                <span className='kicker'>Stack technique</span>
                <h2>Ma stack principale</h2>
                <p>Java côté serveur, Angular côté interface : c’est avec ces deux-là que je construis l’essentiel de mes projets.</p>
            </div>

            <Main>
                {main.map((card) => (
                    <motion.article
                        key={card.title}
                        className={card.featured ? 'card featured' : 'card'}
                        variants={cardIn}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once:true, margin:'0px 0px -60px 0px' }}
                    >
                        <ul className='logos' aria-hidden='true'>
                            {card.logos.map((name) => (
                                <motion.li key={name} title={name} variants={logoIn} whileHover={{ y:-4, rotate:-4 }}>
                                    <img src={iconOf(name)} alt=''/>
                                </motion.li>
                            ))}
                        </ul>
                        <h3>{card.title}</h3>
                        <p className='text'>{card.text}</p>
                        <ul className='points'>
                            {card.points.map((point) => <li key={point}>{point}</li>)}
                        </ul>
                        <ul className='tags' aria-label='Technologies'>
                            {card.tags.map((tag) => <li key={tag}>{tag}</li>)}
                        </ul>
                    </motion.article>
                ))}
            </Main>

            <Also>
                <p>Je travaille aussi avec</p>
                <div className='rows' role='img' aria-label={rows.flat().join(', ')}>
                    {rows.map((row, r) => (
                        <ul key={r} className={r % 2 ? 'reverse' : undefined} aria-hidden='true'>
                            {/* two identical halves so the loop is seamless */}
                            {Array.from({ length:SETS * 2 }, () => row).flat().map((name, i) => (
                                <li key={i}>
                                    <img src={iconOf(name)} alt='' className={logoClass(iconOf(name))}/>
                                    {name}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>

                <div className='all'>
                    <button className='button button-dark' onClick={() => setShowAll(true)} aria-haspopup='dialog'>
                        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
                            <rect x='3' y='3' width='7' height='7' rx='1.5'/><rect x='14' y='3' width='7' height='7' rx='1.5'/>
                            <rect x='3' y='14' width='7' height='7' rx='1.5'/><rect x='14' y='14' width='7' height='7' rx='1.5'/>
                        </svg>
                        Voir toutes mes compétences
                    </button>
                </div>
            </Also>

            <SkillsModal open={showAll} onClose={closeAll}/>
        </section>
    )
}
