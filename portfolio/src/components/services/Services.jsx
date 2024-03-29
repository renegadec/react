import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Gathering and evaluating user requirements</p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Illustrating design ideas using storyboards, process flows and sitemaps</p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Designing graphic user interface elements, like menus, tabs and widgets</p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Develop UI mockups and prototypes that clearly illustrate how sites function and look like</p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Identify and troubleshoot UX problems (e.g. responsiveness)</p>
                        </li>
                    </ul>
                </article>

                {/* END OF UI/UX DESIGN */}

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Writing well designed, testable, efficient code.</p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>
                                Creating website layout/user interfaces by using standard HTML/CSS practices
                            </p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Integrating data from various back-end services and databases</p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Gather and refine specifications and requirements based on technical needs.</p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Create and maintain software documentation.</p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Maintaining, expanding, and scaling your website</p>
                        </li>
                    </ul>
                </article>

                {/* END OF WEB DEVELOPMENT */}

                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Research industry-related topics.</p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Prepare well-structured drafts using digital publishing platforms.</p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Edit and proofread written pieces before publication.</p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Conduct keyword research and use SEO guidelines to optimize content</p>
                        </li>
                        <li>
                            <span>
                                <BiCheck className='service__list_icon' />
                            </span>
                            <p>Update websites as needed</p>
                        </li>
                    </ul>
                </article>

                {/* END OF CONTENT CREATION */}
            </div>
        </section>
    )
}

export default Services