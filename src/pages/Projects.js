import React from 'react';
import drumkitImg from "../images/drumkit.png";
import diceGameImg from "../images/dicegame.png";
import calculatorImg from "../images/calculator.png"


const Projects = () => {
    return (
        <div>
        <h1 className="projects-h1">Some of my projects</h1>
        <div className="projects-container">
        <div className="card">
        <div className="face face1">
        <div className="content">
            <img src={drumkitImg} alt="" />
            <h3>Virtual Drumkit</h3>
        </div>
        </div>
        <div class="face face2">
        <div class="content">
        <p>Simple virtual drumkit challenge made while at CodeNation.</p>
        <a href="https://babbudoiu.github.io/DrumKitChallenge/" target="_blank" rel="noreferrer">Check the project</a>
        </div>
        </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src={diceGameImg} alt="" />
                    <h3>Dice Game</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Simple Dice Game with 2 players taking turns to play made while at CodeNation.</p>
                        <a href="https://babbudoiu.github.io/DiceGame-Challenge/" target="_blank" rel="noreferrer" >Check the project</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src={calculatorImg} alt="" />
                    <h3>Calculator</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Simple calculator made with react while at CodeNation</p>
                        <a href="https://babbudoiu.github.io/calculator-challenge/" target="_blank" rel="noreferrer">Check the project</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
  };


export default Projects;
