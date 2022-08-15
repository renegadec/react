import React from 'react'
import './Navbar.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineYoutube } from 'react-icons/ai'
import { MdOutlineMiscellaneousServices, MdWorkOutline } from 'react-icons/md'
import { RiMessage2Line } from 'react-icons/ri'
import { VscWorkspaceTrusted } from 'react-icons/vsc'

const Navbar = () => {

    const [activeNav, setActiveNav] = React.useState('#')

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><VscWorkspaceTrusted /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline /></a>
            <a href="#media" onClick={() => setActiveNav('#media')} className={activeNav === '#media' ? 'active' : ''}><AiOutlineYoutube /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Line /></a>
        </nav>
    )
}

export default Navbar
