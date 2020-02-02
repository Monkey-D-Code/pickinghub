import subletTypes from './Sublet.types';
import { act } from 'react-dom/test-utils';

const INITIAL_STATE = {
    subletList : [],
    createdSublet : null,
    subletCreateError : null,
    creatingSublet : false,
}



const subletReducer = (state = INITIAL_STATE , action)=>{
    switch(action.type){
        case subletTypes.CREATE_SUBLET_START:
            return {
                ...state,
                creatingSublet : true,
                createdSublet : null,
                subletCreateError : null,
            }
        case subletTypes.CREATE_SUBLET_SUCCESS:
            return {
                ...state,
                createdSublet : action.payload,
                subletList : [...state.subletList , action.payload],
                creatingSublet : false,
            }
        case subletTypes.CREATE_SUBLET_ERROR:
            return {
                ...state,
                subletCreateError : action.payload,
                creatingSublet : false,
            }
        default:
            return state;
    }
}

export default subletReducer;