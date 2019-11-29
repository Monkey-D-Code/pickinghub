import searchProductsTypes from './SearchProducts.types';
import backendAPI from '../../apis/backend';

export const searchInputChange = (newText)=>{
    return {
        type : searchProductsTypes.SEARCH_INPUT_CHANGE,
        payload : newText,
    }
}

export const searchProductsStart = ()=>{
    return {
        type : searchProductsTypes.SEARCH_PRODUCTS_START,
    }
}

export const searchProductsSuccess = (response)=>{
    return {
        type : searchProductsTypes.SEARCH_PRODUCTS_SUCCESS,
        payload : response,
    }
}

export const searchProductsError = (error)=>{
    return {
        type : searchProductsTypes.SEARCH_PRODUCTS_ERROR,
        payload : error,
    }
}

export const searchProducts =  (text)=>{
    return async dispatch=>{
        dispatch(searchProductsStart());
        const response = await backendAPI.get(`/shop/api/search-products/?search=${text}`)
        if(response.data){
            dispatch(searchProductsSuccess(response.data))
        }else{
            dispatch(searchProductsError(response));
        }
    }
}