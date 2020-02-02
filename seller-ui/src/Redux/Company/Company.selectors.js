import {createSelector} from 'reselect';

const selectCompany = state => state.company;


export const selectCompanyList = createSelector(
    [selectCompany],
    company => company.companyList,
)
export const selectCompanyListError = createSelector(
    [selectCompany],
    company => company.companyListError,
)
export const selectLoadingCompanyList = createSelector(
    [selectCompany],
    company => company.loadingCompanyList,
)
export const selectSelectedCompany = createSelector(
    [selectCompany],
    company => company.selectedCompany,
)