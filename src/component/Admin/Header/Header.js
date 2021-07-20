import React from 'react';
import logo from '../../../assets/images/logo.png'
import './Header.css';

const Header = ({user,logout}) => {
    return (
        <header className="AdminHeader">
           
                <img className="AdminHeader__logo" src={logo}></img>

                {user ? (<button onClick={logout} className='AdminHeader__button hover:bg-red-700 text-white font-bold py-2 px-4 border rounded'>
                    Logout
                </button>) : <div></div>}

         
        </header>
    )
}

export default Header;