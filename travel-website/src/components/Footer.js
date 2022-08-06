import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receiver our best deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name='email' placeholder='name@company.com' 
                        className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Phone</Link>
                        <Link to='/'>Social Media</Link>
                        <Link to='/'>Fax</Link>
                        <Link to='/'>Email</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Travel Guides</h2>
                        <Link to='/'>Safety</Link>
                        <Link to='/'>Hotel Transfer</Link>
                        <Link to='/'>Hotel Stays</Link>
                        <Link to='/'>Visa Information</Link>
                        <Link to='/'>Insurance</Link>
                    </div>
                </div>
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVLA <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className='website-rights'>TRVLA &copy; 2022</small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link facebook" 
                            to='/' 
                            target='_blank' 
                            aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link 
                            className="social-icon-link twitter" 
                            to='/' 
                            target='_blank' 
                            aria-label='Twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link 
                            className="social-icon-link instagram" 
                            to='/' 
                            target='_blank' 
                            aria-label='Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer