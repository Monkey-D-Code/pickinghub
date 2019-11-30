import userTypes from './User.types';
import backendAPI from '../../apis/backend';


// GETTING CUSTOMER ACTIONS
export const getCustomerStart = ()=>{
    return {
        type : userTypes.GET_CUSTOMER_START,
    }
}

export const getCustomerSuccess = (customer)=>{
    return {
        type : userTypes.GET_CUSTOMER_SUCCESS,
        payload : customer,
    }
}

export const getCustomerError = (error)=>{
    return {
        type : userTypes.GET_CUSTOMER_ERROR,
        payload : error,
    }
}

export const getCustomer = (token)=>{
    return dispatch=>{
        dispatch(getCustomerStart());
        backendAPI.post('/accounts/api/customer-from-token/',{token})
            .then(response=>dispatch(getCustomerSuccess(response.data)))
            .catch(err=>dispatch(getCustomerError(err.response)));
    }
}


export const setLoginExpanded = (value)=>{
    return{
        type : userTypes.SET_LOGIN_EXPANDED,
        payload : value,
    }
}


// GETTIN TOKEN ACTIONS
export const getAuthTokenStart = ()=>{
    return {
        type : userTypes.GET_AUTHTOKEN_START,
    }
}


export const getAuthTokenSuccess = (activeUser)=>{
    return{
        type : userTypes.GET_AUTHTOKEN_SUCCESS,
        payload : activeUser,
    }
}

export const getAuthTokenError = (error)=>{
    return {
        type : userTypes.GET_AUTHTOKEN_ERROR,
        payload : error,
    }
}


export const getAuthToken = (auth)=>{
    return  dispatch=>{
        dispatch(getAuthTokenStart());
        backendAPI.post('/accounts/api/auth-token/',auth)
            .then(response=>{
                dispatch(getAuthTokenSuccess(response.data.token));
                dispatch(getCustomer(response.data.token));
            })
            .catch(error=>dispatch(getAuthTokenError(error.response)))
        
    }
}

export const logout = ()=>{
    return {
        type : userTypes.LOGOUT,
    }
}


