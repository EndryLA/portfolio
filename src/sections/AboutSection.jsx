import styled from 'styled-components'
import { motion } from 'framer-motion'
import profile from '@assets/images/profile.png'
import GithubIcon from '@assets/icons/github.svg'
import LinkedInIcon from '@assets/icons/linkedin.svg'
import { GITHUB_URL, LINKEDIN_URL } from '../data'

const ease = [0.2, 0.7, 0.2, 1]

const Layout = styled.div`
    display:grid;
    grid-template-columns:minmax(0, 5fr) minmax(0, 7fr);
    gap:clamp(40px, 6vw, 96px);
    align-items:center;

    /* round portrait sitting on a yellow disc */
    .portrait {
        position:relative;
        width:min(100%, 380px);
        aspect-ratio:1;
        margin:0 auto;
    }

    .disc {
        position:absolute;
        inset:0;
        border-radius:50%;
        background-color:var(--yellow);
    }

    .portrait img {
        position:relative;
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:50%;
        box-shadow:var(--shadow-lg);
    }

    .text h2 {
        font-size:clamp(34px, 4.6vw, 52px);
        font-weight:800;
        line-height:1.1;
        letter-spacing:-0.025em;
    }

    .text p {
        margin-top:18px;
        max-width:36em;
        color:var(--muted);
        font-size:18px;
    }

    .links {
        display:flex;
        flex-wrap:wrap;
        gap:12px;
        margin-top:32px;
    }

    .links img {
        width:18px;
        height:18px;
    }

    @media (max-width:860px) {
        grid-template-columns:minmax(0, 1fr);

        .portrait {
            width:min(80%, 300px);
        }
    }
`

export default function AboutSection() {
    return (
        <section id='a-propos' className='section container'>
            <Layout>
                <motion.div
                    className='portrait'
                    initial={{ opacity:0, scale:0.9, rotate:-6 }}
                    whileInView={{ opacity:1, scale:1, rotate:0 }}
                    viewport={{ once:true, margin:'0px 0px -60px 0px' }}
                    transition={{ type:'spring', stiffness:120, damping:16 }}
                >
                    <motion.span
                        className='disc'
                        aria-hidden='true'
                        initial={{ x:0, y:0 }}
                        whileInView={{ x:18, y:18 }}
                        viewport={{ once:true }}
                        transition={{ duration:0.8, ease, delay:0.3 }}
                    />
                    <img src={profile} alt='Portrait d’Endry Lundy'/>
                </motion.div>

                <motion.div
                    className='text'
                    initial={{ opacity:0, y:24 }}
                    whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true, margin:'0px 0px -60px 0px' }}
                    transition={{ duration:0.6, ease, delay:0.1 }}
                >
                    <span className='kicker'>À propos</span>
                    <h2>Moi, en quelques mots</h2>
                    <p>
                        Je conçois des applications de bout en bout : architecture en couches,
                        modélisation des données et sécurité côté Java avec Spring Boot, interfaces
                        réactives côté Angular.
                    </p>
                    <p>
                        Je soigne ce qui ne se voit pas : la séparation des responsabilités, un code
                        lisible et facile à faire évoluer, des choix techniques que je sais expliquer.
                    </p>
                    <p>
                        Et côté front, je garde un œil de designer UX : des interfaces claires et des
                        parcours pensés pour ceux qui les utilisent.
                    </p>
                    <div className='links'>
                        <a className='button' href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
                            <img src={GithubIcon} alt=''/> GitHub
                        </a>
                        <a className='button' href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
                            <img src={LinkedInIcon} alt=''/> LinkedIn
                        </a>
                    </div>
                </motion.div>
            </Layout>
        </section>
    )
}
