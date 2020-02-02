import React,{Component} from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import FormError from '../components/FormError';

import {
    selectSellerLoading,
    selectSellerError,

} from '../Redux/User/User.selectors';

import {
    sellerRegister,

} from '../Redux/User/User.actions';
class Register extends Component{
    state = {
        username : '',
        password : '',
        confirm_password : '',

        first_name : '',
        last_name : '',
        email : '',
        contact : '',
        errors : [],
    }
    inputChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    
    submit = ()=>{
        let temp_errors = [];
        const {
            username,
            password,
            confirm_password,

            first_name,
            last_name,
            email,
            contact,

            errors,

        } = this.state;

        const {
            sellerRegister,

        } = this.props;
        
        if(!username) temp_errors.push({field:'username',message:'Must Enter this !'});
        if(username && username.length < 8) temp_errors.push({field:'username',message:'Must be more than 8.'});
        if(username && username.length > 15) temp_errors.push({field:'username',message:'Must be less than 15.'});

        if(!password) temp_errors.push({field:'password',message:'Must Enter this !'});
        if(password && password.length < 8) temp_errors.push({field:'password',message:'Must be more than 8.'});
        if(password && password.length > 15) temp_errors.push({field:'password',message:'Must be less than 15.'});

        if(!confirm_password) temp_errors.push({field:'confirm_password',message:'Must Enter this !'});
        if(confirm_password && confirm_password.length < 8) temp_errors.push({field:'confirm_password',message:'Must be more than 8.'});
        if(confirm_password && confirm_password.length > 15) temp_errors.push({field:'confirm_password',message:'Must be less than 15.'});
        if(password !== confirm_password) temp_errors.push({field:'confirm_password',message:'Passwords don\'t match'});

        if(!first_name) temp_errors.push({field:'first_name',message:'Tell us Your Name'});
        if(!last_name) temp_errors.push({field:'last_name',message:'Tell us Your Surname'});


        if(!email) temp_errors.push({field:'email',message:'Tell us your Email'});


        if(!contact) temp_errors.push({field:'contact',message:'Tell us Your Phone Number'});
        if(contact && contact.length  !== 10) temp_errors.push({field:'contact',message:'10 digits only'});
        

        if(temp_errors.length > 0){
            this.setState({
                errors : temp_errors,
            })
        }else{
            const newSeller = {
                user : {
                    first_name,
                    last_name,
                    username,
                    email,
                    password,
                },
                cover_image : '',
                address : '',
                contact_number : contact,

            }
            sellerRegister(newSeller);
        }


    }
    render=()=>{
        const {
            username,
            password,
            confirm_password,

            first_name,
            last_name,
            email,
            contact,

            errors,

        } = this.state;

        const {
            sellerLoading,
            sellerError,

        } = this.props;
        
        if(sellerLoading){
            return (
                <h1>
                    Signing You Up
                </h1>
            )
        }
        return(
            <div className="register">
                <h1>Join Pickinghub Seller</h1>
                <FormError errors={errors} />
                {sellerError &&<div className="server-error">
                    {sellerError.message}
                </div>}
                <form className="register-form">
                    <div className="form-group">
                        <h2 className='heading'>Login Information</h2>
                        <div className="body">
                            <input 
                                className='input'
                                type="text" 
                                name="username" 
                                
                                placeholder='Choose a Username'
                                value={username}
                                onChange={this.inputChange}    
                            />
                            
                            <input 
                                className='input'
                                type="password" 
                                name="password" 
                                
                                placeholder='Choose a password'
                                value={password}
                                onChange={this.inputChange}     
                            />
                            
                            <input
                                className='input'
                                type="password" 
                                name="confirm_password" 
                                
                                placeholder='Confirm your password'
                                value={confirm_password}
                                onChange={this.inputChange} 
                            />
                            
                        </div>
                    </div>
                    <div className="form-group">
                        <h2 className='heading'>Personal Information</h2>
                        <div className="body">
                            <input 
                                type="text"
                                className='input' 
                                name="first_name" 
                                
                                placeholder='First Name'
                                value={first_name}
                                onChange={this.inputChange}   
                            />
                            
                            <input 
                                type="text"
                                className='input'
                                name="last_name" 
                                
                                placeholder='Last Name'
                                value={last_name}
                                onChange={this.inputChange}     
                            />
                            
                            <input 
                                type="email"
                                className='input' 
                                name="email" 
                        
                                placeholder='Enter your email'
                                value={email}
                                onChange={this.inputChange} 
                            />
                            
                            <input 
                                type="number"
                                className='input' 
                                name="contact" 
                                
                                placeholder='Enter phone Number'
                                min={0}
                                value={contact}
                                onChange={this.inputChange} 
                            />
                            
                            
                        </div>
                        <button className="login-btn" type='button' onClick={this.submit}>Submit & Register</button>
                        <div className="message">
                            <h3>Already a Seller ? </h3>
                            <NavLink to='/'>Login</NavLink>
                        </div>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = state =>({
    sellerLoading : selectSellerLoading(state),
    sellerError : selectSellerError(state),
});

const mapDispatchToProps = dispatch =>({
    sellerRegister : (newSeller)=>dispatch(sellerRegister(newSeller)),
})


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,

)(Register));