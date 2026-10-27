import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import GithubIcon from '@assets/icons/github.svg'
import LinkedInIcon from '@assets/icons/linkedin.svg'
import { GITHUB_URL, LINKEDIN_URL } from '../data'
import { logoClass, useTheme } from '../theme'

const links = [
    { id:'a-propos', label:'À propos' },
    { id:'stack', label:'Stack' },
    { id:'projets', label:'Projets' },
    { id:'parcours', label:'Parcours' },
]

const Bar = styled.header`
    position:sticky;
    top:0;
    z-index:20;
    background-color:var(--glass);
    backdrop-filter:blur(12px);
    transition:box-shadow .25s ease;

    &.scrolled {
        box-shadow:0 1px 0 var(--line);
    }

    &.open {
        background-color:var(--bg);
        box-shadow:none;
    }

    .inner {
        display:flex;
        align-items:center;
        gap:24px;
        height:84px;
    }

    .logo {
        display:flex;
        align-items:center;
        gap:10px;
        margin-right:auto;
        font-size:18px;
        font-weight:800;
        letter-spacing:-0.02em;
        text-decoration:none;
    }

    .logo span {
        display:grid;
        place-items:center;
        width:36px;
        height:36px;
        border-radius:11px;
        background-color:var(--yellow);
        color:var(--on-yellow);
        font-size:14px;
        transform:rotate(-6deg);
        box-shadow:var(--shadow-sm);
    }

    nav ul {
        display:flex;
        align-items:center;
        gap:4px;
        list-style:none;
        margin:0;
        padding:0;
    }

    nav a {
        position:relative;
        display:block;
        padding:8px 14px;
        font-size:15px;
        font-weight:600;
        text-decoration:none;
        color:var(--muted);
        transition:color .2s ease;
    }

    nav a:hover,
    nav a.active {
        color:var(--ink);
    }

    /* yellow underline that follows the section in view */
    .underline {
        position:absolute;
        left:14px;
        right:14px;
        bottom:2px;
        height:3px;
        border-radius:3px;
        background-color:var(--yellow);
    }

    .actions {
        display:flex;
        align-items:center;
        gap:8px;
    }

    .contact {
        padding:10px 18px;
        font-size:15px;
    }

    .icon {
        display:grid;
        place-items:center;
        width:40px;
        height:40px;
        border-radius:12px;
        background-color:var(--surface);
        box-shadow:var(--shadow-sm), inset 0 0 0 1px var(--line);
    }

    .icon img {
        width:20px;
        height:20px;
    }

    /* sun / moon switch, kept visible on phones next to the menu button */
    .theme {
        display:grid;
        place-items:center;
        width:40px;
        height:40px;
        padding:0;
        border:none;
        border-radius:12px;
        background-color:var(--surface);
        box-shadow:var(--shadow-sm), inset 0 0 0 1px var(--line);
        color:var(--ink);
        cursor:pointer;
        overflow:hidden;
    }

    .theme svg {
        width:20px;
        height:20px;
    }

    /* hamburger that turns into a cross */
    .menu {
        display:none;
        place-items:center;
        width:44px;
        height:44px;
        padding:0;
        border:none;
        border-radius:12px;
        background-color:var(--ink);
        color:var(--bg);
        cursor:pointer;
    }

    .menu svg {
        width:22px;
        height:22px;
        overflow:visible;
    }

    @media (max-width:980px) {
        .actions .icon {
            display:none;
        }
    }

    @media (max-width:820px) {
        nav,
        .actions {
            display:none;
        }

        .menu {
            display:grid;
        }

        .theme {
            width:44px;
            height:44px;
            margin-left:auto;
        }

        .inner {
            height:68px;
        }
    }
`

const Overlay = styled(motion.div)`
    position:fixed;
    inset:0;
    z-index:19;
    display:flex;
    flex-direction:column;
    padding:calc(68px + 24px) var(--gutter) 32px var(--gutter);
    background-color:var(--bg);
    background-image:radial-gradient(var(--dot) 1px, transparent 1px);
    background-size:22px 22px;
    overflow-y:auto;

    ul {
        list-style:none;
        margin:0;
        padding:0;
    }

    li a {
        display:block;
        padding:10px 0;
        font-size:clamp(34px, 10vw, 44px);
        font-weight:800;
        letter-spacing:-0.03em;
        line-height:1.15;
        text-decoration:none;
    }

    li a.active {
        text-decoration:underline;
        text-decoration-color:var(--yellow);
        text-decoration-thickness:6px;
        text-underline-offset:8px;
    }

    .bottom {
        display:flex;
        align-items:center;
        gap:8px;
        margin-top:auto;
        padding-top:32px;
    }

    .bottom .button {
        flex:1;
    }

    .icon {
        display:grid;
        place-items:center;
        flex-shrink:0;
        width:52px;
        height:52px;
        border-radius:14px;
        background-color:var(--surface);
        box-shadow:var(--shadow-sm), inset 0 0 0 1px var(--line);
    }

    .icon img {
        width:22px;
        height:22px;
    }
`

const menuList = {
    hidden:{},
    show:{ transition:{ staggerChildren:0.06, delayChildren:0.08 } },
}

const menuItem = {
    hidden:{ opacity:0, y:24 },
    show:{ opacity:1, y:0, transition:{ duration:0.4, ease:[0.2, 0.7, 0.2, 1] } },
}

