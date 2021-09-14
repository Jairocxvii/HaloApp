import React from 'react'

import { faXbox, faFacebook, faTwitter, faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function About() {
    return (
        <div>
            <h1>Hello</h1>
            <p>soy Jairo Becerra, soy Colombiano, programo desde el 2012, he trabajado con tecnologias .NET en diferentes tipos de proyectos con empresas del sector publico, actualmente estoy aprendiendo REACT, Clean Arquitecture y mejorando mi nivel de ingles.</p>

            <h3>Mis redes sociales</h3>
            <div>

                <div><a href="https://www.trueachievements.com/gamer/x5partan+Crossx"><FontAwesomeIcon className="" icon={faXbox} />  x5partan crossx</a></div>
                <div><a href="https://twitter.com/JairoCXVII">  <FontAwesomeIcon className="" icon={faTwitter} />  </a></div>
                <div><a href="https://www.facebook.com/JairoCxvii"> <FontAwesomeIcon className="" icon={faFacebook} />  </a></div>
                <div><a href="https://www.instagram.com/jairocxvii/"> <FontAwesomeIcon className="" icon={faInstagram} /> </a></div>
                <div><a href="https://www.twitch.tv/Jairocxvii"> <FontAwesomeIcon className="" icon={faTwitch} /> </a></div>
            </div>
        </div>
    )
}

export default About

