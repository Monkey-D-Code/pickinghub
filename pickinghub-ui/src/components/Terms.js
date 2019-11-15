import React,{Component} from 'react';




class Terms extends Component{
    style={
        term_label:{
            background : 'black',
            color:'white',
        }
    }

    render=()=>{
        const {
            term_label
        } = this.style;
        const {Brand} = this.props;
        const {terms_conditions} = Brand;
        return(
            <section>
                <div className="container" style={{marginTop:'1em'}}>
                    <div className="col-md-12 heading-section text-center">
                        <h1 className="big">Our Terms</h1>
                        <h2 className="mb-4">Our Terms & Conditions</h2>
                        <div className='row'>
                            {terms_conditions.map((term,i)=>{
                                return(
                                    <div className='col-md-4 card' key={i} style={{
                                        margin:'1em'
                                    }}>
                                        <div className='card-hrading'>
                                            <h4 style={term_label}>{term.label}</h4>
                                            <div className='card-body'>
                                                <p>{term.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Terms;