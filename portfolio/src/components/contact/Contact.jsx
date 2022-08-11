import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsTelegram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cgayo1i', 'template_conm1j8', form.current, 'trW4WxslwbdGo-qCe')
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option_icon' />
                        <h4>Email</h4>
                        <h5>work@africoiner.com</h5>
                        <a href="mailto:work@africoiner.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsTelegram className='contact__option_icon' />
                        <h4>Telegram</h4>
                        <h5>AfriCoiner</h5>
                        <a href="https://t.me/africoiner" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option_icon' />
                        <h4>WhatsApp</h4>
                        <h5>AfriCoiner</h5>
                        <a href="https://api.whatsapp.com/send?phone=263783726458" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>

                {/* END OF CONTACT OPTIONS */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact