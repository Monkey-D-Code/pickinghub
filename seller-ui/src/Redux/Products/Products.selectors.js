import {createSelector} from 'reselect';


const selectProducts = state => state.products;


export const selectAllProducts = createSelector(
    [selectProducts],
    products=>products.allProducts,
)

export const selectAllProductsLoading = createSelector(
    [selectProducts],
    products=>products.allProductsLoading,
)

export const selectAllProductsError = createSelector(
    [selectProducts],
    products=>products.allProductsError,
)

export const selectCreatedProduct = createSelector(
    [selectProducts],
    products=>products.createdProduct,
)
export const selectCreateProductError = createSelector(
    [selectProducts],
    products=>products.createProductError,
)
export const selectCreatingProduct = createSelector(
    [selectProducts],
    products=>products.creatingProduct,
)