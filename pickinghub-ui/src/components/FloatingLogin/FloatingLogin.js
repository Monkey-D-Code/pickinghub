import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {
            setLoginExpanded,
            getAuthToken,
        
        } from '../../Redux/User/User.actions';

import {
            selectLoginExpanded,
            selectLoading,
            selectTokenError,
            selectCustomerError,

        } from '../../Redux/User/User.selectors';

import Loader from '../loader';

import './FloatingLogin.css';



class FloatingLogin extends Component{
    state = {
        username : '',
        password : '',
    }

    changeInput = (e)=>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    submit = ()=>{
        const {getAuthToken} = this.props;
        const {username,password} = this.state;
        getAuthToken({username,password});
    }

    render =()=>{
        const {username,password} = this.state;
        const {
                loginExpanded,
                setLoginExpanded,
                loading,
                tokenError,
                customerError,

            } = this.props;

        
        return(
            <div>
                {loginExpanded && <div className='login-body'>
                    <form>
                        <div className='form-group'>
                            <input 
                                type='text'
                                className='form-control'
                                name='username'
                                placeholder="Username"
                                value={username}
                                onChange={this.changeInput}
                                disabled={loading}
                            />
                        </div>
                        <div className='form-group'>
                            <input 
                                type='password'
                                className='form-control'
                                name='password'
                                placeholder="Password"
                                value={password}
                                onChange={this.changeInput}
                                disabled={loading}
                                
                            />
                        </div>
                        {
                            tokenError 
                            &&
                            <div className='alert alert-danger'>
                                
                                {
                                    tokenError.data.non_field_errors
                                    && tokenError.data.non_field_errors.map((err,i)=>{
                                        return(
                                            <li key={i}>{err}</li>
                                        )
                                    })
                                }
                            </div>
                        }
                        {
                            customerError
                            &&
                            <div className='alert alert-danger'>
                                {
                                    JSON.stringify(customerError.data)
                                }
                            </div>
                        }
                        <div className='form-group'>
                            <button className='login-button' type='button' disabled={loading} onClick={this.submit}>
                                {
                                    loading 
                                    ? <Loader />
                                    : 'Login'
                                }
                            </button>
                        </div>
                        <section className='register-link'>
                            <p>New to Pickinghub ? <NavLink to='/register'>Register here</NavLink></p>
                        </section>
                    </form>

                </div>}
                <button className='btn btn-primary login-btn' onClick={()=>setLoginExpanded(!loginExpanded)}><i className="fa fa-sign-in" aria-hidden="true"></i></button>
            </div>

        )
    }
}

const mapStateToProps = (state)=>({
    loginExpanded : selectLoginExpanded(state),
    loading : selectLoading(state),
    tokenError : selectTokenError(state),
    customerError : selectCustomerError(state),
})
const mapDispatchToProps = dispatch=>({
    setLoginExpanded : (value)=>dispatch(setLoginExpanded(value)),
    getAuthToken : (authData)=>dispatch(getAuthToken(authData)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(FloatingLogin)