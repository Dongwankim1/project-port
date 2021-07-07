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
        await dispatch({type:CREATE,payload:data})
    } catch (error) {
        
    }
}

export const updateBoard = (id,category,title,content,startdate,completedate,base64) => async (dispatch)=>{
    try {

        const data = await api.DocUpdate(id,category,title,content,startdate,completedate,base64);
        await dispatch({type:UPDATE,payload:data})
    } catch (error) {
        
    }
}

export const deleteBoard =(id) => async (dispatch) =>{
    try {
        await api.DocDelete(id)
        await dispatch({type:DELETE,payload:id})
    } catch (error) {
        
    }
}