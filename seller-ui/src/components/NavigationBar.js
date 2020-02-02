import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

 import {
     sellerLogout,
 } from '../Redux/User/User.actions';

 import {
     selectIsAuthenticated,

 } from '../Redux/User/User.selectors';

class NavigationBar extends Component{

    render=()=>{
        const {sellerLogout} = this.props;
        return(
            <div className="navigation-bar">
                <div className="brand">
                    <h1>Pickinghub Seller</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        <li><NavLink to='/create-product'>Add Product</NavLink></li>
                        <li><NavLink to='/'>Orders</NavLink></li>
                        <li><NavLink to='/'>Stats</NavLink></li>
                    </ul>
                </div>
                <div className="auth">
                    <ul>
                        <li><NavLink to='/profile'>Profile</NavLink></li>
                        <li onClick={sellerLogout}>Logout</li>
                    </ul>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated : selectIsAuthenticated(state),
})

const mapDispatchToProps = dispatch =>({
    sellerLogout : ()=>dispatch(sellerLogout()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(NavigationBar);