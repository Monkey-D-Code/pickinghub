import productVariantsTypes from './ProductVariants.types';
import backendAPI from '../../apis/backend';


export const getProductVariantsStart = ()=>{
    return {
        type : productVariantsTypes.GET_PRODUCT_VARIANTS_START,
    }
}

export const getProductVariantsSuccess = (variants)=>{
    return {
        type : productVariantsTypes.GET_PRODUCT_VARIANTS_SUCCESS,
        payload : variants,
    }
}

export const getProductVariantsError = (error)=>{
    return {
        type : productVariantsTypes.GET_PRODUCT_VARIANTS_ERROR,
        payload : error,
    }
}

export const getProductVariants = (product_id)=>{
    return async dispatch =>{
        dispatch(getProductVariantsStart());
        const response = await backendAPI.get(`/shop/api/product/${product_id}/variants/`);
        if(response.data){
            dispatch(getProductVariantsSuccess(response.data));
        }else{
            dispatch(getProductVariantsError(response));
        }
    }
}