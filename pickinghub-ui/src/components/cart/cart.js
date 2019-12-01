import React,{Component} from 'react';
import {connect} from 'react-redux';

import './cart.css';

import {
    isAuthenticated,

} from '../../Redux/User/User.selectors';


class Cart extends Component{
    state={
        visible:false,
    }
    toggleBody=()=>{
        this.setState({
            visible:!this.state.visible,
        })
    }

    render=()=>{
        const {
            isAuthenticated,
           
            

        } = this.props;

        const {
            visible,

        } = this.state;
        if(isAuthenticated){
            return(
                <div>
                    {visible && <div className='cart-body'>

                    </div>}
                    <button className='cart-btn' onClick={this.toggleBody}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
}

const mapStateToProps = state => ({
    isAuthenticated : isAuthenticated(state),
})

export default connect(
    mapStateToProps,

)(Cart);