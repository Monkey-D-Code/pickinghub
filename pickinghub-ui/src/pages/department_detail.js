import React,{Component} from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import axios from 'axios';



class DepartmentDetail extends Component{
    state = {
        Department:{},
        loading:true,
    }
    style = {
        dept_cover:{
            width:'5em',
            height:'5em',
            objectFit:'cover',
            borderRadius:'50%',
        },
        heading:{
            backgroundColor:'white',
            padding : '0.5em',
            fontWeight:'bold',
            borderRadius:'0.3em',
            color:'#A573C6'
        },
        bread:{
            backgroundColor:'white',
            padding : '0 1em 0 1em',
            margin:'auto',
            display:'block',
            width:'fit-content',
        },
        single_demo:{
            
            textTransform:'capitalize'
        },
        demo_cover:{
            width:'4em',
            height:'4em',
            objectFit:'cover',
            border: '3px solid #A573C6',
            borderRadius:'50%',
        },
        demo_name:{
            color : '#A573C6',
        },
        single_cate:{

        },
        dept_desc:{
            margin:'auto',
            display:'block',
            backgroundColor:'#A573C6',
            width : '30em',
            padding:'0.3em',
            borderRadius:'0.4em'

        }
    }
    componentWillMount = ()=>{
        const {ajaxUrl} = this.props;
        const dept_id = this.props.match.params.id;
        axios.get(`${ajaxUrl}/shop/api/department/${dept_id}/`)
            .then(response=>{
                this.setState({
                    Department:response.data,
                    loading:false,
                });
            })
            .catch(err=>{
                console.log(err);
                alert(JSON.stringify(err.response.data));
                this.setState({loading:false});
            })
    }
    componentWillReceiveProps=(newProps)=>{
        this.setState({loading:true})
        const {ajaxUrl} = newProps;
        const dept_id = newProps.match.params.id;
        axios.get(`${ajaxUrl}/shop/api/department/${dept_id}/`)
            .then(response=>{
                this.setState({
                    Department:response.data,
                    loading:false,
                });
            })
            .catch(err=>{
                console.log(err);
                alert(JSON.stringify(err.response.data));
                this.setState({loading:false});
            })
    }
    render=()=>{
        const {Department,loading} = this.state;
        const {Brand} = this.props;
        const {
            dept_cover,
            heading,
            bread,
            single_demo,
            demo_cover,
            demo_name,
            single_cate,
            dept_desc,

        } = this.style;

        const {
            demographics,
            

        } = Department;

        if(loading){
            return(
                <div 
                    id="ftco-loader" 
                    className="show fullscreen">
                        <svg class="circular" width="48px" height="48px">
                            <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth={4} stroke="#eeeeee"/>
                            <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00"/>
                        </svg>
                </div>
            )
        }
        return(
            <section className="ftco-section">
                {
                    typeof(Department.id !== "undefined") && 
                    <div>
                        <div className="hero-wrap hero-bread" style={{
                            backgroundImage: `url(${Brand.random_hero_image})`,
                            
                            }}>
                            <div className="container">
                                <div className="row no-gutters slider-text align-items-center justify-content-center">
                                <div className="col-md-9 text-center">
                                    <h1 className="mb-0 bread"><img style={dept_cover} alt={`${Department.name}`} src={Department.cover_image} /> <span style={heading}>{Department.name}</span></h1>
                                    <br/>
                                    <p className="breadcrumbs" style={bread}><span class="mr-2"><NavLink to="/">Home</NavLink></span> <span><i className="fa fa-folder-open" aria-hidden="true"></i> {Department.name}</span></p>
                                    <br/>
                                    <p style={dept_desc}>{Department.desc}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className='container' style={{marginBottom:'1em'}}>
                            {demographics.map((demo,i)=>{
                                return(
                                    <div style={single_demo} key={i}>
                                        <h1 style={demo_name}><img src={demo.cover_image} alt={`${demo.name}`} style={demo_cover}/> {demo.name}</h1>
                                        <hr/>
                                        <div className="row">
                                            {demo.categories.map((cate,j)=>{
                                                return(
                                                    <div className="col-md-4 col-sm-6">
                                                        <div style={single_cate} className="card" key={j}>
                                                            <NavLink to={`/category/${cate.id}`}><img src={cate.cover_image} style={{width:'100%'}}/></NavLink>
                                                            <div className='card-body'>
                                                                <h3 className='card-title'><NavLink to={`/category/${cate.id}`}>{cate.name}</NavLink></h3>
                                                                <p className='card-text'>{cate.desc}</p>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <hr/>
                                    </div>
                                );
                            })}
                        </div>
                        
                    </div>
                }
            </section>
        )
    }
}

export default withRouter(DepartmentDetail);


