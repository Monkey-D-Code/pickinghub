import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// importing selectors
import {
    selectVariantsList,

} from '../Redux/Variant/Variant.selectors';

import {
    selectVariant,
} from '../Redux/Variant/Variant.actions';

// importing components
import SingleVariant from './variants/single_variant';
import SubletForm from './sublet/SubletForm';
import SubletList from './sublet/SubletList';


class VariantForm extends Component{

    render =() =>{
        const {variants , selectVariant} = this.props;
        
        return (
            <div className="variant-form">
                <h1>Create Variants</h1>
                <div className="content">
                    <div className="forms">
                        <SingleVariant />
                        <SubletForm />
                    </div>
                    <div className="variants">
                        {
                            variants &&
                            variants.map((variant , i)=>{
                                return(
                                    <div className="one-variant" key={i} onClick={()=>selectVariant(variant)}>
                                        <h3>{variant.label}</h3>
                                        <p>{variant.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <SubletList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    variants : selectVariantsList(state),
})

const mapDispatchToProps = dispatch =>({
    selectVariant : (variant)=>dispatch(selectVariant(variant)),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,

)(VariantForm));