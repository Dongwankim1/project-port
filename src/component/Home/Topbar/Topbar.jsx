import React from 'react';
import './Topbar.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Topbar = ({menuOpen,setMenuOpen}) =>{

    const handleMenu =() =>{
       setMenuOpen(!menuOpen)
    }

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">My Story.</a>
                    <div className="itemContainer">
                 

                    </div>
                </div>
                <div className="middle">
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
                    <div className="hamburger" onClick={handleMenu} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar