import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';


class ProductDetails extends Component{

    state = {
        Product:{},
        loading:false,
        selectedSublet : {},
        displayProductImage : false,
    }
    style={
        company_logo : {
          height : '2em',
          width : '2em',
          objectFit : 'cover',
          borderRadius : '50%',
          
        },
        product_desc : {
          fontSize : '1.2em',
          padding : '1em;',
          width : '20em',
          
        },
        single_information:{
          width : '60%',
          display : 'block',
          margin : 'auto',
        },
        single_offer:{
          
          display:'inline-block',
          width : '15em',
          padding : '1em',
          margin : '1em',
          border : '1px solid  grey',
          
        },
        sublet_list:{
          listStyleType : 'none',
          padding:'0',
        },
        single_sublet:{
          padding : '1em',
          textTransform:'capitalize',
          cursor : 'pointer',
          color : '#f1b8c4',
          border : '0.8px solid grey',
          margin : '0.5em',
          width : '50%',
          textAlign : 'center',
        },
        selected_sublet:{
          color : 'red',
          border : '1px solid green',
          margin : '0.5em',
          width : '60%',
          textAlign : 'center',
          padding : '1em',
          textTransform:'capitalize',
        },
        thumbnail : {
          width : '3em',
          margin : '2em',
          cursor:'pointer',
        },
        display_product_image:{
          display:'block',
          margin : 'auto',
          height : '40em',
        },
        max_retail_price:{
          color : 'lightgrey',
        },
        selling_price:{
          color : 'green'
        },
        button:{
          borderRadius : '0',
          height : '4em',
          width : '35%',
          margin : '2em'
        }
    }
    componentWillMount = ()=>{
        this.setState({loading:true});
        const {ajaxUrl} = this.props;
        const product_id = this.props.match.params.id;
        axios.get(`${ajaxUrl}/shop/api/product/${product_id}/details/`)
            .then(response=>{
                this.setState({
                    Product:response.data,
                    
                    selectedSublet:response.data.variants[0].sublets[0],
                    displayProductImage : response.data.variants[0].sublets[0].productimages[0],
                    loading:false,
                })
            })
            .catch((response,err)=>{
                console.log(err);
                alert(response.message);
                this.setState({loading:false});
            })
    }
    selectSublet = (e)=>{
        const sublet_id = parseInt(e.target.id);
        const {Product} = this.state;
        const {variants} = Product;
        variants.forEach((variant)=>{
          const s_index = variant.sublets.findIndex(i=>i.id===sublet_id);
          if(s_index > -1){
            this.setState({
              selectedSublet:variant.sublets[s_index],
              displayProductImage : variant.sublets[s_index].productimages[0],
            })
          }
        })
    }
    selectDisplayImage = (e)=>{
    const image_id = parseInt(e.target.id);
    const {Product} = this.state;
    const {variants} = Product;
    variants.forEach((variant)=>{
        variant.sublets.forEach((sublet)=>{
        const i_index = sublet.productimages.findIndex(i=>i.id === image_id);
        if(i_index>-1){
            this.setState({displayProductImage : sublet.productimages[i_index]})
        }
        })
    })
    }
    render=()=>{
        const {
            Product,
            loading,
            selectedSublet,
            displayProductImage,
          } = this.state;

          const {
            informations , 
            discountoffers,
            variants,
            reviews,
            questions,
            company,
            category
          } = Product;
          const {
            company_logo,
            product_desc,
            single_information,
            single_offer,
            sublet_list,
            single_sublet,
            selected_sublet,
            thumbnail,
            display_product_image,
            max_retail_price,
            selling_price,
            button,
          } = this.style;

        const {Brand,loggedIn} = this.props;
        if(loading){
            return(
                <h1 className='text-center'>Loading Product ...</h1>
            );
        }
        return(
            <div>
                <div class="hero-wrap hero-bread" style={{
                  backgroundImage: `url(${Brand.random_hero_image})`,
                  marginTop:'8em'
                  }}>
                    <div class="container">
                        <div class="row no-gutters slider-text align-items-center justify-content-center">
                        <div class="col-md-9 ftco-animate text-center">
                            <h1 class="mb-0 bread">{Product.name}</h1>
                            
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
              <div className='row'>
                <div className='col-lg-5 pl-1'>
                    <img src={displayProductImage.image_url} style={display_product_image}/>
                    <br/>
                    {typeof(selectedSublet.id) !=='undefined' && selectedSublet.productimages.map((image , i)=>{
                      return(
                        <img src={image.image_url} style={thumbnail} id={image.id} onClick={this.selectDisplayImage}/>
                      );
                    })}
                    <br/>
                    {loggedIn() && <button className='btn btn-success' style={button}><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart</button>}
                    {loggedIn() && <button className='btn btn-warning' style={button}><i class="fa fa-credit-card" aria-hidden="true"></i> Buy Now</button>}
                    {!loggedIn() && <h3 style={button}>Login to buy</h3>}
                </div>
                <div className='col-lg-7'>
                    <h1>{Product.name} </h1>
                    <h5><span className='badge badge-success'><img src={company.logo_url} style={company_logo}/>  {company.full_name}</span> <span className='badge badge-info'><img src={category.cover_image} style={company_logo}/>  {category.name}</span></h5>
                    <br/>
                    {
                      typeof(selectedSublet.id) !=='undefined' 
                      && <div className='row'>
                            <div className='col-md-6'>
                                <s><h3 style={max_retail_price}><i className="fa fa-inr" aria-hidden="true"></i> {selectedSublet.max_retail_price}</h3></s>
                            </div>
                            <div className='col-md-6'>
                                <h3 style={selling_price}><i className="fa fa-inr" aria-hidden="true"></i> {selectedSublet.selling_price}</h3>
                            </div>
                        </div> 
                    }
                    <br/>
                    <p style={product_desc}>{Product.description}</p>
                    <hr/>
                    {variants.map((variant , i)=>{
                      return(
                        <div key={i}>
                            <h4>{variant.label}</h4>
                            <ul style={sublet_list}>
                              {variant.sublets.map((sublet , j)=>{
                                return(
                                  <li style={selectedSublet.id === sublet.id ? selected_sublet : single_sublet} key={j} id={sublet.id} onClick={this.selectSublet}>{sublet.value}</li>
                                );
                              })}
                            </ul>
                        </div>
                      );
                    })}
                </div>
              
              </div>
              <hr/>
              <div>
                  {informations.map((info , i)=>{
                      if(info.image_url){
                        return(
                            <div style={single_information} key={i}>
                              <div className='row'>
                                
                                <div className='col-md-4'>
                                    <img src={info.image_url} />
                                </div>
                                <div className='col-md-8'>

                                </div>
                              </div>
                            </div>
                        )
                      }else{
                           return(
                              <div style={single_information} key={i}>
                                <h5 className='text-center'>{info.label}</h5>
                                <p className='text-center'>{info.details}</p>
                              </div>
                          )
                      }
                     
                    })}
                    <hr/>
                    {discountoffers.length >0 && <h2 className='text-center'>Discount Offers</h2>}
                    {discountoffers.map((disoffer , i)=>{
                      return(
                        <div style={single_offer} key={i}>
                          <h5>{disoffer.label}</h5>
                          <p>{disoffer.details}</p>
                        </div>
                      )
                    })}
              </div>
            </div>
        );
    }
}

export default withRouter(ProductDetails);