// the section whose top has passed the upper part of the screen
function useActiveSection(ids) {
    const [active, setActive] = useState(null)

    useEffect(() => {
        let frame = 0

        const update = () => {
            frame = 0
            const line = window.innerHeight * 0.4
            let current = null
            ids.forEach((id) => {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top <= line) current = id
            })
            setActive(current)
        }

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update)
        }

        update()
        window.addEventListener('scroll', onScroll, { passive:true })
        window.addEventListener('resize', onScroll)
        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [ids])

    return active
}

const sectionIds = [...links.map((l) => l.id), 'contact']

export function Header() {
    const active = useActiveSection(sectionIds)
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive:true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const close = () => setOpen(false)
    const [theme, toggleTheme] = useTheme()
    const dark = theme === 'dark'

    // the new theme spreads from the button's centre
    const switchTheme = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        toggleTheme({ x:rect.left + rect.width / 2, y:rect.top + rect.height / 2 })
    }

    // keep the page still behind the open menu, and let Escape close it
    useEffect(() => {
        if (!open) return
        const onKey = (e) => e.key === 'Escape' && setOpen(false)
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKey)
        }
    }, [open])

    return (
        <>
            <Bar className={open ? 'open' : scrolled ? 'scrolled' : undefined}>
                <div className='container inner'>
                    <a href='#top' className='logo' onClick={close}>
                        <span aria-hidden='true'>EL</span>
                        Endry Lundy
                    </a>

                    <nav aria-label='Navigation principale'>
                        <ul>
                            {links.map((link) => (
                                <li key={link.id}>
                                    <a href={`#${link.id}`} className={active === link.id ? 'active' : undefined}>
                                        {link.label}
                                        {active === link.id && (
                                            <motion.span className='underline' layoutId='nav-underline' transition={{ type:'spring', stiffness:400, damping:34 }}/>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        className='theme'
                        onClick={switchTheme}
                        aria-label={dark ? 'Passer en mode clair' : 'Passer en mode sombre'}
                        title={dark ? 'Mode clair' : 'Mode sombre'}
                    >
                        <AnimatePresence mode='wait' initial={false}>
                            <motion.svg
                                key={theme}
                                viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
                                aria-hidden='true'
                                initial={{ y:20, rotate:-90, opacity:0 }}
                                animate={{ y:0, rotate:0, opacity:1 }}
                                exit={{ y:-20, rotate:90, opacity:0 }}
                                transition={{ duration:0.25, ease:[0.2, 0.7, 0.2, 1] }}
                            >
                                {dark ? (
                                    // sun: shown in dark mode, switches to light
                                    <>
                                        <circle cx='12' cy='12' r='4'/>
                                        <path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4'/>
                                    </>
                                ) : (
                                    <path d='M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z'/>
                                )}
                            </motion.svg>
                        </AnimatePresence>
                    </button>

                    <div className='actions'>
                        <a className='button button-yellow contact' href='#contact'>Me contacter</a>
                        <a className='icon' href={GITHUB_URL} target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                            <img src={GithubIcon} alt='' className={logoClass(GithubIcon)}/>
                        </a>
                        <a className='icon' href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                            <img src={LinkedInIcon} alt='' className={logoClass(LinkedInIcon)}/>
                        </a>
                    </div>

                    <button
                        className='menu'
                        aria-expanded={open}
                        aria-controls='mobile-menu'
                        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                        onClick={() => setOpen(!open)}
                    >
                        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' aria-hidden='true'>
                            <motion.line x1='4' x2='20' initial={false} animate={open ? { y1:12, y2:12, rotate:45 } : { y1:7, y2:7, rotate:0 }} style={{ originX:'50%', originY:'50%' }} transition={{ duration:0.25 }}/>
                            <motion.line x1='4' x2='20' y1='12' y2='12' initial={false} animate={{ opacity:open ? 0 : 1 }} transition={{ duration:0.15 }}/>
                            <motion.line x1='4' x2='20' initial={false} animate={open ? { y1:12, y2:12, rotate:-45 } : { y1:17, y2:17, rotate:0 }} style={{ originX:'50%', originY:'50%' }} transition={{ duration:0.25 }}/>
                        </svg>
                    </button>
                </div>

            </Bar>

            <AnimatePresence>
                {open && (
                    <Overlay
                        id='mobile-menu'
                        initial={{ opacity:0 }}
                        animate={{ opacity:1 }}
                        exit={{ opacity:0 }}
                        transition={{ duration:0.25 }}
                    >
                        <motion.ul variants={menuList} initial='hidden' animate='show'>
                            {links.map((link) => (
                                <motion.li key={link.id} variants={menuItem}>
                                    <a href={`#${link.id}`} className={active === link.id ? 'active' : undefined} onClick={close}>{link.label}</a>
                                </motion.li>
                            ))}
                        </motion.ul>
                        <motion.div className='bottom' variants={menuItem} initial='hidden' animate='show'>
                            <a className='button button-yellow' href='#contact' onClick={close}>Me contacter</a>
                            <a className='icon' href={GITHUB_URL} target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                                <img src={GithubIcon} alt='' className={logoClass(GithubIcon)}/>
                            </a>
                            <a className='icon' href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                                <img src={LinkedInIcon} alt='' className={logoClass(LinkedInIcon)}/>
                            </a>
                        </motion.div>
                    </Overlay>
                )}
            </AnimatePresence>
        </>
    )
}
