import React,{Component} from 'react';
import './Header.scss';
class Header extends Component {
render() {
    return (
        <div className="header">
            <div className="header-text header-text-1">I'm Nguyen Huu Sy</div>
            <div className="header-text header-text-2">A Front-End developer</div>
            <div className="header-icon">
            <a href="https://www.facebook.com/nguyenhuu.sy" className="fab fa-facebook-f icon"></a>
            <a href="https://www.linkedin.com/in/s%E1%BB%B9-nguy%E1%BB%85n-0581b6191/" className="fab fa-linkedin-in icon"></a>
            <a href="https://github.com/nguyenhuusy" class="fab fa-github icon"></a>
            </div>    
        </div>
    )
}
}

export default Header;