import React, {Component} from 'react';
import './Education.scss';

class Education extends Component {
    render() {
        return (
            <div className="experiences">
                <div className="title">Education</div>
                <div className="experiences-body education-body">
                <div className="experiences-time education-time">
                        <span className="experiences-time-text">2014</span>
                        <span className="experiences-time-text">-</span>
                        <span className="experiences-time-text">2019</span>
                    </div>
                    <div className="experiences-name education-name">
                        <span className="experiences-name-text1">Bach Khoa university</span>
                        <span className="experiences-name-text2">Telecommunication</span>
                    </div>
                    
                    <div className="experiences-content education-content">
                        <span>Graduation essay: <a href="https://www.youtube.com/watch?v=sfcu4cgr6w8">Project IoT Solar Tracking</a></span>
                        <span>A system follow and move the PV modules to face the sun.</span>
                        
                    </div>
                </div>
                <div className="experiences-body education-body-2 ">
                <div className="experiences-time education-time">
                        <span className="experiences-time-text education-time-text">SEP 2019</span>
                        <span className="experiences-time-text education-time-text">-</span>
                        <span className="experiences-time-text education-time-text">FEB 2020</span>
                    </div>
                    <div className="experiences-name education-name ">
                        <span className="experiences-name-text1">NORDIC CODER CENTER</span>
                        <span className="experiences-name-text2">Front-End student</span>
                    </div>
                    
                    <div className="experiences-content education-content">
                        <span>Pure html, css, javascript.</span>
                        <span>Working with Github, ReactJS, API, local storage, redux.</span>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Education;
