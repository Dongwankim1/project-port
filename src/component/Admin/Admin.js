import React from 'react';
import LoginScreen from './LoginScreen/LoginScreen';

const Admin = () =>{

    const user = null;


    return (<div className="AdminMain">
        {!user?(
            <LoginScreen/>
        ):(
           "adminpage"
        )

        }
        
    </div>)
}


export default Admin;