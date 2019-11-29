import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
// importing components
import SearchResults from '../../components/SearchResults/SearchResults';

// importing actions
import {
            searchInputChange,
            searchProducts,

        } from '../../Redux/SearchProducts/SearchProducts.actions';

import './Search.css';

class Search extends Component{

    render = ()=>{
        const {
            Brand , 
            
            searchText,

            searchProducts,
            searchInputChange,

        } = this.props;
        return (
            <section className='ftco-section'>
                <div className="hero-wrap hero-bread" style={{
                    backgroundImage: `url(${Brand.random_hero_image})`,
                    
                    }}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center">
                            <div className='row'>
                                <div className='col-md-7'>
                                    <input 
                                        type='text'
                                        className='form-control'
                                        placeholder = 'Search our store'
                                        value={searchText}
                                        onChange={(e)=>searchInputChange(e.target.value)}
                                    />
                                </div>
                                <div className='col-md-5'>
                                    
                                    <button 
                                        className="mb-0 bread btn" 
                                        className='search-heading' 
                                        disabled={searchText.length < 2}
                                        onClick={()=>searchProducts(searchText)}

                                    ><i className="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                            </div>
                            
                            
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className='container'>
                    <SearchResults />
                </div>
            </section>
        )
    }
}

const mapStateToProps = ({searchProducts : {searchText}})=>({
    searchText,
})

const mapDispatchToProps = dispatch=>({
    searchInputChange : (newText)=>dispatch(searchInputChange(newText)),
    searchProducts : (text)=>dispatch(searchProducts(text)),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,

)(Search));