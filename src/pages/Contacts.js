import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contacts = () => {
    return (
        <div className="contacts-container">
            <h1>Would you like to contact me?</h1>
            <h2>Here is where you can find me:</h2>
            <ul>
                <li>
                   <a href="https://www.linkedin.com/in/mattia-biscontini-2971a5211/"
                   target="_blank" rel="noreferrer"><FaLinkedin />LinkedIn</a> 
                </li>
                <li>
                    <a href="https://github.com/Babbudoiu" 
                    target="_blank" rel="noreferrer"><FaGithub />GitHub</a>
                </li>
            </ul>
            <p>Or you can send me an email <a href="mailto:mattiabiscontini@gmail.com" target="_blank" rel="noreferrer">here</a></p>
        </div>
    )
}

export default Contacts;
