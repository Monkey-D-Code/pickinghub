import {createSelector} from 'reselect';

const selectCategory = state => state.category;

export const selectCategoryList = createSelector(
    [selectCategory],
    category=>category.categoryList,
)

export const selectCategoryListError = createSelector(
    [selectCategory],
    category => category.categoryListError,
)

export const selectLoadingCategoryList = createSelector(
    [selectCategory],
    category => category.loadingCategoryList,
)
export const selectSelectedCategory = createSelector(
    [selectCategory],
    category => category.selectedCategory,
)