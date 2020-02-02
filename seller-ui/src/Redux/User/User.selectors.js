import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectIsAuthenticated = createSelector(
    [selectUser],
    user => user.Seller ? true : false,
)

export const selectSeller = createSelector(
    [selectUser],
    user => user.Seller,
)

export const selectSellerLoading = createSelector(
    [selectUser],
    user => user.sellerloading,
)

export const selectSellerError = createSelector(
    [selectUser],
    user => user.sellerError,
)

export const selectTokenError = createSelector(
    [selectUser],
    user => user.tokenError,
)

export const selectSellerUpdateError = createSelector(
    [selectUser],
    user=>user.sellerUpdateError,
)

export const selectUpdateSuccess = createSelector(
    [selectUser],
    user=>user.updateSuccess,
)

export const selectOldPasswordConfirmed = createSelector(
    [selectUser],
    user=>user.oldPasswordConfirmed,
)

export const selectPasswordChangeSuccess = createSelector(
    [selectUser],
    user=>user.passwordChangeSuccess,
)

export const selectPasswordChangeError = createSelector(
    [selectUser],
    user=>user.passwordChangeError,
)