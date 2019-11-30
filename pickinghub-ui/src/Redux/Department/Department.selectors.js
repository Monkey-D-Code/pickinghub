import {createSelector} from 'reselect';

const selectDepartment = state => state.department;

export const selectdepartmentlist = createSelector(
    [selectDepartment],
    department => department.departments,
)

export const selectGettingDepartments = createSelector(
    [selectDepartment],
    department => department.gettingDepartments,
)

export const selectDepartmentsError = createSelector(
    [selectDepartment],
    department => department.departmentsError,
)