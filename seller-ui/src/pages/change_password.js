import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';


class ChangePassword extends Component{

    state = {
        userId : '',
        old_password : '',

        new_password : '',
        re_old_password : '',
    }

    inputChange = e =>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    }


    render=()=>{
        const {
            old_password,
            new_password,
            re_old_password,

        } = this.state;
        return(
            <div className="update-profile">
                <form className="register-form">
                    <h1>Change Password</h1>
                    <div className="form-group">
                        <h2 className='heading'>Confirm Old Password</h2>
                        {
                            success 
                            && 
                            <div className='alert-success'>
                                <h4>Profile Updated Successfully</h4>
                            </div>
                        }
                        <div className="body">
                            <input 
                                type="text"
                                className='input' 
                                name="old-password" 
                                
                                placeholder='First Name'
                                value={old_password}
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
                            
                            
                        </div>
                        <button 
                            className="login-btn" 
                            type='button' 
                            onClick={this.submit} 
                            disabled={loading}>{loading ? 'Updating':'Update Profile'}</button>
                        
                    </div>
                    
                </form>
            </div>

        );
    }
}

export default withRouter(ChangePassword);