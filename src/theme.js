import { useCallback, useEffect, useState } from 'react'
import expressLogo from '@assets/stack-logos/express.svg'
import githubLogo from '@assets/stack-logos/github.svg'
import jwtLogo from '@assets/stack-logos/jwt.svg'
import mavenLogo from '@assets/stack-logos/maven.svg'
import mysqlLogo from '@assets/stack-logos/mysql.svg'
import swaggerLogo from '@assets/stack-logos/swagger.svg'
import githubIcon from '@assets/icons/github.svg'
import linkedinIcon from '@assets/icons/linkedin.svg'
import apiRest from '@assets/skill-icons/api-rest.svg'
import cleanArchitecture from '@assets/skill-icons/clean-architecture.svg'
import dry from '@assets/skill-icons/dry.svg'
import kiss from '@assets/skill-icons/kiss.svg'
import microservices from '@assets/skill-icons/microservices.svg'
import oauth2 from '@assets/skill-icons/oauth2.svg'
import signals from '@assets/skill-icons/signals.svg'
import solid from '@assets/skill-icons/solid.svg'
import yagni from '@assets/skill-icons/yagni.svg'

// black or near-black artwork that would vanish on the dark background
const darkArtwork = new Set([
    expressLogo, githubLogo, jwtLogo, mavenLogo, mysqlLogo, swaggerLogo, githubIcon, linkedinIcon,
    apiRest, cleanArchitecture, dry, kiss, microservices, oauth2, signals, solid, yagni,
])

export const logoClass = (src) => darkArtwork.has(src) ? 'invert-dark' : undefined

const KEY = 'theme'
const BAR = { light:'#FFFFFF', dark:'#0E0F17' }
const systemQuery = '(prefers-color-scheme: dark)'

const read = () => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'

function apply(theme) {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', BAR[theme])
}

const storedChoice = () => {
    try {
        return localStorage.getItem(KEY)
    } catch {
        return null
    }
}

export function useTheme() {
    const [theme, setTheme] = useState(read)

    // with no saved choice, follow the system setting as it changes
    useEffect(() => {
        apply(theme)
        const media = window.matchMedia(systemQuery)
        const onChange = (e) => {
            if (storedChoice()) return
            const next = e.matches ? 'dark' : 'light'
            apply(next)
            setTheme(next)
        }
        media.addEventListener('change', onChange)
        return () => media.removeEventListener('change', onChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // origin: the toggle's centre, where the new theme spreads out from
    const toggle = useCallback((origin) => {
        const next = read() === 'dark' ? 'light' : 'dark'
        try {
            localStorage.setItem(KEY, next)
        } catch {
            // private mode: the choice just isn't remembered
        }

        const swap = () => {
            apply(next)
            setTheme(next)
        }
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (!document.startViewTransition || reduce || !origin) return swap()

        const { x, y } = origin
        const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
        document.startViewTransition(swap).ready.then(() => {
            document.documentElement.animate(
                { clipPath:[`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                { duration:550, easing:'cubic-bezier(.2,.7,.2,1)', pseudoElement:'::view-transition-new(root)' },
            )
        })
    }, [])

    return [theme, toggle]
}
