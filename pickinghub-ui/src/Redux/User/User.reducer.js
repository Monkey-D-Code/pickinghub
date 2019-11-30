import userTypes from './User.types';

const INITIAL_STATE = {
    activeCustomer : null,
    customerError : null,
    loading : false,
    token : null,
    tokenError : null,
    loginExpanded : false,

}


const userReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){

        case userTypes.SET_LOGIN_EXPANDED:
            return{
                ...state,
                loginExpanded : action.payload,
            }

        case userTypes.GET_AUTHTOKEN_START:
            return {
                ...state,
                loading:true,
                tokenError : null,
            }

        case userTypes.GET_AUTHTOKEN_SUCCESS:
            return {
                ...state,
                loading : false,
                token : action.payload,
            }

        case userTypes.GET_AUTHTOKEN_ERROR:
            return {
                ...state,
                loading : false,
                tokenError : action.payload,
            }

        case userTypes.GET_CUSTOMER_START:
            return {
                ...state,
                loading : true,
                customerError : null,
            }

        case userTypes.GET_CUSTOMER_SUCCESS:
            return{
                ...state,
                loading : false,
                activeCustomer : action.payload,
            }

        case userTypes.GET_CUSTOMER_ERROR:
            return {
                ...state,
                loading : false,
                customerError : action.payload,
            }

        case userTypes.LOGOUT:
            return {
                ...state,
                activeCustomer : null,
                customerError : null,
            }

        default:
            return state;
    }
}

export default userReducer;