import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import './Footer.css'
const Footer = () =>{
    return (
        <footer>
            <div className="Footer__wrap">
                <div className="Footer__Container">
                <PersonIcon className="icon"/>
                <span>010 9747 5200</span>
                </div>
                <div className="Footer__Container">
                <MailIcon className="icon"/>
                <span>zkdlwu94@gmail.com</span>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;