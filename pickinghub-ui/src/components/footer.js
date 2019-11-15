import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';


// importing components
import Terms from './Terms';
import PrivacyPolicy from './PrivacyPolicy';
import ReturnPolicy from './ReturnPolicy';

class Footer extends Component{

    render=()=>{
        const {
            full_name,
            logo_url,
            facebook,
            instagram,
            twitter,
            address,
            contact_number,
            tag_line,
            email
        } = this.props.Brand;
        return(
            <footer className="ftco-footer bg-light ftco-section">
                <div className="container">
                    <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">{full_name}</h2>
                        <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                            <li className="ftco-animate"><a href={twitter}><span className="icon-twitter"></span></a></li>
                            <li className="ftco-animate"><a href={facebook}><span className="icon-facebook"></span></a></li>
                            <li className="ftco-animate"><a href={instagram}><span className="icon-instagram"></span></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-5">
                        <h2 className="ftco-heading-2">Menu</h2>
                        <ul className="list-unstyled">
                    
                            <li><NavLink to="/about" className="py-2 d-block">About</NavLink></li>
                            
                            <li><NavLink to="/contact" className="py-2 d-block">Contact</NavLink></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Help</h2>
                        <div className="d-flex">
                            <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                <li><a href="#" className="py-2 d-block">Shipping Information</a></li>
                                <li><a href="#" className="py-2 d-block" data-toggle="modal" data-target="#return">Returns Policy</a></li>
                                <li><a href="#" className="py-2 d-block" data-toggle="modal" data-target="#terms">Terms &amp; Conditions</a></li>
                                <li><a href="#" className="py-2 d-block" data-toggle="modal" data-target="#privacy">Privacy Policy</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><a href="#" className="py-2 d-block">FAQs</a></li>
                                <li><a href="#" className="py-2 d-block">Contact</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                            <ul>
                                <li><span className="icon icon-map-marker"></span><span className="text">{address}</span></li>
                                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+91 {contact_number}</span></a></li>
                                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">{email}</span></a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 text-center">

                        <p>
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Developed & maintained by <a href='https://gieitech.pythonanywhere.com' target='__blank'>GIEITech</a>
                            
                        </p>
                    </div>
                    </div>
                </div>
                <div className="modals">
                    <div class="modal fade" id="terms" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document" style={{
                            minWidth:'100%',
                            margin:0,
                        }}>
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Terms & Conditions</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <Terms 
                                    Brand={this.props.Brand}
                                />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="privacy" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document" style={{
                            minWidth:'100%',
                            margin:0,
                        }}>
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Privacy Policy</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <PrivacyPolicy 
                                    Brand={this.props.Brand}
                                />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="return" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document" style={{
                            minWidth:'100%',
                            margin:0,
                        }}>
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Return Policy</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <ReturnPolicy 
                                    Brand={this.props.Brand}
                                />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </footer>
        );
    }
}

export default Footer;