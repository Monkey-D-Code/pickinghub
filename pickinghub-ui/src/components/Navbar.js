import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

// import selectors
import {
    isAuthenticated,
} from '../Redux/User/User.selectors';

class NavBar extends Component{
    style = {
        logo_img:{
            width:'4em'
        }
    }
    render=()=>{
        const {
            isAuthenticated,
        } = this.props;
        const {
            full_name,
            logo_url
        } = this.props.Brand;
        const {
            logo_img,

        } = this.style
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo_url} style={logo_img} />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><NavLink to='/' className="nav-link">Home</NavLink></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown04">
                            <a className="dropdown-item" href="shop.html">Shop</a>
                            <a className="dropdown-item" href="product-single.html">Single Product</a>
                            <a className="dropdown-item" href="cart.html">Cart</a>
                            <a className="dropdown-item" href="checkout.html">Checkout</a>
                        </div>
                    </li>
                    <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                    
                    <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                    {isAuthenticated 
                        &&   <li className="nav-item"><NavLink to="/profile" className="nav-link"><i className="fa fa-sign-in" aria-hidden="true"></i> Profile</NavLink></li>
                    }
                    
                    {!isAuthenticated && <li className="nav-item"><NavLink to="/register" className="nav-link"><i className="fa fa-user-plus" aria-hidden="true"></i> Register</NavLink></li>}
                    

                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated : isAuthenticated(state),
})

export default connect(
    mapStateToProps,

)(NavBar);