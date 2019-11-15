import React,{Component} from 'react';


class PrivacyPolicy extends Component{

    render=()=>{
        const {Brand} = this.props;
        const {privacy_policy} = Brand;
        return(
            <section className="ftco-section ftco-product">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                <div className="col-md-12 heading-section text-center">
                    <h1 className="big">Privacy Policy</h1>
                    <h2 className="mb-4">Privacy Policy</h2>
                </div>
                </div>
                    <div className="row">
                        
                           {privacy_policy.map((policy,i)=>{
                               return(
                                    <div className="col-md-4" key={i}>
                                        <div className="card">
                                            <div className='card-body'>
                                                <h4 className='card-title'>{policy.label}</h4>
                                                <p className='card-text'>{policy.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                               );
                           })}
                        
                    </div>
                </div>
            </section>
        );
    }
}


export default PrivacyPolicy;