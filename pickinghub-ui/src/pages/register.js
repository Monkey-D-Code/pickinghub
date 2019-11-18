import React,{Component} from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies'

class Register extends Component{
    state = {
        first_name:'',
        middle_name : '',
        last_name :'',
        email:'',
        username:'',
        password:'',
        confirm_password:'',
        errors : [],
        loading : false,
        
    }
    style = {
        form:{
            width:'20em',
             display:'block',
            margin:'auto',
        },
        ip:{
           
        }
    }
    changeInput = (e)=>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    errorsOfField = (name)=>{
        const {errors} = this.state;
        let field_errors = [];
        errors.forEach((error)=>{
            if(error.field === name){
                field_errors.push(error);
            }
        })
        return field_errors;

    }
    submit = ()=>{
         const {
            first_name,
            middle_name,
            last_name,
            email,
            username,
            password,
            confirm_password,
            loading,
            
        } = this.state;
        const {ajaxUrl} = this.props;

        let temp_errors = [];
        if(first_name.length === 0){
            temp_errors.push({
                field : 'first_name',
                message : 'You must Enter Your First name'
            })
        }
        if(last_name.length === 0){
            temp_errors.push({
                field : 'last_name',
                message : 'You must Enter Your Last name'
            })
        }
        if(email.length === 0){
            temp_errors.push({
                field : 'email',
                message : 'Email is also important'
            })
        }
        if(username.length === 0){
            temp_errors.push({
                field : 'username',
                message : 'Please choose a username',
            })
        }
        if(password.length < 8){
            temp_errors.push({
                field : 'password',
                message : 'Password must be 8 characters long',
            })
        }
        if(confirm_password.length === 0){
            temp_errors.push({
                field : 'confirm_password',
                message : 'Nothing here !',
            })
        }
        if(confirm_password.length < 8){
            temp_errors.push({
                field : 'confirm_password',
                message : 'Do it properly please .',
            })
        }
        
        
        if(password !== confirm_password){
            temp_errors.push({
                field : 'confirm_password',
                message : 'Passwords don\'t match',
            })
        }
        
        if(temp_errors.length > 0){
            this.setState({errors:temp_errors})
        }else{
            this.setState({
                errors:[],
                loading:true,
            });
            const data = {
                user : {
                    first_name,
                    last_name,
                    email,
                    username,
                    password,
                },
                middle_name,
            }
            axios.post(
                    `${ajaxUrl}/accounts/api/customer-register/`,
                    data,
                    {"X-CSRFToken":cookie.load('csrftoken')}   
                )
                .then((response)=>{
                    console.log(response.data);
                    // logging customer in
                    axios.post(
                        `${ajaxUrl}/accounts/api/auth-token/`,
                        {username,password},
                        {"X-CSRFToken":cookie.load('csrftoken')}
                        )
                        .then(response=>{
                            console.log(response.data);
                            cookie.save('sasuke',response.data.token);
                            this.props.history.push('/profile');
                        })
                        .catch((err)=>{
                            console.log(err);
                            this.setState({
                                serverMessage:JSON.stringify(err.response.data.non_field_errors),
                                loading:false,
                            })
                                
                        })
                    
                    
                })
                .catch((response)=>{
                    this.setState({loading:false})
                    console.log(response);
                })
        }
        

    }

