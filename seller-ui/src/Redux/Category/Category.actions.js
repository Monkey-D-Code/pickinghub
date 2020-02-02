import categoryTypes from './Category.types';
import backendAPI from '../../apis/backend';


const allCategoriesStart = ()=>{
    return{
        type : categoryTypes.ALL_CATEGORIES_START,
    }
}

const allCategoriesSuccess = allcategories =>{
    return {
        type : categoryTypes.ALL_CATEGORIES_SUCCESS,
        payload : allcategories,
    }
}

const allCategoriesError = error =>{
    return {
        type : categoryTypes.ALL_CATEGORIES_ERROR,
        payload : error,
    }
}

export const getAllCategories = ()=>{
    return dispatch=>{
        dispatch(allCategoriesStart())
        backendAPI.get('/shop/api/category/all')
            .then(res=>dispatch(allCategoriesSuccess(res.data)))
            .catch(Err=>dispatch(allCategoriesError(Err)));
    }
}

export const selectCategory = (category)=>{
    return {
        type : categoryTypes.SELECT_CATEGORY,
        payload : category,
    }
}