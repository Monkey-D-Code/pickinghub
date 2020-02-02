import React,{Component} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

// importing selectors
import {
    selectSelectedVariant,

} from '../../Redux/Variant/Variant.selectors';
import {
    selectCreatedSublet,
    selectCreatingSublet,
    selectSubletCreateError,

} from '../../Redux/Sublet/Sublet.selectors';

// importing actions
import {
    createSublet,

} from '../../Redux/Sublet/Sublet.actions';


class SubletForm extends Component{
    state = {
        value : '',
        color_hex : '',
        max_retail_price : '',
        selling_price : '',
        purchase_price : '',
    }

    inputChange = e =>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    submit = ()=>{
        const {
            variant,
            createSublet,
        } = this.props;
        const {
            value,
            color_hex,
            max_retail_price,
            selling_price,
            purchase_price,

        } = this.state;
        const data = {
            variant : variant.id,
            value,
            color_hex,
            max_retail_price,
            selling_price,
            purchase_price,
        }
        createSublet(data);

    }

    render=()=>{
        const {
            value,
            color_hex,
            max_retail_price,
            selling_price,
            purchase_price,

        } = this.state;
        const {
            variant,
            created,
            error,
            loading,

        } = this.props;
        if(loading){
            return(
                <Loader
                    type="Oval"
                    color="#610345"
                    height={100}
                    width={100}
                    timeout={8000} //3 secs

                />
            )
        }
        return(
            <div className="sublet-form">
                {
                    variant &&
                        <form>
                            {
                                error &&
                                <div className='server-error'>
                                    {JSON.stringify(error.data)}
                                </div>
                            }
                            <input 
                                type="text" 
                                name="value"
                                className='input'
                                value={value}
                                onChange={this.inputChange}
                                placeholder="Enter Sublet Value" 
                                
                            />
                            <input 
                                type="text" 
                                name="color_hex"
                                className='input'
                                value={color_hex}
                                onChange={this.inputChange}
                                placeholder="Paste a color code" 
                            />
                            <input 
                                type="number" 
                                name="max_retail_price"
                                min={0}
                                className='input'
                                value={max_retail_price}
                                onChange={this.inputChange}
                                placeholder="Provide MRP" 
                                
                            />
                            <input 
                                type="number" 
                                name="selling_price"
                                min={0}
                                className='input'
                                value={selling_price}
                                onChange={this.inputChange}
                                placeholder="Selling Price" 
                                
                            />
                            <input 
                                type="number" 
                                name="purchase_price"
                                min={0}
                                className='input'
                                value={purchase_price}
                                onChange={this.inputChange}
                                placeholder="Price while buying" 
                                
                            />
                            
                            <button className="login-btn" type='button' onClick={this.submit}>Add Sublet</button>
                            
                            
                        </form>
                }
            </div>

        );
    }
}

const mapStateToProps = state =>({
    variant : selectSelectedVariant(state),
    created : selectCreatedSublet(state),
    error : selectSubletCreateError(state),
    loading : selectCreatingSublet(state),
})

const mapDispatchToProps = dispatch=>({
    createSublet : (data)=>dispatch(createSublet(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SubletForm);