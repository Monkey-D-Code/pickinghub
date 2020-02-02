import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  selectIsAuthenticated,

} from './Redux/User/User.selectors';

import './App.css';



// importing pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import CreateProduct from './pages/create_product';

import UpdateProfile from './pages/UpdateProfile';


// importing components
import NavigationBar from './components/NavigationBar';

class App extends Component{

  render = ()=>{
    const {isAuthenticated} = this.props;
    return(
      <Router>
        {isAuthenticated && <NavigationBar />}
        <Switch>
          <Route exact path='/'>
            {isAuthenticated ? <Redirect to='/dashboard' /> : <Login />}
          </Route>
          <Route exact path='/register'>
            {isAuthenticated ? <Redirect to='/dashboard' /> : <Register />}
          </Route>
          <Route exact path='/dashboard'>
              {isAuthenticated ? <Dashboard /> : <Redirect to='/' /> }
          </Route>
          <Route exact path='/profile'>
              {isAuthenticated ? <Profile /> : <Redirect to='/' /> }
          </Route>
          <Route exact path='/profile-update'>
              {isAuthenticated ? <UpdateProfile /> : <Redirect to='/' /> }
          </Route>
          <Route  path='/create-product'>
              {isAuthenticated ? <CreateProduct /> : <Redirect to='/' /> }
          </Route>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated : selectIsAuthenticated(state),
})

export default connect(
  mapStateToProps,

)(App);
