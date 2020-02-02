import React,{Component} from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {
    selectSellerLoading,
    selectTokenError,
    selectSellerError,

} from '../Redux/User/User.selectors';
import {
    sellerLogin,
} from '../Redux/User/User.actions';
import FormError from '../components/FormError';

class Login extends Component{
    state = {
        username : '',
        password : '',
        errors : [],
    }
    inputChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    submit = ()=>{
        const {sellerLogin} = this.props;
        const authData = {
            username : this.state.username,
            password : this.state.password,
        }
        sellerLogin(authData);
    }
    render =()=>{
        const {
            username,
            password,
            errors,

        } = this.state;
        const {
            sellerLogin,
            sellerLoading,
            TokenError,
            SellerError,
        } = this.props;
        return (
            <div className="login">
                <h1>Login To Pickinghub Seller</h1>
                <FormError errors={errors} />
                {TokenError && 
                    
                        
                        TokenError.data.non_field_errors.map((err,i)=>{
                            return (
                                <h3 className="token-error" key={i}>
                                    {err}
                                </h3>
                            )
                        })
                    
                }
                {SellerError &&
                    <h3 className="seller-error">
                        {JSON.stringify(SellerError)}
                    </h3>}
                <form className="login-form">
                    <input 
                        type="text" 
                        name="username" 
                        
                        className='input'
                        placeholder='Your Seller Username' 
                        value={username}
                        onChange={this.inputChange} 
                    />
                    <input 
                        type="password" 
                        className='input'
                        name="password" 
                        value={password}
                        onChange={this.inputChange}
                        placeholder='Enter your password' 
                        
                    />
                    <button className="login-btn" type='button' disabled={sellerLoading} onClick={this.submit}>
                        {sellerLoading ?  'Patience' : 'Login'}
                    </button>
                </form>
                
                
                <div className="message">
                    <h3>Not a Pickinghub Seller ? </h3>
                    <NavLink to='/register'>Register Now</NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    sellerLoading : selectSellerLoading(state),
    TokenError : selectTokenError(state),
    SellerError : selectSellerError(state),
})

const mapDispatchToProps = dispatch =>({
    sellerLogin : (authData)=>dispatch(sellerLogin(authData)),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login));