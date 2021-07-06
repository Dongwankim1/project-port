import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Dashboard.css';
import { auth } from '../../../firebase'
import Header from '../Header/Header';
import Main from '../Main/Main';
import TableBoard from '../TableBoard/TableBoard';
import { getBoardData } from '../../../actions/board';
import { useDispatch } from 'react-redux';
const DashBoard = () => {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [currentId,setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const authListner = () => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
                dispatch(getBoardData());
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
    }, [])

    return (<div className="DashScreen">
        <Header user={user} logout={logout} />
        <div className="DashBody">
            <div className="DashTableBody">
                <TableBoard setCurrentId={setCurrentId} />
            </div>
            <div className="DashMainBody">

                <Main currentId={currentId} setCurrentId={setCurrentId} />


            </div>
        </div>
    </div>)
}

export default DashBoard;