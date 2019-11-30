import departmentTypes from './Department.types';

const INITIAL_STATE = {
    departments : null,
    gettingDepartments : false,
    departmentsError : null,
}

const departmentReducer = (state = INITIAL_STATE,action)=>{

    switch(action.type){

        case departmentTypes.GET_DEPARTMENTS_START:
            return {
                ...state,
                gettingDepartments : true,
                departmentsError : null,
            }

        case departmentTypes.GET_DEPARTMENTS_SUCCESS:

            return {
                ...state,
                gettingDepartments : false,
                departments : action.payload,
            }
        
        case departmentTypes.GET_DEPARTMENTS_ERROR:
            return {
                ...state,
                gettingDepartments : false,
                departmentsError : action.payload,
            }

        default:
            return state;
    }
}

export default departmentReducer;