    render=()=>{
        const {
            form,
            ip,

        } = this.style;
        const {Brand} = this.props;
        const {
            first_name,
            middle_name,
            last_name,
            email,
            username,
            password,
            confirm_password,
            loading,

        } = this.state;
        return(
            <section>
                <div class="hero-wrap hero-bread" style={{backgroundImage: `url(${Brand.random_hero_image})`}}>
                <div class="container">
                    <div class="row no-gutters slider-text align-items-center justify-content-center">
                    <div class="col-md-9 text-center">
                        <h2 class="mb-0 bread">Register</h2>
                        <p class="breadcrumbs"><span class="mr-2"><NavLink to='/'>Home</NavLink></span> <span>Register</span></p>
                    </div>
                    </div>
                </div>
                </div>
                <br/>
                <br/>
                <div style={form}>
                        
                        <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Your first name' 
                            style={ip}
                            name='first_name'
                            value={first_name}
                            onChange={this.changeInput}
                        />
                        {
                            this.errorsOfField('first_name').length > 0 
                            && <div className='alert alert-danger'>
                                <ul>
                                    {this.errorsOfField('first_name').map((err,i)=>{
                                        return(
                                            <li key={i}>{err.message}</li>
                                        )
                                    })}
                                </ul>
                            
                            </div>
                        }
                        <br/>
                        
                        <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Your middle name (optional)' 
                            style={ip}
                            name='middle_name'
                            value={middle_name}
                            onChange={this.changeInput}    
                        />
                        <br/>
                        <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Your Last name' 
                            style={ip}
                            name='last_name'
                            value={last_name}
                            onChange={this.changeInput}    
                        />
                        {
                            this.errorsOfField('last_name').length > 0 
                            && <div className='alert alert-danger'>
                                <ul>
                                    {this.errorsOfField('last_name').map((err,i)=>{
                                        return(
                                            <li key={i}>{err.message}</li>
                                        )
                                    })}
                                </ul>
                            
                            </div>
                        }
                        <br/>
                        <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Choose a Username (Min 8 characters)' 
                            style={ip}
                            name='username'
                            value={username}
                            onChange={this.changeInput}
                        />
                        {
                            this.errorsOfField('username').length > 0 
                            && <div className='alert alert-danger'>
                                <ul>
                                    {this.errorsOfField('username').map((err,i)=>{
                                        return(
                                            <li key={i}>{err.message}</li>
                                        )
                                    })}
                                </ul>
                            
                            </div>
                        }
                        <br/>
                        <input 
                            type='email' 
                            className='form-control' 
                            placeholder='Your Email' 
                            style={ip}
                            name='email'
                            value={email}
                            onChange={this.changeInput}
                        />
                        {
                            this.errorsOfField('email').length > 0 
                            && <div className='alert alert-danger'>
                                <ul>
                                    {this.errorsOfField('email').map((err,i)=>{
                                        return(
                                            <li key={i}>{err.message}</li>
                                        )
                                    })}
                                </ul>
                            
                            </div>
                        }
                        <br/>
                        <input 
                            type='password' 
                            className='form-control' 
                            placeholder='Choose a password (Min 8 characters)' 
                            style={ip}
                            name='password'
                            value={password}
                            onChange={this.changeInput}    
                        />
                        {
                            this.errorsOfField('password').length > 0 
                            && <div className='alert alert-danger'>
                                <ul>
                                    {this.errorsOfField('password').map((err,i)=>{
                                        return(
                                            <li key={i}>{err.message}</li>
                                        )
                                    })}
                                </ul>
                            
                            </div>
                        }
                        <br/>
                         <input 
                            type='password' 
                            className='form-control' 
                            placeholder='Confirm your password' 
                            style={ip}
                            name='confirm_password'
                            value={confirm_password}
                            onChange={this.changeInput}
                        />
                        {
                            this.errorsOfField('confirm_password').length > 0 
                            && <div className='alert alert-danger'>
                                <ul>
                                    {this.errorsOfField('confirm_password').map((err,i)=>{
                                        return(
                                            <li key={i}>{err.message}</li>
                                        )
                                    })}
                                </ul>
                            
                            </div>
                        }
                        <br/>
                        <button className='btn btn-success btn-block' onClick={this.submit} disabled={loading}>{loading? 'Signing you up':<i className="fa fa-user-plus" aria-hidden="true"></i>} Register</button>
                        <br/>
                </div>
            </section>
        );

    }
}

export default withRouter(Register);
