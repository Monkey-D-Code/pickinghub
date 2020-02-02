import React,{Component} from 'react';
import {withRouter,Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';


// importing subpages
import Categories from '../components/Categories';
import Companies from '../components/Companies';
import ProductForm from '../components/ProductForm';
import VariantForm from '../components/VariantForm';

class CreateProduct extends Component{

    render=()=>{
        const {match} = this.props;
        return(
            <div className="create-product">
                
                <Route  exact path={`${match.path}`}>
                    <Categories />
                </Route>
                <Route exact path={`${match.path}/companies`}>
                    <Companies path={match.path}/>
                </Route>
                <Route exact path={`${match.path}/product-form`}>
                    <ProductForm path={match.path}/>
                </Route>
                <Route exact path={`${match.path}/variant-form`}>
                    <VariantForm path={match.path} />
                </Route>
                    
                
            </div>

        );
    }
}

export default withRouter(CreateProduct);