import React,{Component} from 'react';



class Intro extends Component{

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
            email,
            about,
            random_normal_image
        } = this.props.Brand;
        return(
            <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${random_normal_image})`}}>
                            <a href="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
                                <span className="icon-play"></span>
                            </a>
                        </div>
                        <div className="col-md-7 py-5 wrap-about pb-md-5">
                <div className="heading-section-bold mb-5 mt-md-5">
                    <div className="ml-md-0">
                        <h2 className="mb-4">{full_name} <br/>Online <br/> <span>Shop</span></h2>
                    </div>
                </div>
                <div className="pb-md-5">
                                <p>{about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;