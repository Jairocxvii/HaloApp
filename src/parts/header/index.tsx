import React from 'react'
import image from '../../assets/images/header2.png'

function Header() {
    return (
        <header >
            <div>
                <img src={image} className="w-full object-contain" alt="initial" />
            </div>
            <nav>

            </nav>
        </header>
    )
}

export default Header
