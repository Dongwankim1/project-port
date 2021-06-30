import React from 'react';



const NavItem = ({keys,title}) =>{

    const handleOnClick = () =>{

    }

    return (
        <h2 key={keys} onClick={handleOnClick} className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'>{title}</h2>

    )
}

export default NavItem;