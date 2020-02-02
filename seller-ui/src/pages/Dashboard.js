import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

import NavigationBar from '../components/NavigationBar';
import AllProducts from '../components/AllProducts';


import { connect } from 'react-redux';

class Dashboard extends Component{

    

    render=()=>{
        return(
            <div className="dashboard">
                
                <h1>Dashboard</h1>
                <AllProducts />
            </div>
        )
    }
}




export default withRouter(Dashboard);