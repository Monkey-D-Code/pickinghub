import React,{Component} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

// importing selectors
import {
    selectCreatedVariant,
    selectVariantCreateError,
    selectCreatingVariant,

} from '../../Redux/Variant/Variant.selectors';

import {
    selectCreatedProduct,

} from '../../Redux/Products/Products.selectors';

// importing actions
import {
    createVariant,

} from '../../Redux/Variant/Variant.actions';


class SingleVariant extends Component{

    state = {
        label : '',
        desc : '',
    }

    inputChange = e =>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    submit = ()=>{
        const {
            product,
            createVariant,

        } = this.props;
        const {
            label,
            desc,
        } = this.state;
        const data = {
            product : product.id,
            label,
            desc,
        }
        createVariant(data);
    }
    render=()=>{
        const {
            label,
            desc,
        } = this.state;
        const {
            createdVariant,
            loading,
            error,


        } = this.props;
        if(loading){
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
        return (
            <div className="single-variant">
                <form>
                    {
                        error &&
                        <div className="server-error">
                            {JSON.stringify(error.data)}
                        </div>
                    }
                    <input 
                        type="text" 
                        name="label" 
                        className='input'
                        placeholder = 'Choose a label'
                        onChange={this.inputChange}
                        value={label}
                    />
                    <textarea 
                        name="desc" 
                        className='input'
                        placeholder = 'Write about the label'
                        onChange={this.inputChange}
                        value={desc}
                        cols="30" 
                        rows="5"
                    ></textarea>
                    <button className="login-btn" type='button' onClick={this.submit}>Add Variant</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    createdVariant :selectCreatedVariant(state),
    loading : selectCreatingVariant(state),
    product : selectCreatedProduct(state),
    error : selectVariantCreateError(state),
})

const mapDispatchToProps = dispatch=>({
    createVariant : (data)=>dispatch(createVariant(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(SingleVariant);
