import companyTypes from './Company.types';
import backendAPI from '../../apis/backend';



const companyListStart = ()=>{
    return {
        type : companyTypes.ALL_COMPANIES_START,
    }
}

const companyListSuccess = companyList =>{
    return {
        type : companyTypes.ALL_COMPANIES_SUCCESS,
        payload : companyList,
    }
}

const companyListError = error =>{
    return {
        type : companyTypes.ALL_COMPANIES_ERROR,
        payload : error
    }
}

export const getAllCompanies = ()=>{
    return dispatch=>{
        dispatch(companyListStart());
        backendAPI.get('/shop/api/company/all')
            .then(res=>dispatch(companyListSuccess(res.data)))
            .catch(err=>dispatch(companyListError(err)));
    }
}

export const selectCompany = company =>{
    return {
        type : companyTypes.SELECT_COMPANY,
        payload : company,
    }
}