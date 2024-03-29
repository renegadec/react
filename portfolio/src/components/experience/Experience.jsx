import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details_icon' />
                            <div>
                                <h4>HTML 5</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details_icon' />
                            <div>
                                <h4>ReactJS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details_icon' />
                            <div>
                                <h4>CSS 3</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details_icon' />
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details_icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details_icon' />
                            <div>
                                <h4>Figma</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* END OF FRONTEND */}

                <div className="experience_backend">
                <h3>Backend Development + Tools</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details_icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details_icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details_icon' />
                            <div>
                                <h4>GIT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details_icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details_icon' />
                            <div>
                                <h4>SEO</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience