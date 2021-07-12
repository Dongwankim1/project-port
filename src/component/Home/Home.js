import React from 'react';

import MainGrid from './MainGrid/MainGrid';

import background from '../../assets/images/background.jpg';
import './Home.css';
const Home = () =>{
    return (
        <div className="Home">
             
             <div className="Home__background">
                <img src={background}></img>
             </div>
             <MainGrid/>
            
             {/* side */}
        </div>
    )
}

export default Home;