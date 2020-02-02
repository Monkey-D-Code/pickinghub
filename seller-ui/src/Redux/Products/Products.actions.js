import productsTypes from './Products.types';
import backendAPI from '../../apis/backend';



const allProductsStart = ()=>{
    return {
        type : productsTypes.ALL_PRODUCTS_START,
    }
}

const allProductsSuccess = (allProducts)=>{
    return {
        type : productsTypes.ALL_PRODUCTS_SUCCESS,
        payload : allProducts,
    }
}

const allProductsError = (error)=>{
    return {
        type : productsTypes.ALL_PRODUCTS_ERROR,
        payload : error,
    }
}

export const getAllProducts = (seller_id)=>{
    return dispatch=>{
        dispatch(allProductsStart());
        backendAPI.get(`/shop/api/seller/${seller_id}/products/`)
            .then(allProducts=>dispatch(allProductsSuccess(allProducts.data)))
            .catch(err=>dispatch(allProductsError(err)));
    }
}


const productCreateStart = ()=>{
    return {
        type : productsTypes.PRODUCT_CREATE_START,
    }
}
const productCreateSuccess = newProduct =>{
    return {
        type : productsTypes.PRODUCT_CREATE_SUCCESS,
        payload : newProduct,
    }
}
const productCreateError = error =>{
    return {
        type : productsTypes.PRODUCT_CREATE_ERROR,
        payload : error,
    }
}
export const createProduct = (data)=>{
    return dispatch=>{
        dispatch(productCreateStart());
        backendAPI.post('/shop/api/product/create/',data)
            .then(res=>dispatch(productCreateSuccess(res.data)))
            .catch(err=>dispatch(productCreateError(err.response)));
    }
}
export const clearCreatedProduct = ()=>{
    return {
        type : productsTypes.CLEAR_CREATED_PRODUCT,
    }
}