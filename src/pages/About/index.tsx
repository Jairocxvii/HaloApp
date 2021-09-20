import React from 'react'

import { faXbox, faFacebook, faTwitter, faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function About() {
    return (
        <div className="w-4/5 md:w-2/4 m-auto mt-5 bg-opacity-10 bg-white rounded-md p-10">
            <div >
                <h1 className="text-xl text-gray-100">Hello</h1>
                <p className="text-justify|">soy Jairo Becerra, Colombiano, programo desde el 2012, he trabajado con tecnologias .NET en diferentes proyectos con empresas del sector publico y privado, actualmente estoy aprendiendo REACT, Clean Arquitecture y mejorando mi nivel de ingles.</p>


            </div>
            <div className="h-10 my-3.5">
                <h3 className="text-xl text-gray-100">Follow ME</h3>
                <div className="grid grid-cols-5 w-2/12 mt-5 ml-5">
                    <a className="bg-red-900  h-10 w-10" href="https://www.trueachievements.com/gamer/x5partan+Crossx" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="px-2" icon={faXbox} /></a>
                    <a className="bg-red-900  h-10 w-10" href="https://twitter.com/JairoCXVII" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon className="" icon={faTwitter} />   </a>
                    <a className="bg-red-900  h-10 w-10" href="https://www.facebook.com/JairoCxvii" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className="" icon={faFacebook} />  </a>
                    <a className="bg-red-900  h-10 w-10" href="https://www.instagram.com/jairocxvii/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className="" icon={faInstagram} /> </a>
                    <a className="bg-red-900  h-10 w-10" href="https://www.twitch.tv/Jairocxvii" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className="" icon={faTwitch} />   </a>
                </div>
            </div>
        </div>
    )
}

export default About

