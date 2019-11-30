import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectUserToken = createSelector(
    [selectUser],
    user => user.token,
)

export const selectLoading = createSelector(
    [selectUser],
    user => user.loading,
)

export const selectLoginExpanded = createSelector(
    [selectUser],
    user => user.loginExpanded,
)

export const selectTokenError = createSelector(
    [selectUser],
    user => user.tokenError,
)

export const selectActiveCustomer = createSelector(
    [selectUser],
    user => user.activeCustomer,
)

export const selectCustomerError = createSelector(
    [selectUser],
    user => user.customerError,
)

export const isAuthenticated = createSelector(
    [selectUser],
    user => user.activeCustomer ? true : false,
)