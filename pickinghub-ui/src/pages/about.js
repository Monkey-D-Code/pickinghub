import React,{Component} from 'react';
import {NavLink,withRouter} from 'react-router-dom';


// importing components
import Intro from '../components/intro';
import Terms from '../components/Terms';
import PrivacyPolicy from '../components/PrivacyPolicy';
import ReturnPolicy from '../components/ReturnPolicy';


class About extends Component{

    render=()=>{
        const {Brand} = this.props;
        return(
            
            <section>
                <div class="hero-wrap hero-bread" style={{
                    backgroundImage: `url(${Brand.random_hero_image})`,
                    marginTop:'8em',
                    }}>
                    <div class="container">
                        <div class="row no-gutters slider-text align-items-center justify-content-center">
                        <div class="col-md-9 text-center">
                            <h1 class="mb-0 bread">About Us</h1>
                            <p class="breadcrumbs"><span class="mr-2"><NavLink to="/">Home</NavLink></span> <span>About</span></p>
                        </div>
                        </div>
                    </div>
                </div>
                
                <Intro 
                    Brand={Brand}
                />
                <br/>
                <br/>
                <br/>
                <Terms 
                    Brand={Brand}
                />
                <PrivacyPolicy 
                    Brand={Brand}
                />
                <ReturnPolicy 
                    Brand={Brand}
                />
            </section>
        );
    }
}

export default withRouter(About);