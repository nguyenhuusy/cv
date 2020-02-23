import React, {Component} from 'react';
import ava from './ava.png';
import './Aboutme.scss';
class Aboutme extends Component {
    render(){
        return(
            <div className="about-me">
                <div className="title"> About me</div>
                <div className="about-me-body">
                    <div className="about-me-ava">
                    <img className="ava" src="https://i.imgur.com/WwJvAnK.png" alt="ava"></img>
                    </div>
                    <div className="summary">
                        <span className="summary-title">Summary</span>
                        <span className="summary-content">Passionate about learning programming languages and making a better life by taking challenges. Having a background of being a solar panel engineer and 3 years of project management has improved my logical mindset and teamwork. I’m detail oriented and a patient person. Favorite quote: Life would be much easier if I had the source code</span>
                        {/* <i class="fas fa-file-download"></i> */}
                        <button className="summary-button fas fa-file-download"><a href="CV-NguyenHuuSy.pdf" style={{color:"white"}} download>My CV</a></button>
                    </div>
                    <div className="contact-infor">
                        <span className="contact-infor-title"> Contact infor</span>
                        <span className="contact-infor-text"> <i class="fas fa-map-marker-alt"></i> Binh Tan dist., HCMC</span>
                        <span className="contact-infor-text"> <i class="fas fa-phone-square-alt"></i> +84 97 42 39 122</span>
                        <span className="contact-infor-text"> <i class="fas fa-envelope"></i> sy.huunguyen96@gmail.com</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;