import { useLayoutEffect, useRef } from 'react'
import { motion, useAnimationFrame, useReducedMotion } from 'framer-motion'

// two ribbons crossing on a wave: the Java side and the Angular side
const ribbons = [
    {
        id:'ribbon-java',
        d:'M -100 300 C 220 300, 360 90, 720 160 S 1220 330, 1540 120',
        band:'var(--yellow)',
        ink:'#12131F',
        words:['Java', 'Spring Boot', 'Spring Security', 'JPA', 'PostgreSQL', 'Docker'],
        speed:-60,
    },
    {
        id:'ribbon-angular',
        d:'M -100 110 C 260 60, 420 330, 760 270 S 1180 70, 1540 290',
        band:'var(--navy)',
        ink:'#FFFFFF',
        words:['Angular', 'TypeScript', 'RxJS', 'SCSS', 'HTML', 'Figma'],
        speed:60,
    },
]

const REPEAT = 6

function Ribbon({ ribbon, index }) {
    const offset = useRef(0)
    const unit = useRef(0)
    const textPath = useRef(null)
    const reduced = useReducedMotion()
    const phrase = ribbon.words.map((w) => `${w.toUpperCase()}  ✦  `).join('')

    // length of one repetition of the phrase, so the loop is seamless
    useLayoutEffect(() => {
        const text = textPath.current?.parentElement
        if (text) unit.current = text.getComputedTextLength() / REPEAT
    }, [])

    useAnimationFrame((_, delta) => {
        if (reduced || !unit.current || !textPath.current) return
        offset.current = (offset.current + (ribbon.speed * delta) / 1000) % unit.current
        // start one repetition early so the path is always full of text
        textPath.current.setAttribute('startOffset', offset.current - unit.current)
    })

    return (
        <g>
            <path id={ribbon.id} d={ribbon.d} fill='none'/>
            {/* soft shadow under the band */}
            <motion.path
                d={ribbon.d}
                fill='none'
                stroke='var(--ribbon-shadow)'
                strokeWidth='76'
                strokeLinecap='round'
                transform='translate(0 14)'
                initial={{ pathLength:0 }}
                animate={{ pathLength:1 }}
                transition={{ duration:1.4, ease:[0.65, 0, 0.35, 1], delay:0.5 + index * 0.25 }}
            />
            <motion.path
                d={ribbon.d}
                fill='none'
                stroke={ribbon.band}
                strokeWidth='76'
                initial={{ pathLength:0 }}
                animate={{ pathLength:1 }}
                transition={{ duration:1.4, ease:[0.65, 0, 0.35, 1], delay:0.5 + index * 0.25 }}
            />
            <motion.text
                fill={ribbon.ink}
                fontFamily='var(--font)'
                fontSize='30'
                fontWeight='800'
                letterSpacing='1'
                dominantBaseline='central'
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration:0.6, delay:1.7 + index * 0.25 }}
            >
                <textPath ref={textPath} href={`#${ribbon.id}`}>
                    {phrase.repeat(REPEAT)}
                </textPath>
            </motion.text>
        </g>
    )
}

export function Ribbons() {
    return (
        <svg
            className='ribbons'
            viewBox='0 0 1440 400'
            preserveAspectRatio='xMidYMid slice'
            role='img'
            aria-label='Java, Spring Boot, Spring Security, JPA, PostgreSQL côté back-end ; Angular, TypeScript, RxJS côté front-end'
        >
            {ribbons.map((ribbon, index) => <Ribbon key={ribbon.id} ribbon={ribbon} index={index}/>)}
        </svg>
    )
}

export default Ribbons
