import React,{Component} from 'react';
import axios from 'axios';
import {withRouter,NavLink} from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Trending extends Component{

    state = {
        TrendingProducts : [],
        loading:false,
    }

    style={
        trending_image:{
            height:'100%',
            objectFit:'contain'
        },
        trending_product:{
            height: '30em',
            backgroundColor:'white',
        }
    }
    componentWillMount=()=>{
        const {ajaxUrl}= this.props;
        this.setState({loading:true});
        axios.get(`${ajaxUrl}/shop/api/trending-products/`)
            .then(response=>{
                this.setState({
                    TrendingProducts:response.data,
                    loading:false,
                })
            })
            .catch((res,err)=>{
                console.log(err);
                this.setState({loading:false});
            })
    }

    
    render=()=>{
        const {loading,TrendingProducts} = this.state;
        const {
            trending_image,
            trending_product,

        }= this.style;
        if(loading){
            return(
                <h1 className='text-center'>Loading Trending Products</h1>
            )
        }
        return(
            <section className="ftco-section ftco-product">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                <div className="col-md-12 heading-section text-center">
                    <h1 className="big">Trending</h1>
                    <h2 className="mb-4">Trending</h2>
                </div>
                </div>
                    <div className="row">
                        <div className="col-md-12">
                            
                            <Carousel
                                useKeyboardArrows={true}
                            >
                                {TrendingProducts.map((product,i)=>{
                                    return(
                                        <div style={trending_product} key={i}>
                                            <img src={product.random_product_image} style={trending_image} alt={`${product.name}`}/>
                                            <NavLink className="legend" to={`/product/${product.id}`}>{product.name}</NavLink>
                                        </div>
                                    );
                                })}
                            </Carousel>
                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Trending);