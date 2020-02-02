import companyTypes from './Company.types';

const INITIAL_STATE = {
    companyList : null,
    companyListError : null,
    loadingCompanyList : false,

    selectedCompany : null,
}



const companyReducer = (state=INITIAL_STATE , action)=>{

    switch(action.type){
        case companyTypes.ALL_COMPANIES_START:
            return {
                ...state,
                companyList : null,
                companyListError : null,
                loadingCompanyList : true,
            }
        case companyTypes.ALL_COMPANIES_SUCCESS:
            return {
                ...state,
                companyList : action.payload,
                loadingCompanyList : false,
            }

        case companyTypes.ALL_COMPANIES_ERROR:
            return {
                ...state,
                companyListError : action.payload,
                loadingCompanyList : false,
            }
        case companyTypes.SELECT_COMPANY:
            return {
                ...state,
                selectedCompany : action.payload,
            }

        default:
            return state;
    }
}

export default companyReducer;