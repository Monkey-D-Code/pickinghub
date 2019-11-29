import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './FloatingSearch.css';

import {searchInputChange,searchProducts} from '../../Redux/SearchProducts/SearchProducts.actions';

class FloatingSearch extends Component{

    render=()=>{
        const {
            searchText,

            searchInputChange,
            searchProducts,

        } = this.props;
        if(window.location.pathname === '/search'){
            return(
                <div></div>
            )
        }
        return(
            <div className='floating-search'>
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchText}
                    onChange={(e)=>searchInputChange(e.target.value)}    
                />
                <button 
                    className="floating-search-btn"
                    onClick={()=>{
                        searchProducts(searchText);
                        this.props.history.push('/search');
                    }}
                    disabled={searchText.length <2 }
                >
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
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

)(FloatingSearch));



