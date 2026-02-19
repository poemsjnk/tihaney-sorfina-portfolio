import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "C++",
    "TensorFlow",
    "TinyML",
    "OpenMV",
    "Arduino",
   
];

const labelsSecond = [
    "Python (Pandas)",
    "SQL",
    "Power BI",
    "Excel",
    "R",
    "Tableu",
    
];

const labelsThird = [
    "Java",
    "Kotlin",
    "C",
    "System Design",
    "Agile",
    "Git",
    
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Artificial Intelligence & Robotics</h3>
                    <p>I specialize in developing embedded AI solutions and interactive robotics. My background includes building facial recognition systems using TinyML on Arduino hardware. I have also programmed NAO robots to perform automated medical diagnoses and responsive conversation logic.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Data Science & Analytics</h3>
                    <p>I bridge the gap between technical data and business strategy to drive decision-making. My experience at Maestro-Net involved managing end-to-end data pipelines, from cleaning raw inputs to visualizing sales trends. I am proficient in translating complex datasets into clear, actionable financial insights for stakeholders.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Software Engineering</h3>
                    <p>I am a versatile developer with fluency in multiple programming paradigms, including Java, Kotlin, and C. My engineering foundation covers object-oriented design as well as low-level system logic for IoT sensors. I apply Agile methodologies to ensure efficient system design and requirements gathering.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;