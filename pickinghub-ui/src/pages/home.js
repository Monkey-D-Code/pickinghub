import React,{Component} from 'react';

// importing components
import Header from '../components/header';
import Trending from '../components/trending';
import Intro from '../components/intro';
import Categories from '../components/categories';
import SpecialDeals from '../components/SpecialDeals/SpecialDeals';

class Home extends Component{

    render=()=>{
        return(
            <div>
                <Header 
                    Brand={this.props.Brand}
                />
                <div className="goto-here"></div>
                <Trending 
                    ajaxUrl={this.props.ajaxUrl}
                />
                <Intro 
                    Brand={this.props.Brand}
                />
                
                <SpecialDeals 
                    ajaxUrl={this.props.ajaxUrl}
                />
                <Categories 
                    ajaxUrl={this.props.ajaxUrl}
                />
            </div>
        );
    }
}

export default Home;