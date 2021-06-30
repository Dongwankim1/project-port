import React from 'react';
import './Sidebar.css';
import Button from '@material-ui/core/Button';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header"></div>
           
            <div className="sidebar__main">
            <h1>등록된 내용</h1>
            </div>
        </div>
    )
}


export default Sidebar;