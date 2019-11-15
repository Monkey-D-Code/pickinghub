import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import cookie from 'react-cookies';
import axios from 'axios';

class Profile extends Component{
    state={
        loading:false,
    }
    style={
        dp:{
            height:'4em',
            width:'4em',
            objectFit:'cover',
            borderRadius:'50%',
            margin:0
        },
        name:{
            padding:0,
            backgroundColor:'rgba(0, 0, 0, 0.64)',
            color:'white',
            
        }
    }
    componentWillMount = ()=>{
        
        const {ajaxUrl} = this.props;
        const token = cookie.load('sasuke');
        if(token){
            this.setState({loading:true});
            axios.post(`${ajaxUrl}/accounts/api/customer-from-token/`,{token})
              .then(response=>{
                this.props.setCustomer(response.data);
                this.setState({loading:false});
              })
              .catch(err=>{
                console.log(err);
                this.setState({loading:false});
                alert(JSON.stringify(err.response.data));
              })
        }else{
            this.props.history.push("/");
        }
    }
    logout = ()=>{
        this.props.logout();
        this.props.history.push("/login");
    }
    render=()=>{
        const {loading} = this.state;
        const {Brand,Customer} = this.props;
        const {all_address,contacts} = Customer;
        const {
            dp,
            name,
        } = this.style;
        if(loading){
            return(
                <div className="hero-wrap hero-bread" style={{
                    backgroundImage: `url(${Brand.random_hero_image})`,
                    marginTop:'2em'
                    }}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center">
                            <h2 className="mb-0 bread">Loading Profile</h2>
                            
                        </div>
                        </div>
                    </div>
                </div>
                
            );
        }
        return(
            <section>
                <div className="hero-wrap hero-bread" style={{
                    backgroundImage: `url(${Brand.random_hero_image})`,
                    marginTop:'8em'
                    }}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center">
                            <h2 className="mb-0 bread" style={name}><img src={`https://ui-avatars.com/api/?name=${Customer.full_name}&size=500&color=A573C6`} style={dp}/> {Customer.full_name}</h2>
                            <br/>
                            <button className="btn btn-primary" onClick={this.logout}><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</button>
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h4 className='text-center'><i className="fa fa-address-book-o" aria-hidden="true"></i> Contacts</h4>
                                <hr/>
                                {contacts.map((contact,i)=>{
                                    return(
                                        <div key={i}>
                                            <h5 className='text-center'><i className="fa fa-phone-square" aria-hidden="true"></i> {contact.label} : {contact.number}</h5>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='col-md-4'>
                                <h4 className='text-center'><i className="fa fa-address-card" aria-hidden="true"></i> Address</h4>
                                <hr/>
                                {all_address.map((address,i)=>{
                                    return(
                                        <div key={i} className="card">
                                            <div className="card-body">
                                                {address.house_no_or_name} , near {address.nearest_landmark} , {address.locality} , {address.district} , {address.state} , {address.country}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </section>

            </section>
        );
    }
}

export default withRouter(Profile);