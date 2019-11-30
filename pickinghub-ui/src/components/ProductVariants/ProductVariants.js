import React,{Component} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {
            variantsOfProduct,
            selectFetchingVariants,

        } from '../../Redux/ProductVariants/ProductVariants.selectors';
import {getProductVariants} from '../../Redux/ProductVariants/ProductVariants.actions';

import './ProductVariants.css';


class ProductVariants extends Component{

    componentDidMount = ()=>{
        const {getProductVariants,id} = this.props;
        getProductVariants(id);
    }

    render=()=>{
        const {variants,fetchingVariants,id} = this.props;
        const _variants = variants(id);
        if(fetchingVariants){
            return (
                <h4>Loading ....</h4>
            )
        }
        if(_variants[0]){
            return(
                _variants[0].map((variant,i)=>{
                    return(
                        <div key={i} className='product-sublets'>
                            <h6>Choose by {variant.label}</h6>
                            <hr/>
                            {variant.sublets.map((sublet,j)=>{
                                return(
                                <li key={j}>
                                    {
                                        sublet.color_hex 
                                            &&<div style={{
                                                backgroundColor:`#${sublet.color_hex}`,
                                                height : '2em',
                                                
                                                display:'inline-block',
                                                
                                                
                                                }}>
                                            </div>
                                    } 
                                    <p className="value">{sublet.value}</p>
                                    <p className="price">{sublet.selling_price} /-</p>
                                </li>
                                )
                            })}
                        </div>
                    )
                })
                
            )
        }else{
            return(
                <p>Variants</p>
            )
        }
        
    }
}

const mapStateToProps = (state) =>({
    variants : (product_id)=>variantsOfProduct(product_id)(state),
    fetchingVariants : selectFetchingVariants(state),
})

const mapDispatchToProps = dispatch =>({
    getProductVariants : (product_id)=>dispatch(getProductVariants(product_id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(ProductVariants);