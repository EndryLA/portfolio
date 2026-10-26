import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { kpis } from '../data'

const List = styled(motion.ul)`
    display:grid;
    grid-template-columns:repeat(3, minmax(0, 1fr));
    gap:16px;
    list-style:none;
    margin:0;
    padding:0;

    li {
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:4px;
        padding:clamp(24px, 3.4vw, 36px) 20px;
        border-radius:28px;
        background-color:var(--bg);
        box-shadow:var(--shadow-md), inset 0 0 0 1px var(--line);
        text-align:center;
    }

    li:first-child {
        background-color:var(--yellow);
        box-shadow:var(--shadow-md);
    }

    strong {
        font-size:clamp(44px, 5.6vw, 64px);
        font-weight:800;
        letter-spacing:-0.04em;
        line-height:1;
        /* digits keep the same width while counting */
        font-variant-numeric:tabular-nums;
    }

    span {
        font-size:16px;
        font-weight:700;
        color:var(--muted);
    }

    li:first-child span {
        color:rgba(18,19,31,.75);
    }

    /* phones: one row per figure, number on the left */
    @media (max-width:560px) {
        grid-template-columns:minmax(0, 1fr);
        gap:10px;

        li {
            flex-direction:row;
            justify-content:flex-start;
            gap:16px;
            padding:18px 22px;
            border-radius:22px;
            text-align:left;
        }

        strong {
            /* wide enough for "100%", so the labels line up */
            min-width:3.1em;
            font-size:40px;
        }
    }
`

const itemIn = {
    hidden:{ opacity:0, y:24 },
    show:{ opacity:1, y:0, transition:{ duration:0.55, ease:[0.2, 0.7, 0.2, 1] } },
}

// counts from 0 to the value the first time it scrolls into view
function Counter({ value, suffix }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once:true, margin:'0px 0px -40px 0px' })
    const reduce = useReducedMotion()
    const [shown, setShown] = useState(reduce ? value : 0)

    useEffect(() => {
        if (!inView || reduce) return
        const controls = animate(0, value, {
            duration:1.4,
            ease:[0.16, 1, 0.3, 1],
            onUpdate:(v) => setShown(Math.round(v)),
        })
        return () => controls.stop()
    }, [inView, reduce, value])

    return <strong ref={ref}>{shown}{suffix}</strong>
}

export default function KpiSection() {
    return (
        <section className='container' aria-label='Chiffres clés'>
            <List
                initial='hidden'
                whileInView='show'
                viewport={{ once:true, margin:'0px 0px -40px 0px' }}
                variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.1 } } }}
            >
                {kpis.map((kpi) => (
                    <motion.li key={kpi.label} variants={itemIn}>
                        <Counter value={kpi.value} suffix={kpi.suffix}/>
                        <span>{kpi.label}</span>
                    </motion.li>
                ))}
            </List>
        </section>
    )
}
