import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            
            {/* PROJECT 1: Grow a Kampung (New Image) */}
            <div className="project">
                {/* ⬇️ UPDATE href WITH YOUR GITHUB LINK LATER */}
                <a href="#" target="_blank" rel="noreferrer">
                    <img 
                        src="https://img.itch.zone/aW1nLzM3NDg5ODQucG5n/original/p%2BlLaX.png" 
                        className="zoom" 
                        alt="Grow a Kampung Game" 
                        width="100%"
                    />
                </a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Grow a Kampung (Web Game)</h2></a>
                <p>Currently developing a gamified sustainable living web application where eco-friendly actions grow a digital garden. Built with <strong>Python Flask, SQL, and JavaScript</strong>.</p>
            </div>

            {/* PROJECT 2: Facial Recognition System */}
            <div className="project">
                <a href="https://github.com/poemsjnk/Integrated-Facial-Recognition" target="_blank" rel="noreferrer">
                    <img 
                        src="https://media.istockphoto.com/id/2143498093/photo/cctv-ai-facial-recognition-camera-authentificating-people-on-street-security-camera.jpg?s=612x612&w=0&k=20&c=a8DSEi6dKUVLV1T83-dAaT8BQYWBu78_cWu0B9YRVoI=" 
                        className="zoom" 
                        alt="Facial Recognition" 
                        width="100%"
                    />
                </a>
                <a href="https://github.com/poemsjnk/Integrated-Facial-Recognition" target="_blank" rel="noreferrer">
                    <h2>Facial Recognition Control System</h2>
                </a>
                <p>Engineered a security system using <strong>TinyML</strong> on an <strong>Arduino Nano 33 BLE Sense</strong>. The system detects and verifies individuals by name based on a custom image dataset.</p>
            </div>

            {/* PROJECT 3: NAO Robot (New Image) */}
            <div className="project">
                <a href="https://github.com/poemsjnk/Service-Robot-Application-School-Project-" target="_blank" rel="noreferrer">
                    <img 
                        src="https://www.polyu.edu.hk/ic/-/media/Department/IC/Content/Home/Facilities/2022-Facilities-Page-Revamp/ICT_NaoRobot.jpg?bc=ffffff&h=400&w=685&rev=d5cec69f53ad47cc9c75b63343ee91ac&hash=FE354525A861B6BB7C3D7D5A54CCB5CD" 
                        className="zoom" 
                        alt="NAO Robot" 
                        width="100%"
                    />
                </a>
                <a href="https://github.com/poemsjnk/Service-Robot-Application-School-Project-" target="_blank" rel="noreferrer">
                    <h2>NAO Robot Medical Assistant</h2>
                </a>
                <p>Programmed a <strong>NAO Humanoid Robot</strong> to conduct interactive medical diagnoses. Developed conversation logic to make the robot responsive to patient voice inputs using <strong>Python</strong>.</p>
            </div>

            {/* PROJECT 4: IoT Object Detection */}
            <div className="project">
                <a href="https://github.com/poemsjnk/Artificial-Intelligence-of-Things" target="_blank" rel="noreferrer">
                    <img 
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20240206120110/How-is-TinyML-used-for-Embedding-smaller-systems.webp" 
                        className="zoom" 
                        alt="IoT Sensor" 
                        width="100%"
                    />
                </a>
                <a href="https://github.com/poemsjnk/Artificial-Intelligence-of-Things" target="_blank" rel="noreferrer">
                    <h2>IoT Object Detection System</h2>
                </a>
                <p>Developed a proximity awareness feature using <strong>RGB sensors</strong> and <strong>C++</strong>. The system identifies objects entering a specific zone and triggers real-time visual alerts.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;