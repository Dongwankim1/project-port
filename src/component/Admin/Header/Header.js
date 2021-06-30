import React from 'react';
import logo from '../../../assets/images/logo.png'
import './Header.css';

const Header = ({user,logout}) => {
    return (
        <header className="Header">
           
                <img className="Header__logo" src={logo}></img>

                {user ? (<button onClick={logout} className='Header__button hover:bg-red-700 text-white font-bold py-2 px-4 border rounded'>
                    Logout
                </button>) : <div></div>}

         
        </header>
    )
}

export default Header;