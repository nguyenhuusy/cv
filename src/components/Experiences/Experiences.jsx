import React, {Component} from 'react';
import './Experiences.scss';

class Experiences extends Component {
    render() {
        return (
            <div className="experiences">
                <div className="title">Experiences</div>
                <div className="experiences-body">
                    <div className="experiences-name">
                        <span className="experiences-name-text1">Frogsleap Foundation</span>
                        <span className="experiences-name-text2">President</span>
                    </div>
                    <div className="experiences-time">
                        <span className="experiences-time-text">2016</span>
                        <span className="experiences-time-text">-</span>
                        <span className="experiences-time-text">2020</span>
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
                        <span className="experiences-name-text1">INSPI Co.</span>
                        <span className="experiences-name-text2">Zenquiz Copy Writer</span>
                    </div>
                    <div className="experiences-time">
                        <span className="experiences-time-text">SEP 2016</span>
                        <span className="experiences-time-text">-</span>
                        <span className="experiences-time-text">APR 2017</span>
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
                        <span className="experiences-name-text1">Personal project</span>
                        
                    </div>
                    <div className="experiences-time">
                        <span className="experiences-time-text">ALL THE TIME</span>
                        
                    </div>
                    <div className="experiences-content">
                        <ul>
                            <li><a href="https://nguyenhuusy.github.io/html.github.io/">HTML Project</a></li>
                            <li><a href="https://nguyenhuusy.github.io/res.github.io/">Responsive Project</a></li>
                            <li><a href="https://nguyenhuusy.github.io/reactjs2.github.io/">React project</a></li>
                           
                        </ul>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Experiences;
