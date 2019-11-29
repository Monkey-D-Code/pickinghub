import React,{Component} from 'react';
import {connect} from 'react-redux';
import './variants.css';

import {fetchVariantsOfProduct} from '../../actions/';



class Variants extends Component{
    state = {
        selectedSublet:false,
    }

    componentDidMount = ()=>{
        const {ajaxUrl,productId,fetchVariantsOfProduct} = this.props;
        const url = `${ajaxUrl}/shop/api/product/${productId}/variants/`;
        fetchVariantsOfProduct(url);
    }

    setSelectedSublet = (event)=>{
        const sublet_id = parseInt(event.target.id);
        this.getSublet(sublet_id);
        
    }

    getSublet = (sublet_id)=>{
        const {variants} = this.props;
        variants.forEach(variant => {
            
            console.log(variant);
        });
    }

    render=()=>{
        const {variants} = this.props;
        
        if(variants === undefined){
            return(
                <h4>Loading Variants</h4>
            )
        }else if(variants.length === 0){
            return <h4>I don't have any variants !</h4>
        }else{

            return(
                <div className='all-variants'>
                    {/* {variants.map((variant , i)=>{
                        const {sublets} = variant;
                        
                        return(
                            <div key={i} className='single-variant'>
                                <h5 className='variant-label'>Select {variant.label}</h5>
                                {sublets.map((sublet,j)=>{
                                    return(
                                        <div className='one-sublet' key={j} id={sublet.id}>
                                            
                                            <button className='sublet-value' onClick={this.setSelectedSublet} id={sublet.id}>
                                                {sublet.color_hex && <div style={{backgroundColor: `#${sublet.color_hex}`}} className='color-hex'></div>}
                                                <p>{sublet.value}</p>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })} */}
                </div>
                
            )
        }
    }
}

const mapStateToProps = (state,ownProps)=>{
    
    return {variants:state.variants};
}

export default connect(
    mapStateToProps,
    {fetchVariantsOfProduct},
)(Variants);