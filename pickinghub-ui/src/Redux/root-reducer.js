import {combineReducers} from 'redux';

import SpecialDealReducer from '../reducers/SpecialDealReducer';
import variantsReducer from '../reducers/variantsReducer';

// modified reducers
import searchProductsReducer from './SearchProducts/SearchProducts.reducer';
import productVariantsReducer from './ProductVariants/ProductVariants.reducer';


export default combineReducers({
    specialdeals:SpecialDealReducer,
    variants:variantsReducer,
    searchProducts : searchProductsReducer,
    productVariants : productVariantsReducer,
});