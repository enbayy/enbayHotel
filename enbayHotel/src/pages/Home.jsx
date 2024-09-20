import React from 'react'
import { rooms } from '../components/roomInfo'
import Rooms from '../components/Rooms'
import '../components/Rooms.css'

function Home() {
    return (
        <div>
            <div className='room-main'>
                {
                    rooms?.map((room) => (
                        <Rooms key={room.id} room={room} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home