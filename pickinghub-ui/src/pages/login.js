import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies'

class Login extends Component{
    state={
        username:'',
        password :'',
        errors:[],
        loading:false,
        serverMessage:false,
    }

    changeInput = (e)=>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    submit = ()=>{
        this.setState({
            serverMessage:'',
            errors:[],
        })
        const {username,password} = this.state;
        // validation
        let temp_errors=[];
        if(username.length === 0){
            temp_errors.push({field:'username',message:"Cannot login without username"})
        }
        if(password.length === 0){
            temp_errors.push({field:'password',message:"Cannot login without password"})
        }
        if(username.length < 8){
            temp_errors.push({field:'username',message:"Username too short. Must be 8 characters minimum"})
        }
        if(password.length < 8){
            temp_errors.push({field:'password',message:"Password must be 8 characters"})
        }

        if(temp_errors.length > 0){
            this.setState({errors:temp_errors});

        }else{
            this.setState({loading:true});
            const {ajaxUrl} = this.props;
            axios.post(`${ajaxUrl}/accounts/api/auth-token/`,{username,password})
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
        }
        
    }
    
    render=()=>{
        const {Brand} = this.props;
        const {username,password,loading,serverMessage,errors} = this.state;
        return(
            <section>
                <div className="hero-wrap hero-bread" style={{
                    backgroundImage: `url(${Brand.random_hero_image})`,
                    marginTop:'8em'
                    }}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center">
                            <h2 className="mb-0 bread">Login</h2>
                            
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <section className='login-form'>
                    <form style={{
                        width:'30em',
                        display:'block',
                        margin:'auto'
                    }}>
                        {serverMessage && 
                            <h3 className='alert alert-danger text-center'>{serverMessage}</h3>
                        }
                        <div className='form-group'>
                            <input className='form-control' 
                                type='text'
                                placeholder='Enter Your username'
                                value={username}
                                onChange={this.changeInput}
                                name="username"
                            />
                            {errors.map((err,i)=>{
                                if(err.field === 'username'){
                                    return(
                                        <p className='alert alert-danger' key={i}>{err.message}</p>
                                    )
                                }
                            })}
                        </div>
                        <div className='form-group'>
                            <input className='form-control' 
                                    type='password'
                                    placeholder='Enter Your Password'
                                    value={password}
                                    onChange={this.changeInput}
                                    name="password"
                                />
                            {errors.map((err,i)=>{
                                if(err.field === 'password'){
                                    return(
                                        <p className='alert alert-danger' key={i}>{err.message}</p>
                                    )
                                }
                            })}
                        </div>
                        
                        <div className='form-group'>
                            <button className='btn btn-success' onClick={this.submit} type='button' disabled={loading}>{loading ? "Loggin you in .." : "Login"}</button>
                        </div>
                    </form>
                </section>
            </section>
        );
    }
}

export default withRouter(Login);