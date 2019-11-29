import specialDealsTypes from './SpecialDeals.types';

const INITIAL_STATE = {
    specialDeals : [],
    loading : false,
}

const specialDealsReducer = (state = INITIAL_STATE , action)=>{
    switch(action.type){
        case specialDealsTypes.FETCH_SPECIAL_DEALS:
            return {
                ...state,
                specialDeals:action.payload,
            }

        case specialDealsTypes.SET_LOADING:
                return {
                    ...state,
                    loading:action.payload,
                }
                
        default:
            return state;
    }
}

export default specialDealsReducer;