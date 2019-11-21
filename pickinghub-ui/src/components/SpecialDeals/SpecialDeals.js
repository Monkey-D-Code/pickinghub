import React,{Component} from 'react';
import {connect} from 'react-redux';
import './SpecialDeals.css';
import {NavLink} from 'react-router-dom';
import {fetchSpecialDeals} from '../../actions';


class SingleDeal extends Component{
    render=()=>{
        const {Deal} = this.props;
        const {products} = Deal;
        return(
            <div>
                <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12 heading-section text-center">
                        <h1 className="big">Special Deals</h1>
                        <h2 className="mb-4">Special Deals</h2>
                    </div>
                </div>
                <section className="ftco-section ftco-section-more img deal-title" style={{backgroundImage: `url(${Deal.cover_image})`}}>
                    <div className="container">
                        <div className="row justify-content-center mb-3 pb-3">
                            <div className="col-md-12 heading-section">
                                <h2>{Deal.title}</h2>
                                <h3 className='discount'>{Deal.discount_percentage}% discount</h3>
                                <p className='deal-desc'>{Deal.desc}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section ftco-section-more">
                    <div className='row cotainer'>
                        
                            {products.map((product,j)=>{
                                return(
                                    <div className='col-md-3 col-sm-6'>
                                        <div className="card" key={j}>
                                            <NavLink to={`/product/${product.id}`}>
                                                <img width={'100%'} src={product.random_product_image} alt={`${product.name}`}/>
                                            </NavLink>
                                            
                                            <div className='card-body'>
                                                <h6 className='discount'>{Deal.discount_percentage}% off</h6>
                                                <NavLink to={`/product/${product.id}`}>
                                                    <h3 className='card-title product-name'>{product.name}</h3>
                                                </NavLink>
                                                <p className='card-text product-desc'>{product.description}</p>
                                            </div>
                                        </div>
                                        <br/>
                                    </div>
                                );
                            })}
                            
                        
                    </div>

                </section>
            </div>
        )
    }
}


class SpecialDeals extends Component{
    componentDidMount = ()=>{
        const {ajaxUrl,fetchSpecialDeals} = this.props;
        const url = `${ajaxUrl}/shop/api/special-deals/`;
        fetchSpecialDeals(url);
    }
    render=()=>{
        const {
            Brand,
            specialdeals,

        } = this.props;
        const {data} = specialdeals;
        
        return(
            <div style={{marginTop:'5em'}}>
                {
                    data !== undefined ?
                    data.map((deal,i)=>{
                        
                        return(
                            <SingleDeal Deal={deal} key={i} />
                        );
                    })
                    : <h4 className='alert alert-danger text-center'>Something went wrong.</h4>
                }
                {data !== undefined && data.length === 0 && <h3 className='text-center alert alert-warning'>No Deals Currently active</h3>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {specialdeals:state.specialdeals}
    
};

export default connect(mapStateToProps,{fetchSpecialDeals})(SpecialDeals);