import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Ribbons } from '../components/Ribbons'
import { CV_URL } from '../data'

const ease = [0.2, 0.7, 0.2, 1]

// each title line slides up from behind its own mask
const line = (delay) => ({
    hidden:{ y:'110%' },
    show:{ y:0, transition:{ duration:0.9, ease:[0.16, 1, 0.3, 1], delay } },
})

const fadeUp = (delay) => ({
    hidden:{ opacity:0, y:16 },
    show:{ opacity:1, y:0, transition:{ duration:0.6, ease, delay } },
})

const Hero = styled.section`
    position:relative;
    margin-top:-84px;
    padding-top:calc(84px + clamp(40px, 7vw, 88px));
    text-align:center;

    /* dot grid that fades out towards the edges */
    &::before {
        content:'';
        position:absolute;
        inset:0;
        z-index:-1;
        background-image:radial-gradient(var(--dot) 1px, transparent 1px);
        background-size:22px 22px;
        mask-image:radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 100%);
    }

    .hello {
        display:inline-flex;
        align-items:center;
        gap:8px;
        padding:8px 12px 8px 16px;
        border-radius:999px;
        background-color:var(--surface);
        box-shadow:var(--shadow-sm), inset 0 0 0 1px var(--line);
        font-size:15px;
        font-weight:600;
    }

    /* waving hand: waves, then rests, on a loop */
    .wave {
        display:inline-block;
        font-size:20px;
        line-height:1;
        transform-origin:70% 75%;
        animation:wave 2.8s ease-in-out 0.8s infinite;
    }

    @keyframes wave {
        0%, 50%, 100% { transform:rotate(0deg); }
        8% { transform:rotate(16deg); }
        16% { transform:rotate(-8deg); }
        24% { transform:rotate(16deg); }
        32% { transform:rotate(-4deg); }
        40% { transform:rotate(10deg); }
    }

    /* role title: big, each line kept whole. "Développeur Full-Stack" is about
       11.2× the font size wide, so 7.6vw keeps it inside a phone screen */
    h1 {
        margin:28px auto 0 auto;
        font-size:clamp(24px, 7.6vw, 96px);
        font-weight:800;
        letter-spacing:-0.025em;
        line-height:1.05;
        white-space:nowrap;
    }

    h1 .mask {
        display:block;
        overflow:hidden;
        padding-bottom:.08em;
    }

    h1 .mask > span {
        display:block;
    }

    .lede {
        max-width:34em;
        margin:28px auto 0 auto;
        font-size:clamp(17px, 1.6vw, 19px);
        color:var(--muted);
        text-wrap:pretty;
    }

    .actions svg {
        width:18px;
        height:18px;
        flex-shrink:0;
    }

    .actions {
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        gap:12px;
        margin-top:32px;

        /* phones: stacked, full-width buttons */
        @media (max-width:560px) {
            flex-direction:column;

            .button {
                width:100%;
            }
        }
    }

    /* full-bleed ribbons graphic */
    .ribbons {
        display:block;
        width:100%;
        height:clamp(240px, 30vw, 420px);
        margin-top:clamp(32px, 5vw, 56px);
        overflow:visible;
    }
`

export function HeroSection() {
    return (
        <Hero id='top'>
            <motion.div className='container' initial='hidden' animate='show'>
                <motion.p className='hello' variants={fadeUp(0)}>
                    Salut, moi c’est Endry
                    <span className='wave' aria-hidden='true'>{'\u{1F44B}\u{1F3FD}'}</span>
                </motion.p>

                <h1>
                    <span className='mask'><motion.span variants={line(0.1)}>Développeur Full-Stack</motion.span></span>
                    <span className='mask'><motion.span variants={line(0.22)}>Java & Angular</motion.span></span>
                </h1>

                <motion.p className='lede' variants={fadeUp(0.5)}>
                    Je conçois des applications web solides, de l’architecture à&nbsp;l’interface,
                    avec un code bien construit, sécurisé et facile à faire évoluer.
                </motion.p>

                <motion.div className='actions' variants={fadeUp(0.6)}>
                    <a className='button button-dark' href='#projets'>
                        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
                            <rect x='3' y='3' width='7' height='7' rx='1.5'/><rect x='14' y='3' width='7' height='7' rx='1.5'/>
                            <rect x='3' y='14' width='7' height='7' rx='1.5'/><rect x='14' y='14' width='7' height='7' rx='1.5'/>
                        </svg>
                        Voir mes projets
                    </a>
                    <a className='button' href={CV_URL} download>
                        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
                            <path d='M12 3v12M7 10l5 5 5-5M5 21h14'/>
                        </svg>
                        Télécharger CV
                    </a>
                </motion.div>
            </motion.div>

            <Ribbons/>
        </Hero>
    )
}

export default HeroSection
