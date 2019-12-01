import {createSelector} from 'reselect';

const selectProduct = state=>state.product;

export const selectSingleProduct = createSelector(
    [selectProduct],
    product => product.selectedProduct || false,
)

export const selectGettingProduct = createSelector(
    [selectProduct],
    product => product.gettingProduct,
)

export const selectProductError = createSelector(
    [selectProduct],
    product => product.productError,
)

export const selectMainProductImage = createSelector(
    [selectProduct],
    product => product.mainProductImage || false,
)