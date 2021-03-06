import {combineReducers} from 'redux';
import SpecialDealReducer from './SpecialDealReducer';
import variantsReducer from './variantsReducer';

// modified reducers
import searchProductsReducer from '../Redux/SearchProducts/SearchProducts.reducer';


export default combineReducers({
    specialdeals:SpecialDealReducer,
    variants:variantsReducer,
    searchProducts : searchProductsReducer,
});