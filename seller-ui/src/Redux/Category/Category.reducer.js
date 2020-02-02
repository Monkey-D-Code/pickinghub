import categoryTypes from './Category.types';
import { save } from 'react-cookies';

const INITIAL_STATE = {
    categoryList : null,
    categoryListError : null,
    loadingCategoryList : false,

    selectedCategory : null,
}


const categoryReducer = (state=INITIAL_STATE , action)=>{
    switch(action.type){

        case categoryTypes.SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory : action.payload,
            }
        case categoryTypes.ALL_CATEGORIES_START:
            return {
                ...state,
                categoryList : null,
                loadingCategoryList : true,
                categoryListError : null,
            }
        case categoryTypes.ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoryList : action.payload,
                loadingCategoryList : false,
            }

        case categoryTypes.ALL_CATEGORIES_ERROR:
            return {
                ...state,
                loadingCategoryList : false,
                categoryListError : action.payload,
            }

        default:
            return state;
    }
}

export default categoryReducer;