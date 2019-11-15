import React,{Component} from 'react';
import {withRouter,NavLink} from 'react-router-dom';

// importing components
import ContactForm from '../components/contact_form';

class Contact extends Component{

    render=()=>{
        const {Brand} = this.props;
        return(
            <section>
                <div className="hero-wrap hero-bread" style={{
                        backgroundImage: `url(${Brand.random_hero_image})`,
                        marginTop:'8em',
                    }}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center">
                            <h1 className="mb-0 bread">Contact Us</h1>
                            <p className="breadcrumbs"><span className="mr-2"><NavLink to="/">Home</NavLink></span> <span>Contact</span></p>
                        </div>
                        </div>
                    </div>
                </div>
                <section className="ftco-section contact-section bg-light">
                    <div className="container">
                        <div className="row block-9">
                        <div className="col-md-6 order-md-last d-flex">
                            <ContactForm 
                                Brand={Brand}
                            />
                        
                        </div>

                        <div className="col-md-6 d-flex">
                            <div className="bg-white">

                                <iframe 
                                    src={Brand.gmap_src} 
                                    
                                    frameBorder={0} 
                                    style={{
                                        border:0,
                                        height:'100%',
                                        
                                    }} 
                                    allowFullScreen={true}
                                ></iframe>
                            </div>
                        </div>
                        </div>
                        <div className="row d-flex mt-5 contact-info">
                        <div className="w-100"></div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Address:</span> {Brand.address}</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Phone:</span> <a href={`tel://${Brand.contact_number}`}>+91 {Brand.contact_number}</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Email:</span> <a href={`mailto:${Brand.email}`}>{Brand.email}</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Website</span> <a href="#">pickinghub.com</a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                        
                    <section className="ftco-section-parallax">
                        <div className="parallax-img d-flex align-items-center">
                            <div className="container">
                            <div className="row d-flex justify-content-center py-5">
                                <div className="col-md-7 text-center heading-section ftco-animate">
                                    <h1 className="big">Subscribe</h1>
                                <h2>Subcribe to our Newsletter</h2>
                                <div className="row d-flex justify-content-center mt-5">
                                    <div className="col-md-8">
                                    <form action="#" className="subscribe-form">
                                        <div className="form-group d-flex">
                                        <input type="text" className="form-control" placeholder="Enter email address"/>
                                        <input type="submit" value="Subscribe" class="submit px-3"/>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
            </section>
        );
    }
}

export default withRouter(Contact);
