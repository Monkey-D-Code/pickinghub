import {combineReducers} from 'redux';
import SpecialDealReducer from './SpecialDealReducer';


export default combineReducers({
    specialdeals:SpecialDealReducer,
});