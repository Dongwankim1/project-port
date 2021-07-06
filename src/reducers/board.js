import {FETCH_ALL,CREATE,UPDATE,DELETE} from '../constants/actionTypes';

export default (board = [],action)=>{
    switch (action.type) {
        case FETCH_ALL:
            console.log(action.payload);
            return action.payload;   
        case CREATE:
            console.log(action.payload);
            return [...board];   
        default:
            return board;
    }
}