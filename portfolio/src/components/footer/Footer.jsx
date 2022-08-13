import React from 'react'
import './Footer.css'
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {SiTwitter} from 'react-icons/si'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Confidence Nyirenda</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com/confidence.nyirenda.9"><BsFacebook /></a>
                <a href="https://instagram.com/confidence_nyirenda"><BsInstagram /></a>
                <a href="https://linkedin.com/in/confidencenyirenda/"><BsLinkedin /></a>
                <a href="https://twitter.com/crnyirenda"><SiTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; AfriCoiner. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer