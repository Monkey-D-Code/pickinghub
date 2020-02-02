import userTypes from './User.types';
import backendAPI from '../../apis/backend';

export const sellerRegisterStart = () => {
    return {
        type : userTypes.SELLER_REGISTER_START,
    }
}

export const sellerRegisterSuccess = (Seller) => {
    return {
        type : userTypes.SELLER_REGISTER_SUCCESS,
        payload : Seller,
    }
}

export const sellerRegisterError = (error) => {
    return {
        type : userTypes.SELLER_REGISTER_ERROR,
        payload : error,
    }
}

export const sellerRegister = (newSeller)=>{
    return dispatch => {
        dispatch(sellerRegisterStart());
        backendAPI.post('/accounts/api/seller-register/' , newSeller)
            .then(res => dispatch(sellerRegisterSuccess(res.data)))
            .catch(err => dispatch(sellerRegisterError(err)));
    }
}

export const sellerLoginStart = ()=>{
    return {
        type : userTypes.SELLER_LOGIN_START,
    }
}

export const sellerLoginSuccess = Seller => {
    return {
        type : userTypes.SELLER_LOGIN_SUCCESS,
        payload : Seller,
    }
}

export const sellerLoginError = error => {
    return {
        type : userTypes.SELLER_LOGIN_ERROR,
        payload : error,
    }
}



export const sellerLogout = ()=>{
    return {
        type : userTypes.SELLER_LOGOUT,
    }
}

export const sellerTokenStart = ()=>{
    return {
        type : userTypes.SELLER_TOKEN_START,
    }
}

export const sellerTokenSuccess = (token)=>{
    return { 
        type : userTypes.SELLER_TOKEN_SUCCESS,
        payload : token,
    }

}

export const sellerTokenError = (error)=>{
    return {
        type : userTypes.SELLER_TOKEN_ERROR,
        payload : error,
    }
}

export const sellerProfileStart=()=>{
    return {
        type : userTypes.SELLER_PROFILE_START,

    }
}

export const sellerProfileSuccess = (seller)=>{
    return {
        type : userTypes.SELLER_PROFILE_SUCCESS,
        payload : seller,
    }
}

export const sellerProfileError = (error)=>{
    return {
        type : userTypes.SELLER_PROFILE_ERROR,
        payload : error,
    }
}

export const sellerLogin = authData =>{
    return dispatch => {
        dispatch(sellerTokenStart());
        backendAPI.post('/accounts/api/auth-token/',authData)
            .then(res=>{
                dispatch(sellerTokenSuccess(res.data.token));
                dispatch(sellerProfileStart());
                backendAPI.post('/accounts/api/seller-login/' , res.data)
                    .then(r=>dispatch(sellerProfileSuccess(r.data)))
                    .catch(e=>dispatch(sellerProfileError(e.message)))
            })
            .catch(err=>dispatch(sellerTokenError(err.response)));
    }
}

const updateProfileStart = ()=>{
    return {
        type : userTypes.UPDATE_PROFILE_START,
    }
}

const updateProfileSuccess = (newSeller)=>{
    return {
        type : userTypes.UPDATE_PROFILE_SUCCESS,
        payload : newSeller,
    }
}

const updateProfileError = (error)=>{
    return {
        type : userTypes.UPDATE_PROFILE_ERROR,
        payload : error,
    }
}

export const updateProfile = (newSellerData)=>{
    return dispatch=>{
        dispatch(updateProfileStart());
        backendAPI.post('/accounts/api/seller-update/',newSellerData)
            .then(res=>dispatch(updateProfileSuccess(res.data)))
            .catch(error=>dispatch(updateProfileError(error)))
    }
}