import React, { useState } from 'react'
import './FormPage.css'

function FormPage() {

    const [data, setData] = useState('')
    const [name, setName] = useState('')

    const clearInput = () => {
        setData('')
    }

    const targetFunc = (e) => {
        setData(e.target.value)
    }

    const setClick = () => {
        setName(data)

    }

    const removeClick = () => {
        setName('')
        clearInput();
    }


    return (
        <div className='all'>
            <div className='contact'>İletişim</div>
            <div>
                <form className='form'>
                    <div className='info'>
                        <input value={data} onChange={targetFunc} className='input-text' type="text" placeholder='İsminiz' />
                        <input className='input-text' type="text" placeholder='Soyadınız' />
                    </div>
                    <input className='input-mail' type="email" placeholder='e-mail' />
                    <input className='input-number' type="number" placeholder='Telefon' />
                    <textarea className='textarea' placeholder='Metin Giriniz'></textarea>
                </form>
            </div>
            <div className='buttons'>
                <button onClick={removeClick} className='clear-button'>Temizle</button>
                <button onClick={setClick} className='send-button'>Gönder</button>
            </div>
            {name}
        </div>
    )
}

export default FormPage