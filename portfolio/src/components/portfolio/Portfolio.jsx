import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpeg'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Travla Website - Traveling Agency Site',
        github:'https://github.com/renegadec/react/tree/main/travel-website',
        demo:'https://trvala.netlify.app/',
        tech: 'HTML, CSS, REACT'
    },
    {
        id: 2,
        image: IMG3,
        title: 'Movie Land App',
        github:'https://github.com/renegadec/react/tree/main/movieland',
        demo:'https://reactmovie-land.netlify.app',
        tech: 'HTML, CSS, REACT'
    },
    {
        id: 3,
        image: IMG2,
        title: 'Bitcoin Web Wallet',
        github:'#',
        demo:'#',
        tech: '-'
    },
    {
        id: 4,
        image: IMG2,
        title: 'Cake Shop E-commerce Website',
        github:'#',
        demo:'#',
        tech: '-'
    },
    {
        id: 5,
        image: IMG2,
        title: 'School Website',
        github:'#',
        demo:'#',
        tech: '-'
    },
    {
        id: 6,
        image: IMG2,
        title: 'Hip Hop Artist Website',
        github:'#',
        demo:'#',
        tech: '-'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo, tech}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item_image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <h4>{tech}</h4>
                                <div className="portfolio__item_cta">
                                    <a href={github} className='btn'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio