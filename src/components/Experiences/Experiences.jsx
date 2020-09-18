import React, {Component} from 'react';
import './Experiences.scss';

class Experiences extends Component {
    render() {
        return (
            <div className="experiences">
                <div className="title">Experiences</div>
                <div className="experiences-body">
                    <div className="experiences-name">
                        <span className="experiences-title">Hybrid Technologies</span>
                        <span className="experiences-subtitle">Front-End Developer</span>
                    </div>
                    <div className="experiences-time">
                        <span className="experiences-time__text">May 2020</span>
                        <span className="experiences-time__text">-</span>
                        <span className="experiences-time__text">Present</span>
                    </div>
                    <div className="experiences-content">
                        <ul>
                            <li>Project demo 360-Evalution: company and their staffs can evaluate their performance via questions and points system.</li>
                        </ul>
                    </div>
                </div>
                <div className="experiences-body">
                    <div className="experiences-name">
                        <span className="experiences-title">Frogsleap Foundation</span>
                        <span className="experiences-subtitle">President</span>
                    </div>
                    <div className="experiences-time">
                        <span className="experiences-time__text">2016</span>
                        <span className="experiences-time__text">-</span>
                        <span className="experiences-time__text">2020</span>
                    </div>
                    <div className="experiences-content">
                        <ul>
                            <li>Responsible in planning, implementing and finalizing projects by determining personnel, supplies, equipment, and other resources needed for the project.</li>
                            <li>Supervise training of project members</li>
                            <li>Report project progress and results to sponsors and partners</li>
                        </ul>
                        <ul> <span style={{fontWeight:"bold"}}>Achivement</span> 
                            <li>9 non-profit projects to support local people at Tra Vinh, Dong Nai, Binh Phuoc, Daklak, Lam Dong.</li>
                            <li>Accquire 6 funds of total 1.120.000.000 VND for non-profit projects</li>
                            <li>Representative of Youth and Sustainable Development Summit</li>
                        </ul>
                        <span style={{marginLeft:"24px"}}>Link fanpage: <a href="https://www.facebook.com/frogsleapvn/">https://www.facebook.com/frogsleapvn/</a></span>
                    </div>
                </div>
                <div className="experiences-body">
                    <div className="experiences-name">
                        <span className="experiences-title">INSPI Co.</span>
                        <span className="experiences-subtitle">Zenquiz Copy Writer</span>
                    </div>
                    <div className="experiences-time">
                        <span className="experiences-time__text">SEP 2016</span>
                        <span className="experiences-time__text">-</span>
                        <span className="experiences-time__text">APR 2017</span>
                    </div>
                    <div className="experiences-content">
                        <ul>
                            <li>Research industry-related topics</li>
                            <li>Write clear marketing copy to promote products</li>
                            <li>Coordinate with marketing and design teams to illustrate articles</li>
                            <li>Ensure all-around consistency (style, fonts, images and tone)</li>
                            <li>Update website content as needed</li>
                        </ul>
                        <p><a style={{marginLeft:"24px"}, {padding:"0"}} href="https://goo.gl/yoFQfv">https://goo.gl/yoFQfv</a></p>
                        <p><a style={{marginLeft:"24px"}, {padding:"0"}} href="https://goo.gl/sLFCXL">https://goo.gl/sLFCXL</a></p>
                    </div>
                </div>
                <div className="experiences-body">
                    <div className="experiences-name">
                        <span className="experiences-title">Personal project</span>
                        
                    </div>
                    <div className="experiences-time">
                        <span className="experiences-time__text">ALL THE TIME</span>
                        
                    </div>
                    <div className="experiences-content">
                        <ul>
                            <li>Project use html, css to build website with responsive<div><a href="https://nguyenhuusy.github.io/html.github.io/">HTML Project</a></div></li>
                            <li>Project insert table with random color and save on redux state <div><a href="https://nguyenhuusy.github.io/ColorfulTiles/">Colorful Tiles Project</a></div></li>
                           
                        </ul>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Experiences;
