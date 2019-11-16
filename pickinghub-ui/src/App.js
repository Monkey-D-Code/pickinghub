import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route,withRouter} from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
import './App.css';


// importing pages
import Home from './pages/home';
import Login from './pages/login';
import ProductDetails from './pages/product_detail';
import Register from './pages/register';
import Profile from './pages/profile';
import Contact from './pages/contact';
import About from './pages/about';
import DepartmentDetail from './pages/department_detail';

// importing components
import NavBar from './components/Navbar';
import Footer from './components/footer';
import Loader from './components/loader';
import Departments from './components/departments';


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
    const token = cookie.load('sasuke');
    if(token && !this.loggedIn()){
      axios.post(`${this.state.ajaxUrl}/accounts/api/customer-from-token/`,{token})
        .then(response=>{
          this.setState({
            Customer:response.data
          })
        })
        .catch(err=>{
          console.log(err);
          alert(JSON.stringify(err.response.data));
        })
    }
  }
  setCustomer = (customer)=>{
    this.setState({
      Customer:customer
    })
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

  loginCustomer = (customer)=>{
    this.setState({Customer:customer});
  }
  logout = ()=>{
    cookie.remove('sasuke');
    this.setState({
      Customer:false,
    });
    
  }

  render =()=>{
    const{loading,Brand,ajaxUrl,Customer} = this.state;
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
            <Route exact path='/login'>
              <Login 
                ajaxUrl={ajaxUrl}
                Brand={Brand}
                
              />
            </Route>
            <Route exact path='/register'>
              <Register 
                ajaxUrl={ajaxUrl}
                Brand={Brand}
              />
            </Route>
            <Route exact path='/profile'>
              <Profile 
                ajaxUrl={ajaxUrl}
                Brand={Brand}
                loggedIn={this.loggedIn}
                setCustomer={this.setCustomer}
                Customer={Customer}
                logout={this.logout}
              />
            </Route>
            <Route exact path='/contact'>
              <Contact 
                Brand={Brand}
              />
            </Route>
            <Route exact path='/about'>
              <About 
                Brand={Brand}
              />
            </Route>
            <Route exact path='/department/:id' 
              children={<DepartmentDetail
                ajaxUrl={ajaxUrl}
                Brand={Brand}
                loggedIn={this.loggedIn}
              />}
            /> 
          </Switch>
          <Departments 
            ajaxUrl={ajaxUrl}
            Brand={Brand}
          />
          <Footer
            Brand={Brand}
          />
        </Router>
      </div>
    );
  }
}

export default App;
