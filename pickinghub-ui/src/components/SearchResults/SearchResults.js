import React,{Component} from 'react';
import {connect} from 'react-redux';
import './SearchResults.css'

import SearchedProduct from '../SearchedProduct/SearchedProduct';


class SearchResults extends Component{



    render = ()=>{
        const {
            searchResults,
            searchingProducts,
            searchError,

        } = this.props;
        if(searchingProducts){
            return(
                <div className="spinner-grow text-success" role="status" style={{
                    width : '100%',
                    height : '100%',
                    position : 'absolute',
                    top : '50%',
                    right : '50%',
                    transform : 'translate(-50%,-50%)'
                }}>
                    <span className="sr-only">Loading...</span>
                </div>
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