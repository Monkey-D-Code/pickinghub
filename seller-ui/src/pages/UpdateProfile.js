import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
    selectSeller,
    selectSellerUpdateError,
    selectSellerLoading,
    selectUpdateSuccess,

} from '../Redux/User/User.selectors';

import {
    updateProfile,

} from '../Redux/User/User.actions';

class UpdateProfile extends Component{
    state = {
        id : '',
        userId : '',
        first_name : '',
        last_name : '',
        email : '',
        contact : '',
        cover_image : '',

    }

    componentDidMount = ()=>{
        const {seller} = this.props;
        
        this.setState({
            id : seller.id,
            userId : seller.user.id,
            first_name : seller.user.first_name,
            last_name : seller.user.last_name,
            email : seller.user.email,
            contact : seller.contact_number,
            cover_image : seller.cover_image,
        })
    }

    inputChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    submit = ()=>{
        const {
            id,
            userId,
            first_name,
            last_name,
            email,
            contact,
            cover_image,

        } = this.state;
        const {updateProfile} = this.props;
        const newSellerData = {
            id,
            user : {
                id : userId,
                first_name,
                last_name,
                email,
            },
            contact,
            cover_image,
        }
        updateProfile(newSellerData);
    }

    render=()=>{
        const {
            first_name,
            last_name,
            email,
            contact,
            cover_image,
        } = this.state;
        const {
            loading,
            error,
            success,
        } = this.props;
        return(
            <div className="update-profile">
                
                <form className="register-form">
                    <h1>Update {first_name} {last_name}</h1>
                    <div className="form-group">
                        <h2 className='heading'>Personal Information</h2>
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
                            <input 
                                type="text"
                                className='input' 
                                name="cover_image" 
                                
                                placeholder='Paste Your image Link'
                                
                                value={cover_image}
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
        )
    }
}

const mapStateToProps  = state =>({
    seller : selectSeller(state),
    loading : selectSellerLoading(state),
    error : selectSellerUpdateError(state),
    success : selectUpdateSuccess(state),
})

const mapDispatchToProps = dispatch =>({
    updateProfile : (newSellerData)=>dispatch(updateProfile(newSellerData))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,

)(UpdateProfile));