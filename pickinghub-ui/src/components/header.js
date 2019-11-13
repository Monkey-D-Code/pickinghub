import React,{Component} from 'react';

class Header extends Component{

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
            random_hero_image,
            foundation_date,
        } = this.props.Brand;
        return(
            <div className="hero-wrap js-fullheight" style={{backgroundImage: `url(${random_hero_image})`}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                        <h3 className="v">{full_name} - {tag_line}</h3>
                        <h3 className="vr">Since - {foundation_date}</h3>
                    <div className="col-md-11 ftco-animate text-center">
                        <h1>Welcome To {full_name}</h1>
                        <h2><span>{tag_line}</span></h2>
                    </div>
                    <div className="mouse">
                        <a href="#" className="mouse-icon">
                            <div className="mouse-wheel"><span className="ion-ios-arrow-down"></span></div>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;