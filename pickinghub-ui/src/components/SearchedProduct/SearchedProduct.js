import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import './SearchedProduct.css';

import ProductVariants from '../ProductVariants/ProductVariants';

class SearchedProduct extends Component{

    render = ()=>{
        const {product} = this.props;
        return(
            <div className="card">
                <NavLink to={`/product/${product.id}`}>
                    <img src={product.random_product_image} className="card-img-top" alt={product.name} />
                </NavLink>
                <div className="card-body">
                    <ProductVariants id={product.id} />
                </div>
                
                <div className="card-body">
                    <h5 className="card-title">
                        <NavLink to={`/product/${product.id}`}>{product.name}</NavLink>
                    </h5>
                    <p className="card-text">{product.description}</p>
                    
                </div>
            </div>
        )
    }
}

export default SearchedProduct;