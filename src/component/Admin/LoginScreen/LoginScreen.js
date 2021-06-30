import React,{useRef, useState,useEffect} from 'react';
import './LoginScreen.css';
import logo from '../../../assets/images/logo.png'
import { useHistory } from 'react-router-dom';

import { auth } from '../../../firebase';
const LoginScreen = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState('');
    const history = useHistory();


    const handleSignIn = (e)=>{
        e.preventDefault();


        auth.signInWithEmailAndPassword(
            email,
            password
        ).then((authUser)=>{
            setUser(authUser);
            history.push('/admin/dashBoard');
        }).catch((err)=>{
            alert(err.message)
        })
    }

    


    return <div className="loginScreen">
        <div className="loginScreen__background">
            <img className="loginScreen__logo" src={logo}></img>

         
            
        </div>

        <div className="loginScreen__body">
           
                <div className="SigninScreen">
                <form>
                    <div className="font-mono text-3xl">Sign In</div>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" type="password"></input>
                    <button type="submit" onClick={handleSignIn}>Sign In</button>
                    <h4></h4>
                </form>
            
            </div>
            
        </div>
      
    </div>
}


export default LoginScreen;