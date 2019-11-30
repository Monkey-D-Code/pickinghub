import productVariantsTypes from './ProductVariants.types';

const INITIAL_STATE = {
    VariantList : [],
    fetchingVariants : false,
    fetchingVariantsError : null,

}


const productVariantsReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case productVariantsTypes.GET_PRODUCT_VARIANTS_START:
            return {
                ...state,
                fetchingVariants : true,
                fetchingVariantsError : null,
            }
        case productVariantsTypes.GET_PRODUCT_VARIANTS_SUCCESS:
            return {
                ...state,
                fetchingVariants : false,
                VariantList : [...state.VariantList , action.payload],
            }
        case productVariantsTypes.GET_PRODUCT_VARIANTS_ERROR:
            return {
                ...state,
                fetchingVariants : false,
                fetchingVariantsError : action.payload,
                
            }
        default:
            return state;
    }
}

export default productVariantsReducer;