import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SpecialDealReducer from '../reducers/SpecialDealReducer';
import variantsReducer from '../reducers/variantsReducer';

// modified reducers
import searchProductsReducer from './SearchProducts/SearchProducts.reducer';
import productVariantsReducer from './ProductVariants/ProductVariants.reducer';
import userReducer from './User/User.reducer';
import departmentReducer from './Department/Department.reducer';
import productReducer from './Product/Product.reducer';

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['user'],
}

const rootReducer = combineReducers({
    specialdeals:SpecialDealReducer,
    variants:variantsReducer,
    searchProducts : searchProductsReducer,
    productVariants : productVariantsReducer,
    user : userReducer,
    department : departmentReducer,
    product : productReducer,
});

export default persistReducer(persistConfig,rootReducer);