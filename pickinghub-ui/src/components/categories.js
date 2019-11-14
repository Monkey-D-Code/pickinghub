import React,{Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class Categories extends Component{

    state = {
        Categories : [],
        loading : false,
    }
    style={
        category_thumb:{
            height:'6em',
            width : '6em',
            borderRadius:'50%',
            objectFit:'cover',
            border:'2px solid #F7D4DC'
            
        },
        products_list:{
            margin : '1em',
            padding:'0.5em'
        },
        single_product:{
            border:'2px solid #F7D4DC',
            padding:'0.5em',
            margin:'0.5em',
            cursor:'pointer',
        },
        product_image:{
            height : '15em',
            display:'block',
            margin:'auto'
        }
    }

    componentWillMount=()=>{
        this.getCategoryWiseProducts();
    }

    getCategoryWiseProducts=()=>{
        this.setState({loading:true});
        const {ajaxUrl} = this.props;
        axios.get(`${ajaxUrl}/shop/api/category-wise-products/`)
            .then(response=>{
                this.setState({
                    Categories:response.data,
                    loading:false,
                })

            })
            .catch((response,err)=>{
                console.log(err);
                this.setState({loading:false});
            })
    }

    render=()=>{
        const {Categories,loading}=this.state;
        const {
            category_thumb,
            products_list,
            single_product,
            product_image,

        } = this.style;
        if(loading){
            return <h1 className='text-center'>Our Products by categories ..</h1>
        }
        return(
            <section className='ftco-section'>
                <div className="col-md-12 heading-section text-center">
                    <h1 className="big">Explore Us</h1>
                    <h2 className="mb-4">Explore Us</h2>
                </div>
                {Categories.map((cat,i)=>{
                    return(
                        <div key={i} className='container'>
                            <h3 style={{color:'#F7D4DC'}}><img src={cat.cover_image} style={category_thumb} alt={`${cat.name}`}/> {cat.name}</h3>
                            <hr/>
                            <div style={products_list} className='row'>
                                {cat.all_products.length > 0
                                    ? cat.all_products.map((p,j)=>{
                                        return(
                                            <div key={j} style={single_product} className='col-md-3'>
                                                <NavLink to={`/product/${p.id}`}>
                                                    <img src={p.random_product_image} style={product_image}/>
                                                    <h4>{p.name}</h4>
                                                </NavLink>
                                                
                                            </div>
                                        );
                                    })
                                    : <h5 className='text-center col-md-12'>No Products in this category</h5>
                                }
                            </div>
                            <br/>
                        </div>
                    )
                })}

            </section>
        );
    }
}

export default Categories;