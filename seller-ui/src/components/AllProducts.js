import React,{Component} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {NavLink} from 'react-router-dom';
// importing selectors
import {
    selectAllProducts,
    selectAllProductsLoading,
    selectAllProductsError,

} from '../Redux/Products/Products.selectors';

// getting seller selector
import {
    selectSeller,
} from '../Redux/User/User.selectors';

// importing actions
import {
    getAllProducts,
} from '../Redux/Products/Products.actions';

class AllProducts extends Component {

    componentDidMount = ()=>{
        const {
            getAllProducts,
            seller,

        } = this.props;
        getAllProducts(seller.id);
    }

    render=()=>{
        const {
            allProducts,
            allProductsloading,
            productsError

        } = this.props;

        if(allProductsloading){
            return (
                <div className="loader">
                        <Loader
                        type="Oval"
                        color="#610345"
                        height={100}
                        width={100}
                        timeout={8000} //3 secs

                    />
                </div>
            
            )
        }
        return(
            <div className="all-products">
               {allProducts && allProducts.map((product,i)=>{
                   return(
                    <div className="single-product" key={i}>
                        <img src={product.random_product_image} alt={product.name}/>
                        <div className="information">
                            <h3>{product.name}</h3>
                        </div>
                    </div>
                   )
               })}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    allProducts : selectAllProducts(state),
    allProductsloading : selectAllProductsLoading(state),
    productsError : selectAllProductsError(state),
    seller : selectSeller(state),
})

const mapDispatchToProps = dispatch =>({
    getAllProducts : (seller_id)=>dispatch(getAllProducts(seller_id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AllProducts);