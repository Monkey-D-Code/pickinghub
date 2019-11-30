import {createSelector} from 'reselect';

const selectproductVariants = state => state.productVariants;

export const selectVariantList = createSelector(
    [selectproductVariants],
    productVariants=> productVariants.VariantList || false,
)

export const selectFetchingVariants = createSelector(
    [selectproductVariants],
    (productVariants)=>productVariants.fetchingVariants,
)

export const variantsOfProduct = (product_id)=>{
    return createSelector(
        [selectVariantList],
        (VariantList)=>{

            if(VariantList) {
                
                return VariantList.filter((productVariants)=>productVariants[0].product === product_id);
            }else{
                return false;
            }
        }
    )
}