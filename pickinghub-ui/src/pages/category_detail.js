import React,{Component} from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import axios from 'axios';

class CategoryDetail extends Component{
    state = {
        Category:{},
        loading:false,
    }
    style = {
        cat_cover:{
            width:'5em',
            height:'5em',
            objectFit:'cover',
            borderRadius:'50%',
        },
        heading:{
            backgroundColor:'white',
            padding : '0.5em',
            fontWeight:'bold',
            borderRadius:'0.3em',
            color:'#A573C6'
        },
        bread:{
            backgroundColor:'white',
            padding : '0 1em 0 1em',
            margin:'auto',
            display:'block',
            width:'fit-content',
        },
        single_cate:{
            
            textTransform:'capitalize'
        },
        cat_cover:{
            width:'4em',
            height:'4em',
            objectFit:'cover',
            border: '3px solid #A573C6',
            borderRadius:'50%',
        },
        cat_name:{
            color : '#A573C6',
        },
        single_cate:{

        },
        cat_desc:{
            margin:'auto',
            display:'block',
            backgroundColor:'#A573C6',
            width : '30em',
            padding:'0.3em',
            borderRadius:'0.4em'

        }
    }
    
    componentWillMount=()=>{
        this.fetchCategoryDetails(this.props.match.params.id);
    }
    componentWillReceiveProps=(newProps)=>{
        this.fetchCategoryDetails(newProps.match.params.id);
    }

    fetchCategoryDetails=(category_id)=>{
        this.setState({loading:true});
        const {ajaxUrl} = this.props;
        axios.get(`${ajaxUrl}/shop/api/category/${category_id}/`)
            .then(res=>{
                this.setState({
                    Category:res.data,
                    loading:false,
                })
            })
            .catch(err=>{
                console.log(err);
                alert(JSON.stringify(err.response.data));
                this.setState({loading:false});
            })
    }

    render=()=>{
        const {
            Category,
            loading
        } = this.state;
        const {all_products} = Category;
        const {
            cat_cover,
            heading,
            bread,
            single_demo,
            demo_cover,
            demo_name,
            single_cate,
            cat_desc,

        } = this.style;
        const {Brand} = this.props;
        if(loading){
            return(
                <div 
                    id="ftco-loader" 
                    className="show fullscreen">
                        <svg class="circular" width="48px" height="48px">
                            <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth={4} stroke="#eeeeee"/>
                            <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00"/>
                        </svg>
                </div>
            )
        }
        return(
            <section className='ftco-section'>
                {
                    typeof(Category.id !== 'undefined')  &&
                    <div>
                        <div className="hero-wrap hero-bread" style={{
                            backgroundImage: `url(${Brand.random_hero_image})`,
                            
                            }}>
                            <div className="container">
                                <div className="row no-gutters slider-text align-items-center justify-content-center">
                                <div className="col-md-9 text-center">
                                    <h1 className="mb-0 bread"><img style={cat_cover} alt={`${Category.name}`} src={Category.cover_image} /> <span style={heading}>{Category.name}</span></h1>
                                    <br/>
                                    <p className="breadcrumbs" style={bread}><span class="mr-2"><NavLink to="/">Home</NavLink></span> <span><i className="fa fa-folder-open" aria-hidden="true"></i> {Category.name}</span></p>
                                    <br/>
                                    <p style={cat_desc}>{Category.desc}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className='container'>
                            <div className='row'>
                                {all_products.map((pro,i)=>{
                                    return(
                                        <div className='col-md-4 col-sm-6' key={i}>
                                            <div className='card'>
                                                <NavLink to={`/product/${pro.id}`}>
                                                    <img src={pro.random_product_image} style={{width:'100%'}}/>
                                                </NavLink>
                                                <div className='card-body'>
                                                    <h3 className='card-title'><NavLink to={`/product/${pro.id}`}>{pro.name}</NavLink></h3>
                                                    <p className='card-text'>{pro.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                }
            </section>
        );
    }
}

export default withRouter(CategoryDetail);