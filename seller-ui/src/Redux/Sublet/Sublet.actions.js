import subletTypes from './Sublet.types';
import backendAPI from '../../apis/backend';


const createSubletStart = ()=>{
    return {
        type : subletTypes.CREATE_SUBLET_START,
    }
}

const createSubletSuccess = newSublet=>{
    return {
        type : subletTypes.CREATE_SUBLET_SUCCESS,
        payload : newSublet,
    }
}

const createSubletError = err =>{
    return {
        type : subletTypes.CREATE_SUBLET_ERROR,
        payload : err,
    }
}

export const createSublet = data =>{
    return dispatch=>{
        dispatch(createSubletStart());
        backendAPI.post('/shop/api/sublet/create/' , data)
            .then(res=>dispatch(createSubletSuccess(res.data)))
            .catch(err=>dispatch(createSubletError(err.response)))
    }
}