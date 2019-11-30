import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

import './ProductCard.css';

// importing components
import ProductVariants from '../ProductVariants/ProductVariants';


class ProductCard extends Component{
    state = {
        displayImage : '',
    }

    setDisplayImage=(url)=>{
        this.setState({displayImage:url});
    }

    render=()=>{
        const {product,Deal,ajaxUrl} = this.props;
        return(
            <div className="card">
                <NavLink to={`/product/${product.id}`}>
                    <img width={'100%'} src={product.random_product_image} alt={`${product.name}`}/>
                </NavLink>
                <div className='card-body'>
                    <ProductVariants id={product.id} />
                </div>
                <div className='card-body'>
                    <h6 className='discount'>{Deal.discount_percentage}% off</h6>
                    <NavLink to={`/product/${product.id}`}>
                        <h3 className='card-title product-name'>{product.name}</h3>
                    </NavLink>
                    <p className='card-text product-desc'>{product.description}</p>
                </div>
            </div>
        )
    }
}

export default ProductCard;