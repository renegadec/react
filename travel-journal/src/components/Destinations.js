import React from 'react'


export default function Destinations(props) {
    return (
        <div className="div-container">
            <div className="destination-div">
                <img src={props.imageUrl} alt={props.location} className="destination-image" />
                <div className="info-container">
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <h3>{props.location}</h3>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    
                    <h3>{props.title}</h3>
                    <h4 className="date">
                        <span>{props.startDate}</span>
                        <span> - </span>
                        <span>{props.endDate}</span>
                    </h4>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}