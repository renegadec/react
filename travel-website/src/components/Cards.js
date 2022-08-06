import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='/images/img-9.jpg'
                        text="Explore the hidden waterfall in Nyanga.  It is hidden gem in the Eastern Highlands"
                        label="Adventure"
                        path='/services'
                        />
                        <CardItem 
                        src='/images/img-2.jpg'
                        text="Kariba Dam Offers a variety of activities for any type of traveller"
                        label="Luxury"
                        path='/services'
                        />
                        <CardItem 
                        src='/images/img-3.jpg'
                        text="Explore the hidden waterfall in Nyanga.  It is hidden gem in the Eastern Highlands"
                        label="Adventure"
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='/images/img-4.jpg'
                        text="Get active through a different life style and sporting. "
                        label="Activity"
                        path='/services'
                        />
                        <CardItem 
                        src='/images/img-5.jpg'
                        text="Get a hang of Harare's night life and enjoy the outstanding bars and cafe's that are open during the night"
                        label="Night Life"
                        path='/services'
                        />
                        <CardItem 
                        src='/images/img-6.jpg'
                        text="Visit the downtown part of town to get an understanding of the history of the city"
                        label="Tour"
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards