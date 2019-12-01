import productTypes from './Product.types';
import backendAPI from '../../apis/backend';


export const getProductStart = ()=>{
    return {
        type : productTypes.GET_PRODUCT_START,
    }
}

export const getProductSuccess = (product)=>{
    return {
        type : productTypes.GET_PRODUCT_SUCCESS,
        payload : product,
    }
}

export const getProductError = (error)=>{
    return {
        type : productTypes.GET_PRODUCT_ERROR,
        payload : error,
    }
}

export const getProduct = (product_id)=>{
    return dispatch => {
        dispatch(getProductStart());
        backendAPI.get(`/shop/api/product/${product_id}/details/`)
            .then(res=>dispatch(getProductSuccess(res.data)))
            .catch(err=>dispatch(getProductError(err)));
    }
}

export const setMainProductImage = (image)=>{
    return {
        type : productTypes.SET_MAIN_PRODUCT_IMAGE,
        payload : image,
    }
}