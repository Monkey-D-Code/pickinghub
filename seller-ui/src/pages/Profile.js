import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';


// importing selectors
import {
    selectSeller,
    selectSellerLoading,
    selectSellerError,

} from '../Redux/User/User.selectors';

class Profile extends Component{

    render=()=>{
        const {
            seller,
            loading,
            error,
        } = this.props;
        const {user} = seller;
        return(
            <div className="profile">
                
                <img 
                    src={
                            seller.cover_image
                            ? seller.cover_image 
                            : `https://ui-avatars.com/api/?name=${user.first_name}+${user.last_name}&size=300&background=610345&color=FFF689`} 
                    alt={`${user.first_name} ${user.last_name}`} 
                    className="profile-img"
                />
                <div className="controls">
                    <NavLink to='/profile-update'>Edit Profile</NavLink>
                    <NavLink to='/'>Change Password</NavLink>
                </div>
                <h1>{user.first_name} {user.last_name}</h1>
                <div className="info">
                    <h3 className='email'><i className="fa fa-envelope" aria-hidden="true"></i> {user.email}</h3>
                    <h3 className='username'><i className="fa fa-user-circle-o" aria-hidden="true"></i> {user.username}</h3>
                    <h3 className="phone"><i className="fa fa-phone-square" aria-hidden="true"></i> {seller.contact_number}</h3>
                    <p className="address"><i className="fa fa-map-marker" aria-hidden="true"></i> {seller.address}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    seller : selectSeller(state),
    loading : selectSellerLoading(state),
    error : selectSellerError(state),
})


export default withRouter(connect(
    mapStateToProps,
)(Profile));