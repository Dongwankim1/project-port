import React, { useState } from 'react';


import './Home.scss';
import Topbar from './Topbar/Topbar';
import Menu from './Menu/Menu';
import Intro from './Intro/Intro';
const Home = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                 <Intro />
                {/*<Portfolio />
                <Works />
                <Testimonials />
                <Contact /> */}
            </div>
        </div>
    )
}

export default Home;