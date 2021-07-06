import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/database';

export const getBoardData = () => async (dispatch) =>{
    try{
        const data = await api.Doclist();
        dispatch({type:FETCH_ALL,payload:data})
    }catch(error){
        console.log(error.message);
    }
}

export const createBoard = (category,title,content,startdate,completedate,base64) => async (dispatch)=>{
    try {
        const data = await api.setDoc(category,title,content,startdate,completedate,base64);
        console.log(data);
        await dispatch({type:CREATE,payload:data})
    } catch (error) {
        
    }
}