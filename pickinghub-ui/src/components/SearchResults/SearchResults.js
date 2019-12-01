import React,{Component} from 'react';
import {connect} from 'react-redux';
import './SearchResults.css'

import SearchedProduct from '../SearchedProduct/SearchedProduct';
import Loader from '../loader';

class SearchResults extends Component{



    render = ()=>{
        const {
            searchResults,
            searchingProducts,
            searchError,

        } = this.props;
        if(searchingProducts){
            return(
                <Loader />
            )
        }


        return(
            <div className='container'>
                {
                    searchResults 
                    ? <section>
                        <div className='row'>
                            {
                                searchResults.results.length == 0 
                                && <div className='alert alert-warning'>
                                        <p>No results found</p>
                                    </div>
                            }

                            {searchResults.results.map((product,i)=>{
                                return(
                                    <div className='col-md-4' key={i}>
                                        <SearchedProduct 
                                            
                                            product={product}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    : <div className='alert alert-info'>
                        <p>Search results will show up here.</p>    
                    </div>
                }
                {
                    searchError && <div className='alert alert-danger'>
                        {JSON.stringify(searchError)}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = ({searchProducts : {searchResults,searchingProducts,searchError}})=>({
    searchResults,
    searchingProducts,
    searchError,
})

export default connect(
    mapStateToProps,

)(SearchResults);