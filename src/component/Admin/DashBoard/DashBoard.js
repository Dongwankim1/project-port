import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './Dashboard.css';
import { auth } from '../../../firebase'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import BoardList from '../BoardList/BoardList';
const DashBoard = () => {
    const history = useHistory();
    const [user, setUser] = useState('');

    const authListner = () => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                history.push('/admin')
            }

        })
    }
    const logout = () => {
        auth.signOut();
        history.push('/admin')
    }
    useEffect(() => {

        authListner();
        /*
        if(!user) {
            history.push('/admin')
        }
        */
    }, [])

    return (<div className="DashScreen">
        <Header user={user} logout={logout} />

        <div className="DashBody">
            <Sidebar />
            <Main/>
           
       
        </div>
    </div>)
}

export default DashBoard;