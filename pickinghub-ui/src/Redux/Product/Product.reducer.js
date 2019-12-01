import productTypes from './Product.types';

const INITIAL_STATE = {
    selectedProduct : null,
    gettingProduct : false,
    productError : null,
    mainProductImage : null,
}


const productReducer = (state = INITIAL_STATE , action)=>{

    switch(action.type){
        case productTypes.GET_PRODUCT_START:
            return {
                ...state,
                gettingProduct : true,
                productError : null,
            }

        case productTypes.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                gettingProduct : false,
                selectedProduct : action.payload,
            }
        
        case productTypes.GET_PRODUCT_ERROR:
            return {
                ...state,
                gettingProduct : false,
                productError : action.payload,
            }

        case productTypes.SET_MAIN_PRODUCT_IMAGE:
            return {
                ...state,
                mainProductImage  : action.payload,
            }

        default:
            return state;
    }
}

export default productReducer;