import React,{Component} from 'react';


class FormError extends Component{

    render=()=>{
        const {errors} = this.props;
        return(
            <div className="form-errors">
                {
                    errors.map((err,i)=>{
                        return(
                            <div className="error" key={i}>
                                <h4 className="field">{err.field}</h4>
                                <p>
                                    {err.message}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default FormError;