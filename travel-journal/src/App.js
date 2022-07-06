import React from 'react'
import Navbar from './components/Navbar'
import Destinations from './components/Destinations'
import data from './data'

export default function App() {
    const places = data.map((destination) => {
        return (
        <Destinations 
            {...destination}
        /> 
        )
        
    })
    
    return (
        <div>
            <Navbar />
            {places}
        </div>
        
    )
}
