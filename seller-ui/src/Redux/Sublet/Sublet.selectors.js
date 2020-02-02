import {createSelector} from 'reselect';

const selectSublet = state => state.sublet;
const selectVariant = state => state.variant;

export const selectSubletList =  createSelector(
    [selectSublet , selectVariant],
    (sublet , variant) => sublet.subletList.filter(i=>i.id===variant.selectedVariant.id),
)
export const selectCreatedSublet = createSelector(
    [selectSublet],
    sublet => sublet.createdSublet,
)
export const selectSubletCreateError = createSelector(
    [selectSublet],
    sublet => sublet.subletCreateError,
)
export const selectCreatingSublet = createSelector(
    [selectSublet],
    sublet => sublet.creatingSublet,
)
