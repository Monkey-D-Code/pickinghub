import productTypes from './Products.types';

const INITIAL_STATE = {
    allProducts : null,
    allProductsLoading : false,
    allProductsError : null,

    createdProduct : null,
    createProductError : null,
    creatingProduct : false,
}

const productsReducer = (state = INITIAL_STATE , action)=>{
    switch(action.type){
        case productTypes.CLEAR_CREATED_PRODUCT:
            return {
                ...state,
                createdProduct : null,
            }
        case productTypes.PRODUCT_CREATE_START:
            return {
                ...state,
                createdProduct : null,
                createProductError : null,
                creatingProduct : true,
            }

        case productTypes.PRODUCT_CREATE_SUCCESS:
            return {
                ...state,
                createdProduct : action.payload,
                creatingProduct : false,
            }
        case productTypes.PRODUCT_CREATE_ERROR:
            return {
                ...state,
                createProductError : action.payload,
                creatingProduct : false,
            }

        case productTypes.ALL_PRODUCTS_START:
            return {
                ...state,
                allProductsLoading : true,
                allProducts : null,
                allProductsError : null,
            }

        case productTypes.ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                allProducts : action.payload,
                allProductsLoading : false,
            }

        case productTypes.ALL_PRODUCTS_ERROR:
            return {
                ...state,
                allProductsError : action.payload,
                allProductsLoading : false,
            }
        

        default:
            return state;
    }
}

export default productsReducer;