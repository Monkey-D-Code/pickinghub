import searchProductsTypes from './SearchProducts.types';

const INITIAL_STATE = {
    searchText : '',
    searchingProducts : false,
    searchResults : null,
    searchError : null,
}

const searchProductsReducer = (state = INITIAL_STATE , action)=>{
    switch(action.type){

        case searchProductsTypes.SEARCH_INPUT_CHANGE:

            return {
                ...state,
                searchText : action.payload,
            }

        case searchProductsTypes.SEARCH_PRODUCTS_START:

        return {
            ...state,
            searchingProducts : true,
        }

        case searchProductsTypes.SEARCH_PRODUCTS_SUCCESS:

        return {
            ...state,
            searchingProducts : false,
            searchResults : action.payload,
            searchError : null,
        }

        case searchProductsTypes.SEARCH_PRODUCTS_ERROR:
            return {
                ...state,
                searchingProducts:false,
                searchResults : null,
                searchError : action.payload,
            }

        default:
            return state;
    }
}

export default searchProductsReducer;