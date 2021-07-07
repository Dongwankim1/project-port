import {FETCH_ALL,CREATE,UPDATE,DELETE} from '../constants/actionTypes';

export default (board = [],action)=>{
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;   
        case CREATE:
            return [...board,action.payload];   
        case UPDATE:
            return [...board,action.payload];   
        case DELETE:
            return board.filter((item) =>item.id !== action.payload)
        default:
            return board;
    }
}