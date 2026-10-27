import styled from 'styled-components'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT_EMAIL } from '../data'

const Card = styled(motion.div)`
    position:relative;
    max-width:720px;
    margin:0 auto;

    .glow {
        position:absolute;
        inset:10% -8% -4% -8%;
        z-index:-1;
        border-radius:48px;
        background:linear-gradient(120deg, #FFE97A, #FFD1A6);
        transform:rotate(2deg);
        opacity:var(--glow-opacity);
    }

    .browser {
        overflow:visible;
    }

    form {
        display:grid;
        grid-template-columns:repeat(2, minmax(0, 1fr));
        gap:18px 16px;
        padding:clamp(20px, 4vw, 36px);
    }

    .field {
        display:flex;
        flex-direction:column;
        gap:8px;
    }

    .field.full {
        grid-column:1 / -1;
    }

    label {
        font-size:14px;
        font-weight:700;
    }

    input,
    textarea {
        width:100%;
        padding:13px 16px;
        font-family:var(--font);
        font-size:16px;
        color:var(--ink);
        background-color:var(--field);
        border:none;
        border-radius:12px;
        box-shadow:inset 0 0 0 1px var(--line);
        transition:box-shadow .2s ease, background-color .2s ease;
    }

    input::placeholder,
    textarea::placeholder {
        color:#9A9DAE;
    }

    input:focus-visible,
    textarea:focus-visible {
        outline:none;
        background-color:var(--surface);
        box-shadow:inset 0 0 0 2px var(--ink), 0 0 0 4px var(--yellow-soft);
    }

    textarea {
        min-height:150px;
        resize:vertical;
    }

    .submit {
        grid-column:1 / -1;
        justify-self:start;
        min-width:210px;
        overflow:hidden;
    }

    .submit.sent {
        background-color:#16A34A;
    }

    @media (max-width:520px) {
        form {
            grid-template-columns:minmax(0, 1fr);
        }
    }
`

export function ContactSection() {
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
        setTimeout(() => setSent(false), 4000)
        const data = new FormData(e.target)
        const subject = `Contact portfolio — ${data.get('fullname')}`
        const body = `${data.get('message')}\n\n${data.get('fullname')} — ${data.get('email')}`
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    return (
        <section id='contact' className='section container'>
            <div className='section-head'>
                <span className='kicker'>Contact</span>
                <h2>Un projet en tête&nbsp;? Parlons-en.</h2>
                <p>Décrivez votre besoin en quelques lignes. Le message s’ouvre dans votre messagerie, prêt à envoyer.</p>
            </div>

            <Card
                initial={{ opacity:0, y:40, rotate:-1 }}
                whileInView={{ opacity:1, y:0, rotate:0 }}
                viewport={{ once:true, margin:'-80px' }}
                transition={{ duration:0.7, ease:[0.2, 0.7, 0.2, 1] }}
            >
                <div className='glow' aria-hidden='true'></div>
                <div className='browser'>
                    <div className='browser-bar'><span>nouveau message</span></div>
                    <form onSubmit={handleSubmit}>
                        <div className='field'>
                            <label htmlFor='fullname'>Nom complet</label>
                            <input type='text' id='fullname' name='fullname' autoComplete='name' placeholder='Marie Dupont' required/>
                        </div>
                        <div className='field'>
                            <label htmlFor='email'>Adresse email</label>
                            <input type='email' id='email' name='email' autoComplete='email' placeholder='marie@exemple.fr' required/>
                        </div>
                        <div className='field full'>
                            <label htmlFor='message'>Votre projet</label>
                            <textarea id='message' name='message' placeholder='Je cherche quelqu’un pour…' required></textarea>
                        </div>
                        <motion.button
                            type='submit'
                            className={sent ? 'button button-dark submit sent' : 'button button-dark submit'}
                            whileTap={{ scale:0.96 }}
                        >
                            <AnimatePresence mode='wait' initial={false}>
                                <motion.span
                                    key={sent ? 'sent' : 'idle'}
                                    initial={{ y:18, opacity:0 }}
                                    animate={{ y:0, opacity:1 }}
                                    exit={{ y:-18, opacity:0 }}
                                    transition={{ duration:0.2 }}
                                >
                                    {sent ? '✓ Messagerie ouverte' : 'Écrire le message'}
                                </motion.span>
                            </AnimatePresence>
                        </motion.button>
                        <p className='sr-only' aria-live='polite'>{sent ? 'Votre messagerie s’est ouverte avec le message prêt à envoyer.' : ''}</p>
                    </form>
                </div>
            </Card>
        </section>
    )
}

export default ContactSection
