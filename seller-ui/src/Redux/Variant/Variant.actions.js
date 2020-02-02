import variantTypes from './Variant.types';
import backendAPI from '../../apis/backend';


const createVariantStart = ()=>{
    return {
        type : variantTypes.CREATE_VARIANT_START,
    }
}

const createVariantSuccess = newVariant=>{
    return {
        type : variantTypes.CREATE_VARIANT_SUCCESS,
        payload : newVariant,
    }
}

const createVariantError = error =>{
    return {
        type : variantTypes.CREATE_VARIANT_ERROR,
        payload : error,
    }
}

export const createVariant = data =>{
    return dispatch => {
        dispatch(createVariantStart());
        backendAPI.post('/shop/api/variant/create/',data)
            .then(res=>dispatch(createVariantSuccess(res.data)))
            .catch(err=>dispatch(createVariantError(err.response)));
    }
}

export const selectVariant = variant =>{
    return {
        type : variantTypes.SELECT_VARIANT,
        payload : variant,
    }
}