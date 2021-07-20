import React, { useState } from 'react'
import './DevStuff.css';
import * as api from '../../../api/database'

export default function DevStuff() {

    const [devid,setDevId] = useState('');
    const [devurl,setDevurl] = useState('');


    const handleOnClick = async () =>{
        await api.setDevDoc(devid,devurl);
        setDevId('');
        setDevurl('');
    }

    return (
        <div className="DevStuff">
            <input onChange={(e)=>setDevId(e.target.value)}></input>
            <input onChange={(e)=>setDevurl(e.target.value)}></input>

            <button onClick={handleOnClick}>등록</button>
        </div>
    )
}
