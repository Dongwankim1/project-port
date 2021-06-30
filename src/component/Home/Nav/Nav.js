import React from 'react';
import NavItem from './NavItem/NavItem';

const Nav = () => {

    const initConfig = [{key:1,title:'All'},{key:2,title:'MAIN'},{key:3,title:'SIDE'}]

   


    return(
        <nav>
            <div className='flex justify-center m-5 items-center px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
                {initConfig.map((data,index)=> <NavItem keys={data.key} title={data.title} key={index}/>)}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 h-1/12"></div>
        </nav>
    )
}

export default Nav;