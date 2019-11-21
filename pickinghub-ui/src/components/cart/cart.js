import React,{Component} from 'react';
import './cart.css';


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
            loggedIn,
            Customer,
            

        } = this.props;

        const {
            visible,

        } = this.state;
        if(loggedIn()){
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

export default Cart;