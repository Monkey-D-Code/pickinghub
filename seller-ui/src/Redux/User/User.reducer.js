import userTypes from './User.types';

const INITIAL_STATE = {
    Seller : null,
    sellerloading : false,
    sellerError : null,

    sellerToken : null,
    tokenError : null,

    updateSuccess : false,
    sellerUpdateError : null,

    oldPasswordConfirmed : false,
    passwordChangeSuccess : false,
    passwordChangeError : null,
}


const userReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){

        case userTypes.UPDATE_PROFILE_START:
            return {
                ...state ,
                sellerUpdateError : null,
                sellerloading : true,
                updateSuccess:false,
            }

        case userTypes.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                Seller : action.payload,
                sellerloading : false,
                updateSuccess : true,
            }

        case userTypes.UPDATE_PROFILE_ERROR:
            return {
                ...state,
                sellerUpdateError : action.payload,
                sellerloading : false,
            }

        case userTypes.SELLER_TOKEN_START:
            return {
                ...state,
                sellerloading : true,
                tokenError : null,
                sellerError : null,
                
            }
        case userTypes.SELLER_TOKEN_SUCCESS : 
            return {
                ...state,
                sellerToken : action.payload,
                sellerloading : false,
            }
        case userTypes.SELLER_TOKEN_ERROR : 
            return {
                ...state,
                tokenError : action.payload,
                sellerloading : false,
            }
        case userTypes.SELLER_PROFILE_START:
            return {
                ...state,
                sellerloading : true,
                Seller : null,
                sellerError : null,
            }
        case userTypes.SELLER_PROFILE_SUCCESS:
            return {
                ...state,
                sellerloading : false,
                Seller : action.payload,
            }
        
        case userTypes.SELLER_PROFILE_ERROR:
            return {
                ...state,
                sellerloading : false,
                sellerError : action.payload,
            }
        
        case userTypes.SELLER_LOGOUT:
            return {
                ...state,
                Seller : null,
                sellerToken : null,
                tokenError : null,
                sellerError : null,
            }
        case userTypes.SELLER_LOGIN_START:
            return {
                ...state,
                sellerloading : true,
                sellerError : null,
            }

        case userTypes.SELLER_LOGIN_SUCCESS:
            return {
                ...state,
                sellerloading : false,
                Seller : action.payload,
            }

        case userTypes.SELLER_LOGIN_ERROR:
            return {
                ...state,
                sellerloading : false,
                sellerError : action.payload,
            }

        case userTypes.SELLER_REGISTER_START:
            return {
                ...state,
                sellerloading : true,
            }

        case userTypes.SELLER_REGISTER_SUCCESS:
            return {
                ...state,
                sellerloading : false,
                Seller : action.payload,
                sellerError : null,

            }

        case userTypes.SELLER_REGISTER_ERROR:
            return {
                ...state,
                sellerloading : false,
                sellerError : action.payload,
            }

        default:
            return state;
    }
}

export default userReducer;