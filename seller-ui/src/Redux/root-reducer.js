import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './User/User.reducer';
import productsReducer from './Products/Products.reducer';
import categoryReducer from './Category/Category.reducer';
import companyReducer from './Company/Company.reducer';
import variantReducer from './Variant/Variant.reducer';
import subletReducer from './Sublet/Sublet.reducer';

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['user'],
}

const rootReducer = combineReducers({
    user : userReducer,
    products : productsReducer,
    category : categoryReducer,
    company : companyReducer,
    variant : variantReducer,
    sublet : subletReducer,
    
});

export default persistReducer(persistConfig,rootReducer);