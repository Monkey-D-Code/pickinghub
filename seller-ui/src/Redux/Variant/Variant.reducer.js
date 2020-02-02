import variantTypes from './Variant.types';
import { save } from 'react-cookies';

const INITIAL_STATE = {
    variantsList : [],
    createdVariant : null,
    variantCreateError : null,
    creatingVariant : false,

    selectedVariant : null,
}


const variantReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){

        case variantTypes.SELECT_VARIANT:
            return {
                ...state,
                selectedVariant : action.payload,
            }
        case variantTypes.CREATE_VARIANT_START:
            return {
                ...state,
                creatingVariant : true,
                createdVariant : null,
                variantCreateError : null,
            }

        case variantTypes.CREATE_VARIANT_SUCCESS:
            return {
                ...state,
                createdVariant : action.payload,
                variantsList : [...state.variantsList , action.payload],
                creatingVariant : false,
            }
        case variantTypes.CREATE_VARIANT_ERROR:
            return {
                ...state,
                variantCreateError : action.payload,
                creatingVariant : false,
            }

        default:
            return state;
    }
}

export default variantReducer;