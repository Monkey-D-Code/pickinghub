import {createSelector} from 'reselect';

const selectVariant = state => state.variant;

export const selectVariantsList = createSelector(
    [selectVariant],
    variant => variant.variantsList,
)
export const selectCreatedVariant = createSelector(
    [selectVariant],
    variant => variant.createdVariant,
)
export const selectVariantCreateError = createSelector(
    [selectVariant],
    variant => variant.variantCreateError,
)
export const selectCreatingVariant = createSelector(
    [selectVariant],
    variant => variant.creatingVariant,
)

export const selectSelectedVariant = createSelector(
    [selectVariant],
    variant => variant.selectedVariant,
)