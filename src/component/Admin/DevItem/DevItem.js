import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import { InputLabel } from '@material-ui/core';
import './DevItem.css'
export default function DevItem({title,keys,devstuff,setDevstuff}) {
 
    const hadnleDevItemDel =() =>{
        

        setDevstuff(devstuff.filter(item=> item!==title));
    }

    return (
        <div className="DevItem">
            <InputLabel className="DevItem__Input">{title}</InputLabel>
            <CancelIcon onClick={hadnleDevItemDel}/>
        </div>
    )
}
