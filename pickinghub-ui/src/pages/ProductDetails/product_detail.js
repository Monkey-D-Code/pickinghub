import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import './ProductDetail.css';

import {
  isAuthenticated,
} from '../../Redux/User/User.selectors';

import {
  selectSingleProduct,
  selectGettingProduct,
  selectProductError,
  selectMainProductImage,
  
} from '../../Redux/Product/Product.selectors';

import {
  getProduct,
  setMainProductImage,

} from '../../Redux/Product/Product.actions';


import Loader from '../../components/loader';

class ProductDetails extends Component{

    
    componentDidMount = ()=>{
        const {getProduct,match} = this.props;
        console.log(match.params.id)
        getProduct(match.params.id);
       

    }

    componentWillUnmount = ()=>{
      this.props.setMainProductImage(null)
    }
    
    render=()=>{
        

          
          


        const {
                Brand,
                isAuthenticated,
                Product,
                error,
                loading,
                mainProductImage,
                setMainProductImage,

              } = this.props;
        const {
          informations , 
          discountoffers,
          variants,
          reviews,
          questions,
          company,
          category
        } = Product;

        if(loading){
            return(
                <Loader />
            );
        }
        return(
            Product && <div className='product-details'>
                <div class="hero-wrap hero-bread" style={{
                  backgroundImage: `url(${Brand.random_hero_image})`,
                  marginTop:'8em'
                  }}>
                    <div class="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center">
                            <h1 className='product-name1'>{Product.name}</h1>
                            
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className='row' style ={{padding : '2em'}}>
                    <div className='col-md-6 col-sm-12'>
                        {
                          mainProductImage 
                          ? <img src={mainProductImage.image_url} alt={mainProductImage.caption} className='main-image'/>
                          : <img src={Product.random_product_image} alt={Product.name} className='main-image'/>
                        }
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <p className="product-descr">
                          {Product.description}
                        </p>
                        {
                          variants 
                          ? variants.map((variant,i)=>{
                              return(
                                <div key={i}>
                                  <h4 className='variant-label'>Choose by {variant.label}</h4>
                                  <p>{variant.desc}</p>
                                  {
                                    variant.sublets 
                                    ? <div>
                                      {
                                        variant.sublets.map((sublet,j)=>{
                                          return(
                                            <div key={j} className='sublet-body'>
                                              <div className='single-sublet'>
                                                {sublet.color_hex &&<p style={{backgroundColor:`#${sublet.color_hex}`}} className='color'></p>}
                                                <h4 className='value'>{sublet.value}</h4>
                                                
                                               <div className='pro-price'>
                                                  <p className='market-price'><i className="fa fa-inr" aria-hidden="true"></i> {sublet.max_retail_price.split('.')[0]}</p>
                                                  <p className='selling-price'><i className="fa fa-inr" aria-hidden="true"></i> {sublet.selling_price.split('.')[0]}</p>
                                               </div>
                                              </div>
                                              <div className='sublet-images'>
                                                {
                                                  sublet.productimages.map((image,k)=>{
                                                    return(
                                                      <div key={k}>
                                                        <img 
                                                            src={image.image_url} 
                                                            alt={`${image.caption}`} 
                                                            className='product-image'
                                                            onClick={()=>setMainProductImage(image)}
                                                            style={
                                                              mainProductImage.id === image.id 
                                                              ? {
                                                                border : '3px solid rgb(216, 49, 216)',
                                                                width : '5.5em'
                                                              } : {}
                                                            }  
                                                          />
                                                      </div>
                                                    );
                                                  })
                                                }
                                              </div>
                                              
                                            </div>
                                          );
                                        })
                                      }
                                    </div>
                                    : <p className='sublets-404'>No Sublets Found</p>
                                  }
                                </div>
                              )
                          })
                          : <p className='variants-404'>No Variants Found</p>
                        }
                    </div>
                </div>
              
            
              </div>
        );
    }
}

const mapStateToProps = state => ({
  isAuthenticated : isAuthenticated(state),
  Product : selectSingleProduct(state),
  loading : selectGettingProduct(state),
  error : selectProductError(state),
  mainProductImage : selectMainProductImage(state),
})

const mapDispatchToProps = dispatch => ({
  getProduct : (product_id)=>dispatch(getProduct(product_id)),
  setMainProductImage : (image)=>dispatch(setMainProductImage(image)),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,

)(ProductDetails));