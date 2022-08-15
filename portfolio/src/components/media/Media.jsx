import React from 'react'
import './Media.css'


const data = [
    {
        id: 1,
        ytID: 'cERG17tWkeo'
    },
    {
        id: 2,
        ytID: '6F-kGR96oxI'
    },
    {
        id: 3,
        ytID: 'LOgTWI1YlcM'
    },
    {
        id: 4,
        ytID: 'OcfgEJS9kDQ'
    }
]
const Media = () => {
    return (
        <section id='media'>
            <h2>Media</h2>

            <div className="container media__container">
                {
                    data.map(({id,ytID}) => {
                        return (
                                <div className="video__container">
                                    <iframe
                                        key={id}
                                        width="853"
                                        height="480"
                                        src={`https://www.youtube.com/embed/${ytID}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                            </div>
                        )
                        
                    })
                }
                
            </div>
        </section>
    )
}

export default Media