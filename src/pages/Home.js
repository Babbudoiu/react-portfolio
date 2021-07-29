import React from 'react';
import ProfileImage from "../images/profile.jpeg";
import { FaGrinAlt, FaHtml5, FaCss3Alt, FaReact, FaNode } from 'react-icons/fa';
import { DiJavascript1 } from "react-icons/di";
import { SiMysql } from "react-icons/si";

const Home = () => {
     return (
        <div className="home-container">
            <img className="profile-img" src={ProfileImage} alt="" />
            <h1>Hello there!</h1>
            <h2>About myself...</h2>
            <p>My name is Mattia, originally from Italy. I started to study to become a developer less than a year ago.<br />
            I am currently looking for a job in the industry , anything will do to start, any offer will be greatly appreciated.</p>
            <h3>Current knowledge:</h3>
            <ul>
                <li>
                    <FaHtml5 className="html-icon"/>
                </li>
                <li>
                    <FaCss3Alt className="css-icon" />
                </li>
                <li>
                    <DiJavascript1 className="js-icon" />
                </li>
                <li>
                    <FaReact className="react-icon"/>
                </li>
                <li>
                    <FaNode className="node-icon" />
                </li>
                <li>
                    <SiMysql className="mysql-icon" />
                </li>
            </ul>
            <p>Check the projects section to see what I can do<FaGrinAlt className="smiley-icon" /></p>
          
        </div>
);
    
};


export default Home;
