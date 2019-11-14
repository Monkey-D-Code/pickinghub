import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';


// importing pages
import Home from './pages/home';
import ProductDetails from './pages/product_detail';

// importing components
import NavBar from './components/Navbar';
import Footer from './components/footer';
import Loader from './components/loader';

class App extends Component {
  state = {
    Brand:false,
    Customer:false,
    Admin:false,
    ajaxUrl: window.location.port === '3000' 
              ? 'http://127.0.0.1:8000'
              :`${window.location.protocol}//${window.location.hostname}:${window.location.port}`,
    loading:false,
  }

  componentWillMount=()=>{
    this.getBrand();
  }


  getBrand=()=>{
    const {ajaxUrl} = this.state;
    this.setState({loading:true});
    axios.get(`${ajaxUrl}/api/brand/1/details/`)
      .then(response=>{
        this.setState({
          Brand:response.data,
          loading:false,
        })
      })
      .catch((response,err)=>{
        console.log(err);
        this.setState({loading:false});
      })
  }

  loggedIn = ()=>{
    const {Customer,Admin} = this.state;
    if(Customer || Admin){
      return true;
    }
    return false;
  }



  render =()=>{
    const{loading,Brand,ajaxUrl} = this.state;
    if(loading){
      return <Loader/>;
    }
    return (
      <div className="App">
        <Router>
          <NavBar 
            Brand={Brand}
            loggedIn={this.loggedIn}
          />
          <Switch>
            <Route exact path='/'> 
              <Home
                Brand={Brand}
                ajaxUrl={ajaxUrl}
              />
            </Route>
            <Route exact path='/product/:id' 
              children={<ProductDetails
                ajaxUrl={ajaxUrl}
                Brand={Brand}
                loggedIn={this.loggedIn}
              />}
            /> 
              
            
          </Switch>
          <Footer
            Brand={Brand}
          />
        </Router>
      </div>
    );
  }
}

export default App;
