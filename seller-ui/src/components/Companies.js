import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
import Loader from 'react-loader-spinner';

// importing selectors
import {
    selectCompanyList,
    selectCompanyListError,
    selectLoadingCompanyList,
    selectSelectedCompany,

} from '../Redux/Company/Company.selectors';

// importing actions
import {
    getAllCompanies,
    selectCompany,

} from '../Redux/Company/Company.actions';
class Companies extends Component{
    componentDidMount = ()=>{
        const {getAllCompanies} = this.props;
        getAllCompanies();
    }

    render = ()=>{
        const {
            companies,
            loading,
            error,
            selected,

            selectCompany,
            path,

        } = this.props;
        if(loading){
            return(
                <div className="loader">
                    <Loader
                        type="Oval"
                        color="#610345"
                        height={100}
                        width={100}
                        timeout={8000} //3 secs

                    />
                </div>
            )
        }
        return (
            <div className="all-companies">
                <h1>Select Company</h1>
                <div className="company-list">
                    {
                        companies &&
                        companies.map((company , i)=>{
                            return(
                                <div className="single-company" key={i} onClick={()=>selectCompany(company)}>
                                    <img src={company.cover_image} alt=""/>
                                    <div className="info">
                                        <img src={company.logo_url} alt="" className="logo"/>
                                        <h3>{company.full_name}</h3>
                                        {
                                            selected &&
                                            selected.id === company.id &&
                                            <h3 style={{color:'#A2D729'}}>Selected</h3>
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                    {
                        error &&
                        <div className="server-error">
                            {error}
                        </div>
                    }
                    {
                        selected &&
                        <NavLink className='next-btn' to={`${path}/product-form`}>Next &rarr;</NavLink>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    companies : selectCompanyList(state),
    loading : selectLoadingCompanyList(state),
    error : selectCompanyListError(state),
    selected : selectSelectedCompany(state),
})

const mapDispatchToProps = dispatch =>({
    getAllCompanies : ()=>dispatch(getAllCompanies()),
    selectCompany : (company)=>dispatch(selectCompany(company)),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,

)(Companies));