import React from 'react'
import './menu.scss'
export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")} >
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a href="#intro">Home</a></li>
            </ul>
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a href="#portfolio">Portfolio</a></li>
            </ul>
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a href="#works">Works</a></li>
            </ul>
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a href="#testimonials">Testimonials</a></li>
            </ul>
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}
