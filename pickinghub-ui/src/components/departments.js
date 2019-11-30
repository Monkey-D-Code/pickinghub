import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {getDepartments} from '../Redux/Department/Department.actions';
import {
            selectdepartmentlist,
            selectGettingDepartments,
            selectDepartmentsError,

        } from '../Redux/Department/Department.selectors';

import Loader from './loader';

class Departments extends Component{
    state={
        
        visible:false,
    }
    style={
        floating:{
            width : '4em',
            height:'4em',
            position:'fixed',
            backgroundColor:'#A573C6',
            bottom:'1em',
            right:'1.5em',
            zIndex:99,
            borderRadius:'50%',
            cursor:'pointer',
            
        },
        department_list:{
            width:'wrap-content',
            height:'wrap-content',
            position:'fixed',
            bottom:'6em',
            right:'1.5em',
            textAlign:'right',  
            zIndex:99,
            backgroundColor:'#141414',
            borderRadius:'0.5em'
        },
        single_dept:{
            margin:'0.6em',
            padding:'0.6em',
            cursor:'pointer',
            borderBottom:'2px solid #A573C6'
        },
        cover_image:{
            width:'3em',
            height:'3em',
            objectFit:'cover',
            borderRadius:'50%',
        },
        heading:{
            
            position:'fixed',
            color:'#A573C6',
            bottom:'0.6em',
            right:'4em',
            zIndex:99,
        }
    }

    componentDidMount=()=>{
        const {getDepartments} = this.props;
        getDepartments();
    }
    toggleVisibility=()=>{
        this.setState({visible:!this.state.visible});
    }
    render=()=>{
        const {
            floating,
            department_list,
            single_dept,
            cover_image,
            heading,

        } = this.style;
        const {visible} = this.state;
        const {departmentlist,loading,error} = this.props;
        return(
            <div>
                {visible && <h3 style={heading}>Departments</h3>}
                {visible && <div style={department_list}>
                        {departmentlist.map((dept,i)=>{
                            return(
                                <div style={single_dept} key={i} className="row">
                                    <div className="col-sm-7">
                                    <h5><NavLink to={`/department/${dept.id}`}>{dept.name}</NavLink></h5>
                                        
                                    </div>
                                    <div className="col-sm-5">
                                        <NavLink to={`/department/${dept.id}`}><img src={dept.cover_image} style={cover_image}/></NavLink>

                                    </div>
                                    
                                </div>
                            );
                        })}

                    </div>
                }
                <button style={floating} className='btn btn-primary' disabled={loading} onClick={this.toggleVisibility}>
                {loading?<Loader />
                        :<i className="fa fa-bars" aria-hidden="true"></i>
                }
                </button>
            </div>
            
        );
    }
}

const mapStateToProps = state =>({
    departmentlist : selectdepartmentlist(state),
    loading : selectGettingDepartments(state),
    error : selectDepartmentsError(state),
})

const mapDispatchToProps = dispatch => ({
    getDepartments : ()=>dispatch(getDepartments()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(Departments);