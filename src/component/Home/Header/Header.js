import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from "../../../assets/images/logo.png"
import HeaderItem from "./HeaderItem/HeaderItem";

import './Header.css'

const Header = () =>{
    return(
        <header className='Header flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className="wrapper">
            <div className="left">
                <a href="https://github.com/Dongwankim1">
                <FacebookIcon fontSize="large"/>
                </a>
                <a href="https://github.com/Dongwankim1">
                <GitHubIcon fontSize="large"/>
                </a>
                <a href="https://www.linkedin.com/in/%EB%94%94%EC%B0%8C-hip-05a2791a2/">
                <LinkedInIcon fontSize="large"/>
                </a>

            </div>
            <div className="right">
                <p className="logo">
                Dizzy
                </p>
            </div>
        </div> 
        </header>
    )
}


export default Header;

