import React, {Component} from 'react';
import './Skills.scss';

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="title">Skills</div>
                <div className="skills-body">
                    <div className="skills-body-item">
                        <span className="skills-body-item-title">Programming language</span>
                        <ul className="nav-main">
                            <li className="nav-item nav-item-html">HTML</li>
                            <li className="nav-item nav-item-css">CSS</li>
                            <li className="nav-item nav-item-javascript">JavaScript</li>
                        </ul>
                        <span className="skills-body-item-title">Frameworks & platforms</span>
                        <ul className="nav-main">
                            <li className="nav-item nav-item-reactjs">ReactJS</li>
                            <li className="nav-item nav-item-jquery">jQuery, CSS</li>
                            <li className="nav-item nav-item-webapi">WebAPI</li>
                        </ul>
                    </div>
                    <div className="skills-body-item">
                        <span className="skills-body-item-title">Version control</span>
                        <ul className="nav-main">
                            <li className="nav-item nav-item-git">Git</li>
                        </ul>
                        <span className="skills-body-item-title">Others</span>
                        <ul className="nav-main">
                            <li className="nav-item nav-item-video">Video editor</li>
                            <li className="nav-item nav-item-photoshop">Photoshop</li>
                        </ul>
                    </div>
                    <div className="skills-body-item">
                        <span className="skills-body-item-title">Soft skills</span>
                        <ul className="nav-main">
                            <li className="nav-item nav-item-communication">Communication</li>
                            <li className="nav-item nav-item-public-speaking">Public speaking </li>
                            <li className="nav-item nav-item-teamwork">Teamwork</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
