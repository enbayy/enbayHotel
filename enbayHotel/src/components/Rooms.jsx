import React from 'react'
import './Rooms.css'

function Rooms({ room }) {
    const { id, title, description, price, image } = room;
    return (
        <div className='room-all'>
            <div className='room'>
                <img className='image' src={image} />
                <h2 className='title'>{title}</h2>
                <span className='despriction'>{description}</span>
                <h3 className='price'>{price}</h3>
            </div>
        </div>
    )
}

export default Rooms