import React from 'react'

function Contact() {
    return (
        <div style={{ flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>İletişim
            </div>

            <div>
                <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} action="">
                    <input type="text" placeholder='İsminiz' />
                    <input type="text" placeholder='Soyadınız' />
                    <textarea style={{ width: '50%', height: '150px' }} placeholder='Metin Giriniz'></textarea>
                </form>
            </div>


        </div>
    )
}

export default Contact