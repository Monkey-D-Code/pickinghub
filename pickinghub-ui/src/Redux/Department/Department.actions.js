import departmentTypes from './Department.types';
import backendAPI from '../../apis/backend';

export const getDepartmentsStart = ()=>{
    return {
        type : departmentTypes.GET_DEPARTMENTS_START,
    }
}

export const getDepartmentsSuccess = (departments)=>{
    return {
        type : departmentTypes.GET_DEPARTMENTS_SUCCESS,
        payload : departments,
    }
}

export const getDepartmentsError = (error)=>{
    return {
        type : departmentTypes.GET_DEPARTMENTS_ERROR,
        payload : error,
    }
}

export const getDepartments = ()=>{
    return dispatch => {
        dispatch(getDepartmentsStart());
        backendAPI.get('/shop/api/department/list/')
            .then(response=>dispatch(getDepartmentsSuccess(response.data)))
            .catch(error=>getDepartmentsError(error));
    }
}