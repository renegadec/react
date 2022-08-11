import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Travla Website - Traveling Agency Site',
        github:'https://github.com/renegadec/react/tree/main/travel-website',
        demo:'https://trvala.netlify.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Cryptocurrency Dashboard and Live Price Tracker',
        github:'https://github.com/renegadec/react/tree/main/travel-website',
        demo:'https://trvala.netlify.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Bitcoin Web Wallet - Store your bitcoins',
        github:'https://github.com/renegadec/react/tree/main/travel-website',
        demo:'https://trvala.netlify.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Cake Shop E-commerce Website',
        github:'https://github.com/renegadec/react/tree/main/travel-website',
        demo:'https://trvala.netlify.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'School Website - Website Student application',
        github:'https://github.com/renegadec/react/tree/main/travel-website',
        demo:'https://trvala.netlify.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Hip Hop Artist Website - For booking artist',
        github:'https://github.com/renegadec/react/tree/main/travel-website',
        demo:'https://trvala.netlify.app/'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item_image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
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