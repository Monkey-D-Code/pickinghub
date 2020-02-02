import React,{Component} from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';


// importing actions
import {
    createProduct,
    clearCreatedProduct,

} from '../Redux/Products/Products.actions';


// importing selectors
import {
    selectCreatedProduct,
    selectCreateProductError,
    selectCreatingProduct,

} from '../Redux/Products/Products.selectors';

import {
    selectSelectedCategory,

} from '../Redux/Category/Category.selectors';
import {
    selectSelectedCompany,

} from '../Redux/Company/Company.selectors';
import {
    selectSeller,

} from '../Redux/User/User.selectors';

class ProductForm extends Component{
    state = {
        name : '',
        description : '',
        warranty : '',
        support : '',
    }
    componentDidMount = ()=>{
        this.props.clear();
    }

    inputChange = e =>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    submit = ()=>{
        const {
            category,
            company,
            createProduct,

            seller,

        } = this.props;
        const {
            name,
            description,
            warranty,
            support,

        } = this.state;
        const newProd = {
            category : category.id,
            company : company.id,
            seller : seller.id,
            name,
            description,
            warranty,
            support,

        }
        createProduct(newProd);
    }

    render=()=>{
        const {
            name,
            description,
            warranty,
            support,

        } = this.state;
        const {
            category,
            company,
            createdProduct,
            creating,
            createError,
            path,

        }  = this.props;
        if(creating){
            return(
                <div className="loader">
                     <Loader
                        type="Oval"
                        color="#610345"
                        height={100}
                        width={100}
                        timeout={8000} //3 secs

                    />
                </div>
            )
        }
        return(
            <div className="register">
                <h1>Fill up new product info</h1>
                {
                    createError &&
                    <div className="server-error">
                        {
                            JSON.stringify(createError.data) 
                        }
                    </div>
                }
                <div className="form-group">
                    <form className="register-form">
                        <div className="form-group">
                            <h2 className='heading'>Product Information</h2>
                            <div className="body">
                                <input 
                                    className='input'
                                    type="text" 
                                    name="name" 
                                    
                                    placeholder='Product Name'
                                    value={name}
                                    onChange={this.inputChange}    
                                />
                                <textarea 
                                    name="description"  
                                    className='input'
                                    cols="30" 
                                    rows="5"
                                    value={description}
                                    placeholder='Describe the product'
                                    onChange={this.inputChange}
                                    ></textarea>
                                 
                                
                                
                            </div>
                        </div>
                        <div className="form-group">
                            <h2 className='heading'>Settings</h2>
                            <div className="body">
                                
                                <input 
                                    type="text"
                                    className='input'
                                    name="warranty" 
                                    
                                    placeholder='Enter Warranty Terms'
                                    value={warranty}
                                    onChange={this.inputChange}     
                                />
                                
                                <input 
                                    type="text"
                                    className='input' 
                                    name="support" 
                            
                                    placeholder='Support Terms'
                                    value={support}
                                    onChange={this.inputChange} 
                                />
                                
                                
                                
                                
                            </div>
                            {
                                createdProduct 
                                ?  <div className="message">
                                        <h3>Product Added</h3>
                                        <NavLink to={`${path}/variant-form`}>Next &rarr;</NavLink>
                                    </div>
                                :<button className="login-btn" type='button' onClick={this.submit}>Create Product</button>

                            }
                            
                            
    
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    createdProduct : selectCreatedProduct(state),
    creating : selectCreatingProduct(state),
    createError : selectCreateProductError(state),
    category : selectSelectedCategory(state),
    company : selectSelectedCompany(state),
    seller : selectSeller(state),
})

const mapDispatchToProps = dispatch =>({
    createProduct : (data)=>dispatch(createProduct(data)),
    clear : ()=>dispatch(clearCreatedProduct()),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,

)(ProductForm));