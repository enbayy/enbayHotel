import React from 'react'
import './FormPage.css'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


function Header() {
    return (
        <div className='header'>

            <div className='head'>
                <IoIosMail className='icon-mail' />
                <h1> Email: 1enesbayar@gmail.com</h1>
            </div>
            <div className='head'>
                <FaPhoneAlt className='icon-phone' />
                <h1>Tel no: 0552 231 2086</h1>
            </div>
        </div>
    )
}

export default Header